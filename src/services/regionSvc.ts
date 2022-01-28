import axios from "axios";
import { IRegion, IRegionStatistique } from "../interafaces/IRegion";
import { timeout } from "../utils/delay";
import { get, post } from "./https"

const entity = "region/"

const urls = {
    all: "all",
    statistique : "statistque"
}

export const getGeocodeInf = async (coordinates: string): Promise<any> => {
    let data: any = {};
    let status: number = 0;
    while (true) {
        const res = await axios.get("https://geocode.xyz/" + coordinates + "?geoit=json")
            .then((response) => {
                status = response.status
                data = response.data
            }).catch((error) => {

            })
        if (status == 200) {
            break
        }
        await timeout(1000)
    }
    return data;
}

export const getAllRegions = async () => {
    const res = await get(entity + urls.all)
    const data: IRegion[] = res.data
    return data;
}

export const GetStatRegion = async () => {
    const res = await get(entity + urls.statistique)
    const data: IRegionStatistique[] = res.data
    return data;
}


