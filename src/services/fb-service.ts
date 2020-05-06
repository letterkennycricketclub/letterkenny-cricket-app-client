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
        method: "share",
        href: data.link,
        name: "Facebook Dialogs",
        link: data.link,
        picture: data.image,
        caption: data.title,
        description: data.description,
      },
      function (response: any) {
        console.log(response);
      }
    );
  }
}
