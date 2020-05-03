import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import AppConstants from "../../core/constants";

const Seo = (props: any) => {
  const { data } = props;
  console.log("MetaData", data);
  return (
    <Helmet>
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta name="og:url" content={data.link} />
      <meta name="og:title" content={data.title} />
      <meta name="og:description" content={data.description} />
      <meta name="og:image" content={data.image} />
      <meta name="og:type" content="website" />
      <meta name="fb:app_id" content={AppConstants.APP_ID} />
    </Helmet>
  );
};

Seo.propTypes = {
  data: PropTypes.object,
};

export default Seo;
