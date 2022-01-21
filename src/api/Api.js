import axios from 'axios';
import { envairoment } from '../config/envairoment';


export const Api = axios.create({
    baseURL: envairoment.url
});