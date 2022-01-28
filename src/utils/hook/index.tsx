import moment from 'moment';
import { useState, useEffect } from 'react'

export function useGet(service: Function) {
    const [data, setData] = useState<any[]>()
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    useEffect(() => {
        if (!service) return
        setLoading(true)
        async function fetchData() {
            try {
                const data = await service()
                setData(data)
                console.log(data);
            } catch (err) {
                console.log(err)
                setError(true)
            } finally {
                // console.log("fin");
                setLoading(false)
            }
        }
        fetchData()
    }, [service])
    const obj = { isLoading, data, error }
    return obj
}

export function useFormatDate(date: Date) {
    const d = moment(date)
    return d.format('llll');
}