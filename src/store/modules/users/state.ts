import { UsersStateInterface } from "./models";

const state: UsersStateInterface = {
    users: [
        {
            name: 'Alexandru',
            age: 33,
            gender: 'Male',
            email: 'damian.al3xandru@emailcom',
        },
        {
            name: 'John',
            age: 34,
            gender: 'Male',
            email: 'john.cena@email.com',
        },
        {
            name: 'Trevor',
            age: 21,
            gender: 'Male',
            email: 'trevor@email.com',
        }
    ],
    user: null,
    selectedUsers: null,
}

export default state;