import { IIndexable } from "../services/http-service";
export interface Media {
  title: string;
  type: string;
  url: string;
}

export interface PointTable {
<<<<<<< HEAD
    Tournament_Id: string;
    Tournament_Name: string;
    data: Array<any>;
=======
  id: string;
  name: string;
  data: Array<any>;
>>>>>>> 99a91454c5a1b63654e46558e16121dfad03865d
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
  teams?: Team[];
}

export interface BarInterface {
  key?: number;
  x?: any;
  y?: any;
  width?: number;
  height?: number;
}

export interface IFbMetaTags {
  description?: string;
  link?: string;
  title?: string;
  image?: string;
}

export type AppProps = {
  allowedPointHeaders?: string[];
  medias?: Media[];
  pointTables?: PointTable[];
  tournaments?: Tournament[];
  cardDetails?: CardDetail[];
  eventDetails?: CardDetail[];
  chartData?: any;
  barInterface?: BarInterface;
  hasShareLink?: boolean;
  fbMetaTags?: IFbMetaTags;
};
