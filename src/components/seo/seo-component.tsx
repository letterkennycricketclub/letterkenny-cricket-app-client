import React from "react";
import { Helmet } from "react-helmet";
import AppConstants from "../../core/constants";
import { AppProps, IFbMetaTags } from "../../core/props";

const Seo: React.FC<AppProps> = (props) => {
  console.log("props from seo component to set Meta tags", props);
  return (
    <Helmet>
      <title>{props.fbMetaTags!.title}</title>
      <meta
        name="description"
        content={props.fbMetaTags!.description}
        data-react-helmet="true"
      />
      <meta name="og:url" content={props.fbMetaTags!.link} />
      <meta name="og:title" content={props.fbMetaTags!.title} />
      <meta name="og:description" content={props.fbMetaTags!.description} />
      <meta property="og:image" content={props.fbMetaTags!.image} />
      <meta name="og:type" content="website" />
      <meta name="fb:app_id" content={AppConstants.APP_ID} />
    </Helmet>
  );
};

export default Seo;
