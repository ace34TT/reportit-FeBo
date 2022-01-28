import { IRegion } from "./IRegion"
import { IUser } from "./IUser"

export interface IReportImage {
    id: number,
    name: string,
    url: string
}

export interface IReportType {
    id: number,
    name: string
}

export interface IReport {
    id: number,
    user: IUser,
    latitude: number,
    longitude: number,
    region: IRegion,
    type: IReportType,
    created_at: Date | string,
    description: string,
    level: number,
    state: number,
    images: IReportImage[]
}


export interface IReportStatistique {
    date : string ,
    non_assigne : number ,
    assigne : number ,
    en_cours : number ,
    termine : number 
}