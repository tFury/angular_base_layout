//#region IMPORTS
import { INavElement                    } from "../../model/navigationElements/navElement";
import { Router                         } from "@angular/router";

import { Component,
         Input,
         OnInit,
         ViewEncapsulation} from "@angular/core";
//#endregion

@Component({
    selector: "navigation-panel",
    templateUrl: "./navigationPanel.component.html",
    styleUrls: [
        "./navigationPanel.component.scss"
    ]
})
export class NavigationPanelComponent implements OnInit {

    @Input() elements: INavElement[] = [];

    constructor(
        private router: Router
    ) {
        console.log("NavigationPanelComponent");
    }

    ngOnInit() {
        console.log("elements", this.elements);
    }

    action(element:INavElement) {
        console.log("element", element);

        this.router.navigateByUrl(element.path);
    }
}
