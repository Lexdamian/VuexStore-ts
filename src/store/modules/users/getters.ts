import { GetterTree } from "vuex";
import { MainStateInterface } from "@/store";
import { UsersStateInterface } from "./models";
import { GETTER_USERS } from './types'

const getters:  GetterTree<UsersStateInterface, MainStateInterface> = {
    [GETTER_USERS]: (state) => {
        return state.users;
    }
}

export default getters;