import HttpService from "./http-service";
import AppConstants from "../core/constants";
var base64 = require("base-64");
export interface ClubEvent {
  title: string;
  description: string;
  url?: string;
  date: string;
  mediaFile?: any;
  links?: Link[];
}

export interface Link {
  title: string;
  url: string;
}

export class ClubEventService {
  public static async addEvent(clubEvent: any) {
    const formData = new FormData();

    for (const name in clubEvent) {
      formData.append(name, clubEvent[name]);
    }

    const headers = new Headers();
    headers.append("Authorization", `Bearer ${HttpService.getAuthToken()}`);

    const requestOptions = {
      method: "POST",
      headers: headers,
      body: formData,
    };
    const response = await HttpService.fetch1(
      AppConstants.API.ADMIN.ADD_EVENT,
      requestOptions
    );
    return response;
  }
}
