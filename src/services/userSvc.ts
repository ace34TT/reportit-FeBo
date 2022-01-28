import { IUser } from "../interafaces/IUser";
import { get, post } from "./https"

const entity = "user/"

const urls = {
    all: "all",
    add: "add"
}

export const addUser = async (data: any): Promise<any> => {
    const rep = await post(entity + urls.add, data);
    return rep.body;
}

export const getAllUser = async () => {
    console.log("miantso ny suer");
    const res = await get(entity + urls.all)
    const data: IUser[] = res.data
    return data;
}
