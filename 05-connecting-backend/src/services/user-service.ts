import apiClient from "./api-client";
import create from "./http-service";

export interface User {
    // say we are just interested in first two properties only
    id: number;
    name: string;
}



export default create('/users');