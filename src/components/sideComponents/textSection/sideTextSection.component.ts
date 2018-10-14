//#region IMPORTS
import { Component,
         Input,
         OnInit } from "@angular/core";
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

@Component({
    selector: "side-text-section",
    templateUrl: "./sideTextSection.component.html",
    styleUrls: [
        "./sideTextSection.component.scss"
    ]
})
export class TextSectionComponent {

    @Input() title: string = "";
    @Input() text: string = "";

    constructor( ) {
        logger.debug("Constructor TextSectionComponent called");
    }

}
