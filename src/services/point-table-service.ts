import HttpService from './http-service';
import AppConstants from '../core/constants';
var base64 = require("base-64");
export interface ClubEvent {
  title : string
  description : string
  url? : string
  date : string,
  mediaFile? : any,
  links? : Link[]
}

export interface Link {
  title : string
  url : string
}

export class PointTableService {
  public static async updatePointTable(_pointTables: any) {
    
    const requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body : JSON.stringify({pointTables :{ results : {tournaments : _pointTables}}})
    };
    const response = await HttpService.fetch1(AppConstants.API.ADMIN.UPDATE_POINT_TABLE, requestOptions);
    return response;
  }

}
