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

  public static sharePost(data: any) {
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
            "og:url": data.link,
            "og:title": data.title,
            "og:description": data.description,
            "og:image": data.image,
          },
        }),
      },
      function (response: any) {
        console.log(response);
      }
    );
  }
}
