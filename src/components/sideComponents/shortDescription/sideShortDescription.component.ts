//#region IMPORTS
import {
    Component,
    Input,
    OnInit
} from "@angular/core";
//#endregion

@Component({
    selector: "side-content",
    templateUrl: "./sideShortDescription.component.html",
})
export class SideContentComponent implements OnInit {

    @Input() description: string = "";

    constructor() {
        console.log("SideContentComponent");
    }

    ngOnInit() {
        console.log("title", this.description);
    }
}
