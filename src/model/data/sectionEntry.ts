import { IContent } from "./content";

export interface ISection {
    title?: string;
    path?: string;
    type?: string;
    description?: string;
    contents?: IContent[];
    subsections?: ISection[];
}