//#region IMPORTS
import { Component,
         Input,
         OnInit } from "@angular/core";
//#endregion

@Component({
    selector: "side-title",
    templateUrl: "./sideTitle.component.html",
    styleUrls: [
        "./sideTitle.component.scss"
    ]
})
export class SideTitleComponent implements OnInit {

    @Input() title: string = "";

    constructor( ) {
        console.log("SideTitleComponent");
    }

    ngOnInit() {
        console.log("title", this.title);
    }
}
