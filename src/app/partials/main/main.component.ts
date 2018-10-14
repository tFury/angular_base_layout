//#region IMPORTS
import { Component, OnInit } from "@angular/core";
import { DataService } from "../../service/data.service";
import { ISection } from "../../../model/data/sectionEntry";
import { Router } from "@angular/router";
//#endregion

@Component({
    selector: "main",
    templateUrl: "./main.component.html",
})
export class MainComponent implements OnInit {

    section: ISection;

    constructor(
        private dataService: DataService,
        private router: Router
    ) {
        console.log("Main Component");
    }

    ngOnInit() {
        this.section = this.dataService.loadData(this.router.url.substring(1));
    }

}
