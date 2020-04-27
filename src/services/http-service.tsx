import serviceConfig from "../service-config";

export interface IIndexable {
  [key: string]: any;
}

export default class HttpService {
  static BASE_URL = "http://preview.letterkennycricketclub.com"; //"http://localhost:3002";
  static requestHeaders: any = { "Content-Type": "application/json" };

  private static getURL(serviceId: string) {
    console.log(this.BASE_URL + (serviceConfig as IIndexable)[serviceId]);
    return this.BASE_URL + (serviceConfig as IIndexable)[serviceId];
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

  public static async fetch1(serviceId: string, requestOptions: {} = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }) {
    return fetch(this.getURL(serviceId), requestOptions).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    )
  }

  public static async postData(serviceId: string, data = {}) {
    const url = this.getURL(serviceId);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
}
