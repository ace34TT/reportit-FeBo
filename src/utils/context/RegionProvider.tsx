import React, { FC, ReactNode, useEffect, useState } from 'react'
import { createContext } from "react";
import { IRegion } from '../../interafaces/IRegion';
import { getAllRegions } from '../../services/regionSvc';
// 
type IRegionContext = {
    regions: IRegion[]
}
const defaultState: IRegionContext = {
    regions: []
}
export const RegiontContext = createContext<IRegionContext>(
    defaultState
);
// 
const RegionProvider: FC = ({ children }) => {
    const [regions, setReport] = useState<IRegion[]>([])
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const getRegions = async () => {
            setLoading(true)
            try {
                const data: IRegion[] = await getAllRegions()
                console.log(data);

                setReport(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }
        }
        getRegions();
    }, [])
    return (
        <RegiontContext.Provider
            value={{ regions }}
        >
            {children}
        </RegiontContext.Provider>
    )
}

export default RegionProvider