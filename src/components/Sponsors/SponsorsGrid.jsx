import React from "react";
import "./SponsorsGrid.scss";
import Sponsors from "./Sponsors";

const SponsorsGrid = () => {
  const dummylectures = [
    {
      id: 1,
      name: "Coming Soon",
      type: "LECTURES",
      shortDescription: "Eveyone should participate",
      description: "Hello World",
      from: "2023-01-01T00:00:00.000Z",
      to: "2023-01-01T00:00:00.000Z",
      venue: "google meet",
      registrationUrl: "#",
      image: "https://i.ibb.co/hK4w03Z/download.png",
      pdf: "",
      updatedAt: "",
      username: "ojas",
    },
    {
      id: 1,
      name: "Coming Soon",
      type: "LECTURES",
      shortDescription: "Eveyone should participate",
      description: "Hello World",
      from: "2023-01-01T00:00:00.000Z",
      to: "2023-01-01T00:00:00.000Z",
      venue: "google meet",
      registrationUrl: "#",
      image: "https://i.ibb.co/hK4w03Z/download.png",
      pdf: "",
      updatedAt: "",
      username: "ojas",
    },
    {
      id: 1,
      name: "Coming Soon",
      type: "LECTURES",
      shortDescription: "Eveyone should participate",
      description: "Hello World",
      from: "2023-01-01T00:00:00.000Z",
      to: "2023-01-01T00:00:00.000Z",
      venue: "google meet",
      registrationUrl: "#",
      image: "https://i.ibb.co/hK4w03Z/download.png",
      pdf: "",
      updatedAt: "",
      username: "ojas",
    },
  ];

  return (
    <div className="lectures">
      <h1 className="gradient__text">Sponsors</h1>
      <div className="lectures-container">
        {dummylectures?.map((event) => {
          return <Sponsors event={event} key={event.id} />;
        })}
      </div>
    </div>
  );
};

export default SponsorsGrid;
