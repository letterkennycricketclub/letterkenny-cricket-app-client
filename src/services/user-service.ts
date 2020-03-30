
const Base64 = require('js-base64');
export interface User {
    email: string;
    password: string;
    role: string;
}

const UUID: string = 'uuID'

export class UserService {
    public static async login(user:User) {
        sessionStorage.setItem(UUID, Base64.encode(JSON.stringify((user))));
        return true;
    }

    public static logout(): void {
        sessionStorage.removeItem(UUID);
    }

    public static isUserLoggedIn(): boolean {
        return sessionStorage.getItem(UUID) ? true : false;
    }

    public static getUser(): User {
        const user: any = sessionStorage.getItem(UUID);
        return JSON.parse(Base64.decode(user));
    }
}