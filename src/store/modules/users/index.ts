import { Module } from 'vuex';
import { MainStateInterface } from '@/store';
import { UsersStateInterface } from './models';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';

const usersModule: Module<UsersStateInterface, MainStateInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state,
}

export default usersModule;