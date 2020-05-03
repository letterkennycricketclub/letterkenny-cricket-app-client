import { IIndexable } from '../services/http-service';
export interface Media {
    title:string;
    type:string;
    url:string;
}

export interface PointTable {
    id: string;
    name: string;
    data: Array<any>;
}

export interface CardDetail {
    url?: string;
    title?: string;
    description?: string;
    date?: string;
    links?: Array<any>;
}

export interface Team {
    name?: string;
    url?: string;
    id?: string;
    players?: Player[];
}

export interface Player {
    name?: string;
    role?: string;
}

export interface Tournament {
    name?: string;
    id?: string;
    teams? : Team[];
}

export interface BarInterface {
    key?: number;
    x?: any;
    y? : any;
    width? : number;
    height? : number;
}

export type AppProps = {
    allowedPointHeaders?: string[];
    medias?: Media[];
    pointTables? : PointTable[];
    tournaments?: Tournament[];
    cardDetails?: CardDetail[];
    eventDetails?: CardDetail[];
    chartData?: any;
    barInterface?: BarInterface;
}