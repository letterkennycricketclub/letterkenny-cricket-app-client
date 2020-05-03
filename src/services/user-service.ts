import HttpService, { IIndexable } from "../services/http-service";
import AppConstants from "../core/constants";

var base64 = require("base-64");
export interface User {
  email: string;
  password: string;
  role: string;
}

export class UserService {
  public static async login(user: User) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const requestOptions = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(user),
    };

    const userDetails = await HttpService.fetch1(
      AppConstants.API.LOGIN_API,
      requestOptions
    )
      .then((res) => {
        if (res.success) {
          sessionStorage.setItem(
            AppConstants.AUTH_TOKEN,
            res.results.sessionID
          );
          sessionStorage.setItem(AppConstants.USER_EMAIL, res.results.email);
          sessionStorage.setItem(AppConstants.USER_ROLE, res.results.role);
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
    sessionStorage.removeItem(AppConstants.AUTH_TOKEN);
  }

  public static isUserLoggedIn(): boolean {
    return sessionStorage.getItem(AppConstants.AUTH_TOKEN) ? true : false;
  }

  public static getUser(): User {
    const user: any = sessionStorage.getItem(AppConstants.AUTH_TOKEN);
    return JSON.parse(base64.decode(user));
  }
}
