// import IoCContainer from 'ioc-lite';

// // import { Logger } from '../services/logger';
// // import { HTTP } from '../services/http';
// // import { Users } from '../services/users';

// export const createIoCContainer = () =>  {
//   const ioc = new IoCContainer();
//   // you can register some resources right now below...

//   return ioc;
// };

import IoCContainer from "ioc-lite";
import { Logger } from "../services/logger";
import { HTTP } from "../services/http";
import { Users } from "../services/users";

type IoCResources = {
    Users: typeof Users;
    Logger: typeof Logger;
    HTTP: typeof HTTP;
    apiConfig: any;
};

export const createIoCContainer = () => {
    const ioc = new IoCContainer<IoCResources>();

    // Registering services with the IoC container
    ioc.registerClass("Logger", Logger);
    ioc.registerClass("HTTP", HTTP);
    ioc.registerClass("Users", Users);

    return ioc;
};
