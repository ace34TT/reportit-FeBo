import React, { FC, ReactNode, useEffect, useState } from 'react'
import { GetAllReports } from '../../services/reportSvc';
import { createContext } from "react";
import { IReport } from "../../interafaces/IReport";
// 
type IReportContext = {
    reports: IReport[],
    updateReports: () => void
}
const defaultState: IReportContext = {
    reports: [],
    updateReports: () => { }
}

export const ReportContext = createContext<IReportContext>(
    defaultState
);
//

const ReportProvider: FC = ({ children }) => {
    const [reports, setReport] = useState<IReport[]>([])
    const [loading, setLoading] = useState(false);
    const updateReports = () => {
        getReports()
    }
    const getReports = async () => {
        setLoading(true)
        try {
            const data: IReport[] = await GetAllReports()
            setReport(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        getReports();
    }, [])
    return (
        <ReportContext.Provider
            value={{ reports, updateReports }}
        >
            {children}
        </ReportContext.Provider>
    )
}

export default ReportProvider
