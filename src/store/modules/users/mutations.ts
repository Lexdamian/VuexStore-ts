import { MutationTree } from "vuex";
import { User, UsersStateInterface } from './models'
import {
    MUTATION_SAVE_USER, MUTATION_SET_SELECTED_USERS_TO_ASSIGN
} from './types'

const mutations: MutationTree<UsersStateInterface> = {
    [MUTATION_SAVE_USER]: (state, payload: User) => {
        state.user = payload;
    },

    [MUTATION_SET_SELECTED_USERS_TO_ASSIGN]: (state, payload: User[]) => {
        state.selectedUsers = payload;
    }
}

export default mutations;
