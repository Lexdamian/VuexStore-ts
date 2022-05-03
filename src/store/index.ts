import { createStore, Store as VuexStore, useStore as vuexUseStore } from 'vuex';

import { MODULE_NAME_USERS } from './modules/users/types';

import users from './modules/users';

import { UsersStateInterface } from './modules/users/models';

export interface MainStateInterface {
    [MODULE_NAME_USERS]: UsersStateInterface;
}

let appStore: any;
export default function() {
    const Store = createStore<MainStateInterface>({
        modules: {
            [MODULE_NAME_USERS]: users,
        },
    });
    appStore = Store;
    return Store;
}

export { appStore };
