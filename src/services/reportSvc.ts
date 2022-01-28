import { IReport, IReportStatistique } from "../interafaces/IReport"
import { get, post, put } from "./https"

const entity = "report/"

const urls = {
    all: "all",
    new: "new",
    assigned: "assigned",
    processing: "processing",
    solved: "solved",
    add: "add",
    update: "update/",
    reportstatistique: "statistique"
}

export const GetAllReports = async (): Promise<IReport[]> => {
    const res = await get(entity + urls.all)
    const data: IReport[] = res.data
    return data;
}

export const GetNewReports = async (): Promise<IReport[]> => {
    const res = await get(entity + urls.new)
    const data: IReport[] = res.data
    return data;
}

export const GetAssignedReports = async (): Promise<IReport[]> => {
    const res = await get(entity + urls.assigned)
    const data: IReport[] = res.data
    return data;
}

export const GetProcessingReports= async (): Promise<IReport[]> => {
    const res= await get(entity + urls.processing )
    const data : IReport[] = res.data 
    return data ;
}

export const GetSolvedReports= async (): Promise<IReport[]> => {
    const res= await get(entity + urls.solved )
    const data : IReport[] = res.data 
    return data ;
}

export const UpdateReport = async (report: IReport): Promise<any> => {
    let date: string = report.created_at.toString()
    date = date.replace("T", " ");
    date = date.replace(":00", "")
    report.created_at = date
    console.log(JSON.stringify(report));
    const rest = await put(entity + urls.update + report.id, report);
}

export const GetReportStatistique = async (data : {firstdate: string, seconddate: string}) => {
    const res = await get(entity + urls.reportstatistique, data)
    const result: IReportStatistique[] = res.data
    return result;
}