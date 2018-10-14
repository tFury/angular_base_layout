//#region Imports
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SideTitleComponent } from "./title/sideTitle.component";
import { SideContentComponent } from "./shortDescription/sideShortDescription.component";
import { TextSectionComponent } from "./textSection/sideTextSection.component";
//#endregion

@NgModule({
    imports: [
        CommonModule
    ],

    exports: [
        SideTitleComponent,
        SideContentComponent,
        TextSectionComponent
    ],

    declarations: [
        SideTitleComponent,
        SideContentComponent,
        TextSectionComponent
    ]
})
export class SideModule {
}