import * as vuex from 'vuex';
import { MainStateInterface } from '@/store';
import axios from 'axios';
import { User, UsersStateInterface } from './models'
import { 
    ACTION_DELETE_USER,
    ACTION_LOAD_USERS,
    MUTATION_SAVE_USER,
    MUTATION_SET_USERS } from './types';


const actions: vuex.ActionTree<UsersStateInterface, MainStateInterface> = {
    [ACTION_LOAD_USERS]: (context, payload) => {
        return axios.get('/users', payload).then((response) => {
            context.commit(MUTATION_SET_USERS, response.data || [])
        })
    },

    [ACTION_DELETE_USER]: (context, payload: User) => {
        return axios.delete(`user/${payload}`).then((response) => {
            context.commit(MUTATION_SET_USERS)
        })
    },

    
}

export default actions;