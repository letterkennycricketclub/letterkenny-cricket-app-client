import serviceConfig from '../service-config';


interface IIndexable {
  [key: string]: any;
}

export default class HttpService {

  static BASE_URL = "http://preview.letterkennycricketclub.com";


  private static getURL(serviceId: string) {
    console.log( this.BASE_URL + (serviceConfig as IIndexable)[serviceId])
    return this.BASE_URL + (serviceConfig as IIndexable)[serviceId];
  }

  public static async fetch(serviceId: string) {
    const res = await fetch(this.getURL(serviceId));
    const {results, error} = await res.json();
    if (!error) {
      return results;
    } else {
      console.error('Something Bad Happened ! ', JSON.stringify(error));
    }
  }
}