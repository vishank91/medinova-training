import { Service } from '@angular/core';

@Service()
export class AuthService {
    getAuth(key: any) {
        if (typeof localStorage != "undefined") {
            return localStorage.getItem(key)
        }
        else
            return ""
    }
    setAuth(key: any, value: any) {
        if (typeof localStorage != "undefined")
            localStorage.setItem(key, value)
    }

    deleteAuth() {
        if (typeof localStorage != "undefined") {
            localStorage.clear()
        }
        return ""
    }
}
