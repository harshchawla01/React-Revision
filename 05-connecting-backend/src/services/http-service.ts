// Generic code for any service

import apiClient from "./api-client";

interface Entity { // for updateUser
    id: number
}

class HttpService {

    endpoint: string;

    constructor(endpoint: string) { // In generic approach, the main catch is the endpoint. Bcz you will have different endpoints for different entities
        this.endpoint = endpoint;
    }

    getAll<T>() { 
        const controller = new AbortController(); // to cancel or abort async operations

        const request =  apiClient // returns a promise
        // tell get that we are expecting an array of users
        .get<T[]>(this.endpoint + "/", {
        signal: controller.signal,
      })
      return  { request, cancel: () => controller.abort() }
    }

    delete(id: number) {
        const request = apiClient.delete(this.endpoint + "/" + id);
        return request;
    }

    create<T>(entity: T) {
       return apiClient
      .post(this.endpoint + "/", entity)
    }

    update<T extends Entity>(entity: T) {
        return apiClient.patch(this.endpoint + "/" + entity.id, entity)
    }
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;