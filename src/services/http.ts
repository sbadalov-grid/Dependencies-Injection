// import { Logger } from './logger';

// import type { ApiConfig } from '../types';
// export class HTTP {
//   logger: Logger;
//   apiConfig: ApiConfig;

//   constructor(apiConfig: ApiConfig) {
//     this.apiConfig = apiConfig;
//     this.logger = new Logger();
//   }

//   async get(url: string) {
//     const response = await fetch(`${this.apiConfig.path}${url}`);

//     if (response.ok) {
//       const responseData = await response.json();
//       this.logger.info(`Status: ${response.status}. Response: ${JSON.stringify(responseData)}`);

//       return responseData;
//     } else {
//       this.logger.error(`Status: ${response.status}. Status Text: ${response.statusText}`);
//     }
//   }
// }

import { Logger } from "./logger";
import type { ApiConfig } from "../types";

export class HTTP {
    static $inject = ["apiConfig", "Logger"]; // Dependencies to be injected
    logger: Logger;
    apiConfig: ApiConfig;

    // Order of arguments in the constructor should match the order in $inject.
    constructor(apiConfig: ApiConfig, logger: Logger) {
        this.apiConfig = apiConfig;
        this.logger = logger;
    }

    async get(url: string) {
        const response = await fetch(`${this.apiConfig.path}${url}`);

        if (response.ok) {
            const responseData = await response.json();
            this.logger.info(
                `Status: ${response.status}. Response: ${JSON.stringify(
                    responseData
                )}`
            );

            return responseData;
        } else {
            this.logger.error(
                `Status: ${response.status}. Status Text: ${response.statusText}`
            );
        }
    }
}
