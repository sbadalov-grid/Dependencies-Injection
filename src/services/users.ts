// import { HTTP } from './http';

// import type { ApiConfig, User } from '../types';
// export class Users {
//   http: HTTP;
//   apiConfig: ApiConfig;

//   constructor(apiConfig: ApiConfig) {
//     this.http = new HTTP(apiConfig);
//     this.apiConfig = apiConfig;
//   }

//   getUsers() {
//     return this.http.get(this.apiConfig.resources.users) as unknown as User[];
//   }
// }

import { HTTP } from "./http";
import type { ApiConfig, User } from "../types";

export class Users {
    static $inject = ["apiConfig", "HTTP"]; // Dependencies to be injected
    http: HTTP;
    apiConfig: ApiConfig;

    // Order of arguments in the constructor should match the order in $inject.
    constructor(apiConfig: ApiConfig, http: HTTP) {
        this.http = http;
        this.apiConfig = apiConfig;
    }

    getUsers() {
        return this.http.get(
            this.apiConfig.resources.users
        ) as unknown as User[];
    }
}
