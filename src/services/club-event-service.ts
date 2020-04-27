var base64 = require("base-64");
export interface ClubEvent {
  title : string
  description : string
  url : string
  date : string
  links? : Link[]
}

export interface Link {
  title : string
  url : string
}

export class ClubEventService {
  public static async addEvent(user: User) {
    sessionStorage.setItem(UUID, base64.encode(JSON.stringify(user)));
    return true;
  }

}
