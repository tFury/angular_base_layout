//#region IMPORTS
import { Injectable } from "@angular/core";
import { IData } from "../../model/data/data";
import { ISection } from "../../model/data/sectionEntry";
import { INavElement } from "../../model/navigationElements/navElement";
import { isNull } from "util";
//#endregion

@Injectable()
export class DataService {

    private data: IData = require("../../assets/data/data.json");

    constructor() {
        console.log("Service constructor", this.data);
    }

    /**
     * loads data by spcific path
     * @param path the path for which the data should be loaded
     */
    loadData(path: string, sections?: ISection[]): ISection {
        let inSub = true;

        if (typeof(sections) === "undefined") {
            sections = this.data.sections;
            inSub = false;
        }

        for (const section of sections) {
            if (section.path === path) {
                return section;
            }

            if (typeof(section.subsections) !== "undefined") {
                const res = this.loadData(path, section.subsections);
                if (!isNull(res)) {
                    return res;
                }
            }
        }

        console.log("INSUB", inSub);

        if (!inSub) {
            return this.data.sections[0];
        }
        return null;
    }

    /**
     * get the available sections
     * @param sections the section of which the Navigation elements should select from. Default is data.sections
     */
    getNavigationElements(sections?: ISection[]): INavElement[] {

        if (typeof(sections) === "undefined") {
            sections = this.data.sections;
        }

        const routes: INavElement[] = [];
        for (const section of sections) {

            let route: INavElement = null;

            if (typeof(section.subsections) !== "undefined") {
                route = {
                    name: section.title,
                    subsection: this.getNavigationElements(section.subsections)
                };
            } else {
                route = {
                    path: section.path,
                    name: section.title,
                };
            }

            routes.push(route);
        }

        return routes;
    }

}