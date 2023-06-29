import api from "../http";
import { AxiosResponse } from 'axios'

export default class Service {

    static async search(value: string): Promise<AxiosResponse> {

        return api.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&nprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${value}`)

    }

}