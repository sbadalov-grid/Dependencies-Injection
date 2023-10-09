// import { Users } from './services/users';
// import { Logger } from './services/logger';

// import type { User, ApiConfig } from './types';

// const renderUsers = async (config: ApiConfig) => {
//   const usersService = new Users(config);
//   const users = await usersService.getUsers();

//   const listNode = document.getElementById('users-list');

//   users.forEach((user: User) => {
//     const listItemNode = document.createElement('li');

//     listItemNode.innerHTML = user.name;
//     listNode.appendChild(listItemNode);
//   });
// };

// const app = () => {
//   const config = (window as any).__CONFIG__;
//   delete (window as any).__CONFIG__;

//   renderUsers(config.api);
// };

// window.onload = (event: Event) => {
//   const logger = new Logger();

//   logger.info('Page is loaded.');

//   app();
// };

import { createIoCContainer } from "./ioc";
import type { User, ApiConfig } from "./types";

const renderUsers = async (ioc: any, config: ApiConfig) => {
    const usersService = ioc.resolve("Users", config); // Use IoC container to resolve dependencies
    const users = await usersService.getUsers();

    const listNode = document.getElementById("users-list");

    users.forEach((user: User) => {
        const listItemNode = document.createElement("li");
        listItemNode.innerHTML = user.name;
        listNode.appendChild(listItemNode);
    });
};

const app = () => {
    const config = (window as any).__CONFIG__;
    delete (window as any).__CONFIG__;

    const ioc = createIoCContainer();
    ioc.register("apiConfig", config.api); // Register the runtime configuration with the IoC container

    renderUsers(ioc, config.api);
};

window.onload = (event: Event) => {
    const ioc = createIoCContainer();
    const logger = ioc.resolve("Logger"); // Get an instance of the Logger using IoC

    console.log("logger", logger);

    logger.info("Page is loaded.");
    app();
};
