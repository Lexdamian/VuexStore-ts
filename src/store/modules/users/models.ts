export interface UsersStateInterface {
    users: User[] | null;
    user: User | null;
    selectedUsers: User[] | null;
}

export interface User {
    name: string;
    age: number;
    gender: string;
    email: string;
}