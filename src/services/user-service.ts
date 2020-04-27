import HttpService, { IIndexable } from "../services/http-service";
import AppConstants from "../core/constants";
import serviceConfig from "../service-config";

var base64 = require("base-64");
export interface User {
  email: string;
  password: string;
  role: string;
}

let UUID: string;

export class UserService {
  public static async login(user: User) {
    const userDetails = await HttpService.postData(
      AppConstants.API.LOGIN_API,
      user
    )
      .then((res) => {
        if (res.success) {
          sessionStorage.setItem(
            UUID,
            base64.encode(JSON.stringify(res.sessionID))
          );
          return res.results;
        } else {
          throw "Invalid email or password.";
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
    return userDetails;
  }

  public static logout(): void {
    sessionStorage.removeItem(UUID);
  }

  public static isUserLoggedIn(): boolean {
    return sessionStorage.getItem(UUID) ? true : false;
  }

  public static getUser(): User {
    const user: any = sessionStorage.getItem(UUID);
    return JSON.parse(base64.decode(user));
  }
}
