export interface INavElement {
    name: string;
    path?: string;
    subsection?: INavElement[];
}