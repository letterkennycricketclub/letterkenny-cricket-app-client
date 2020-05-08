import AppConstants from "../core/constants";

declare const FB: any;
let isFbInitializede: boolean = false;

export class FbService {
  private static initFb() {
    FB.init({
      appId: AppConstants.APP_ID,
      autoLogAppEvents: true,
      xfbml: true,
      version: "v6.0",
    });
    isFbInitializede = true;
  }

  public static sharePost(cardDetail: any, pageURL: string) {
    console.log("data from service to send to fb ui method", cardDetail);
    console.log("page url to send to fb ui method", pageURL);
    if (!isFbInitializede) {
      this.initFb();
    }
    FB.ui(
      {
        method: "share_open_graph",
        action_type: "og.shares",
        display: "popup",
        action_properties: JSON.stringify({
          object: {
            "og:url": pageURL,
            "og:title": cardDetail.title,
            "og:description": cardDetail.description,
            "og:image": cardDetail.url,
          },
        }),
      },
      function (response: any) {
        console.log(response);
      }
    );
  }
}
