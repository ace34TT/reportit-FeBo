import axios from 'axios'

const base_url = 'https://reportitws.herokuapp.com/api/'
// const base_url = 'http://localhost:8080/api/';

export const get: any = (ePoint: string, params?: any): Promise<any> => {
    return axios.get(base_url + ePoint);
}

export const post = (ePoint: string, data: any, params?: any): Promise<any> => {
    return axios.post(base_url + ePoint, data)
}

export const put = (ePoint: string, data: any): Promise<any> => {
    return axios.put(base_url + ePoint, data)
}
