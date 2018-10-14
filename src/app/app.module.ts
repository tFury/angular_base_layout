//#region Imports
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatSidenavModule } from "@angular/material/sidenav";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { MainComponent } from "./partials/main/main.component";
import { NavigationModule } from "../components/navigationPanel/navigationPanel.module";
import { SideModule } from "../components/sideComponents/side.module";
import { DataService } from "./service/data.service";
import { INavElement } from "../model/navigationElements/navElement";

import {
    RouterModule,
    Routes,
    Router,
    Route
} from "@angular/router";
//#endregion

//#region LOGGER
import { Logger, ELoglevel, ETransportType } from "letslog";

const logger = new Logger({
    baseComment: "app.module.ts",
    loglvl: ELoglevel.DEBUG,
    transports: [
        {
            showBaseComment: true,
            showDate: false,
            showLoglevel: true,
            type: ETransportType.console
        }
    ]
});
//#endregion

const appRoutes: Routes = [
    {
        path: "",
        component: MainComponent
    }
];

@NgModule({
    bootstrap: [
        AppComponent
    ],

    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: false,
                onSameUrlNavigation: "reload",
                useHash: true
            }
        ),
        BrowserModule,
        MatSidenavModule,
        BrowserAnimationsModule,
        NavigationModule,
        SideModule
    ],

    providers: [
        DataService
    ],

    entryComponents: [
        AppComponent
    ],

    declarations: [
        AppComponent,
        MainComponent
    ],
})
export class AppModule {

    constructor(
        private router: Router,
        private dataService: DataService
    ) {
        logger.debug("Constructor of App.Module called");
        this.router.resetConfig(this.addRoutes());
    }

    private addRoutes(navElements?: INavElement[], routesSubset?: Routes): Routes {

        let routes: Routes = [];

        if (typeof(routesSubset) !== "undefined") {
            routes = routesSubset;
        }

        if (typeof(navElements) === "undefined") {
            navElements = this.dataService.getNavigationElements();
        }

        for (const element of navElements) {

            if (typeof(element.subsection) === "undefined") {
                routes.push(this.getRoutElement(element.path));
            } else {
                this.addRoutes(element.subsection, routes);
            }
        }

        return routes;
    }

    private getRoutElement(path: string, type?: string): Route {
        return {
            path: path.replace("/", ""),
            component: MainComponent
        };
    }
}
