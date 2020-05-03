import React, { useState, useEffect } from "react";
import HttpService from "../services/http-service";
import AppConstants from "./constants";

export const ApiContext = React.createContext({});

const Context = (props: any) => {
  const [medias, setMedias] = useState([]);
  const [pointTables, setPointTables] = useState([]);
  const [cardDetails, setCardDetails] = useState([]);
  const [tournaments, setTournaments] = useState([]);
  const [eventDetails, setEventDetails] = useState([]);
  const [userDetails, setUserDetails] = useState({ email: "", role: "" });

  useEffect(() => {
    HttpService.fetch(AppConstants.API.HOME_CAROUSEL_API).then((medias) => {
      setMedias(medias);
    });
    HttpService.fetch(AppConstants.API.GET_POINT_TABLE_API).then((pointTables) => {
      setPointTables(pointTables.tournaments);
    });
    HttpService.fetch(AppConstants.API.HOME_CARD_API).then((cardDetails) => {
      setCardDetails(cardDetails);
    });
    HttpService.fetch(AppConstants.API.TEAMS_API).then((results) => {
      setTournaments(results.tournaments);
    });
    HttpService.fetch(AppConstants.API.GET_CLUB_EVENTS_API).then((eventDetails) => {
      setEventDetails(eventDetails);
    });
  }, []);

  return (
    <ApiContext.Provider
      value={{
        medias,
        pointTables,
        cardDetails,
        tournaments,
        eventDetails,
        userDetails,
        setUserDetails,
        setPointTables
      }}
    >
      {props.children}
    </ApiContext.Provider>
  );
};

export default Context;
