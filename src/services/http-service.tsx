import serviceConfig from "../service-config";
import AppConstants from "../core/constants";

export interface IIndexable {
  [key: string]: any;
}

export default class HttpService {
  static BASE_URL = "http://localhost:3002";
  static requestHeaders: any = { "Content-Type": "application/json" };

  private static getURL(serviceId: string) {
    console.log(this.BASE_URL + (serviceConfig as IIndexable)[serviceId]);
    return this.BASE_URL + (serviceConfig as IIndexable)[serviceId];
  }

  public static getAuthToken() {
    return sessionStorage.getItem(AppConstants.AUTH_TOKEN);
  }

  public static getReqHeader() {
    let header = new Headers();
    header.append("Content-Type", "application/json");
    if (this.getAuthToken()) {
      header.append("Authorization", `Bearer ${this.getAuthToken()}`);
    }
    return header;
  }

  public static async fetch(serviceId: string) {
    const res = await fetch(this.getURL(serviceId));
    const { results, error } = await res.json();
    if (!error) {
      return results;
    } else {
      console.error("Something Bad Happened ! ", JSON.stringify(error));
    }
  }

  public static async fetch1(
    serviceId: string,
    requestOptions: {} = {
      method: "GET",
      headers: this.getReqHeader(),
    }
  ) {
    return fetch(this.getURL(serviceId), requestOptions).then(
      (response) => response.json(),
      (error) => console.log("An error occurred.", error)
    );
  }
}
