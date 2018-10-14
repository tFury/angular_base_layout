//#region IMPORTS
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { INavElement } from "../model/navigationElements/navElement";
import { DataService } from "./service/data.service";
//#endregion

//#region LOGGER
import { Logger, ELoglevel, ETransportType } from "letslog";

const logger = new Logger({
    baseComment: "app.component.ts",
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

@Component({
    selector: "app",
    templateUrl: "./app.component.html",
    styleUrls: [
        "./app.component.scss"
    ]
})
export class AppComponent implements OnInit {

    navElements: INavElement[] = [];

    constructor(
        private router: Router,
        private dataService: DataService
    ) {
        logger.debug("Constructor AppComponent called");
    }

    ngOnInit() {
        this.navElements = this.getNavElements();
    }

    routeTo(path: string) {
        this.router.navigateByUrl(path);
    }

    private getNavElements(): INavElement[] {
        return this.dataService.getNavigationElements();
    }

}
