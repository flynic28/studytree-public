export interface GridConfig {
    section?: ClassContainer;
    row?: ClassContainer;
    columns: GridColumn[];
}

export interface GridColCOnfig {
    col: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

export interface GridColumn {
    image?: MediaConfig;
    text?: TextConfig;
    gridWidth: GridColCOnfig;
    gridOffset?: GridColCOnfig;
    pushCol?: GridColCOnfig;
    pullCol?: GridColCOnfig;
}

export interface ClassContainer {
    cssClass?: string;
}

export interface MediaConfig {
    url?: string;
    cssClass?: string;
}

export interface TextConfig {
    lead?: TagConfig;
    header?: TagConfig;
    paragraph?: TagConfig;
}

export interface TagConfig {
    value: string;
    cssClass?: string;
}
