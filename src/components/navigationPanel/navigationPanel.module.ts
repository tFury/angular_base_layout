//#region Imports
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonToggleModule } from "@angular/material/button-toggle";

import { NavigationPanelComponent } from "./navigationPanel.component";
//#endregion

@NgModule({
    imports: [
        CommonModule,
        MatButtonToggleModule
    ],

    exports: [
        NavigationPanelComponent
    ],

    declarations: [
        NavigationPanelComponent
    ]
})
export class NavigationModule {
}