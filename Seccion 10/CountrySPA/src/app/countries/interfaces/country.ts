export interface Country {
    name:         Name;
    tld:          string[];
    cca2:         string;
    ccn3:         string;
    cca3:         string;
    cioc?:        string;
    independent:  boolean;
    status:       Status;
    unMember:     boolean;
    currencies:   { [key: string]: Currency };
    idd:          Idd;
    capital:      string[];
    altSpellings: string[];
    region:       Region;
    subregion?:   string;
    languages:    Languages;
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    area:         number;
    demonyms:     Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    gini?:        { [key: string]: number };
    fifa?:        string;
    car:          Car;
    timezones:    string[];
    continents:   string[];
    flags:        Flags;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
    borders?:     string[];
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs: string[];
    side:  Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export interface Currency {
    name:   string;
    symbol: string;
}

export interface Demonyms {
    eng:  EngClass;
    fra?: EngClass;
}

export interface EngClass {
    f: string;
    m: string;
}

export interface Flags {
    png:  string;
    svg:  string;
    alt?: string;
}

export interface Idd {
    root:     string;
    suffixes: string[];
}

export interface Languages {
    eng?: EngEnum;
    aym?: string;
    grn?: string;
    que?: string;
    spa?: string;
    ara?: string;
    ron?: string;
    cnr?: string;
    crs?: string;
    fra?: string;
    zho?: string;
    ell?: string;
    tur?: string;
    dan?: string;
    hat?: string;
    rus?: string;
    ita?: string;
    swe?: string;
    lat?: string;
    afr?: string;
    nbl?: string;
    nso?: string;
    sot?: string;
    ssw?: string;
    tsn?: string;
    tso?: string;
    ven?: string;
    xho?: string;
    zul?: string;
}

export enum EngEnum {
    English = "English",
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex:  string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum StartOfWeek {
    Monday = "monday",
    Sunday = "sunday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
}
