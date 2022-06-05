import React from "react";
import Sponsors from "./Sponsors";

import "./SponsorsFeatures.css";

import row1img1 from "../../../assets/row1img1.png";
import row1img2 from "../../../assets/row1img2.png";
import row2img1 from "../../../assets/row2img1.png";
import row2img2 from "../../../assets/row2img2.png";
import row2img3 from "../../../assets/pregleAI_logo.png";

const row1 = [
  {
    id: 1,
    name: "CEERI Pillani",
    type: "Sponsors",
    shortDescription: "Eveyone should participate",
    description: "",
    from: "2023-01-01T00:00:00.000Z",
    to: "2023-01-01T00:00:00.000Z",
    venue: "google meet",
    registrationUrl: "#",
    image: `${row1img1}`,
    pdf: "",
    updatedAt: "",
    username: "isnartech",
  },
  {
    id: 2,
    name: "DPS",
    type: "Sponsors",
    shortDescription: "Sponsors",
    description: "",
    registrationUrl: "#",
    image: `${row1img2}`,
    pdf: "",
    updatedAt: "",
    username: "isnartech",
  },
  {
    id: 3,
    name: "Memorance AI, Taiwan",
    type: "Sponsors",
    shortDescription: "Sponsors",
    description: "",
    registrationUrl: "#",
    image: "",
    pdf: "",
    updatedAt: "",
    username: "isnartech",
  },
];
const row2 = [
  {
    id: 1,
    name: "NITs",
    type: "Sponsors",

    shortDescription: "Sponsors",
    description: "",

    registrationUrl: "#",
    image: `${row2img1}`,
    pdf: "",
    updatedAt: "",
    username: "isnartech",
  },
  {
    id: 2,
    name: "UP Government",
    type: "Sponsors",

    shortDescription: "Sponsors",
    description: "",

    registrationUrl: "#",
    image: `${row2img2}`,
    pdf: "",
    updatedAt: "",
    username: "isnartech",
  },
  {
    id: 3,
    name: "Aptavec Technology Solutions, Edmonton, Alberta Canada",
    type: "Sponsors",

    shortDescription: "Sponsors",
    description: "",

    registrationUrl: "#",
    image: "",
    pdf: "",
    updatedAt: "",
    username: "isnartech",
  },
];

const row3 = [
  {
    id: 4,
    name: "PregleAI Research & Smart Solutions",
    type: "Sponsors",

    shortDescription: "Sponsors",
    description: "",

    registrationUrl: "#",
    image: `${row2img3}`,
    pdf: "",
    updatedAt: "",
    username: "isnartech",
  },
];

const SponsorsFeatures = () => {
  return (
    <>
      <div className="gpt3__features_sponsors sections__padding" id="Sponsors">
        <div className="gpt3__features-heading_sponsors">
          <h1 className="gradient__text">Collaborations</h1>
          {/* <p>Why should you choose us ?</p> */}
        </div>
        <div className="gpt3__features-container_sponsors">
          {row1?.map((event) => {
            return <Sponsors event={event} key={event.id} />;
          })}
        </div>
        <div className="gpt3__features-container_sponsors">
          {row2?.map((event) => {
            return <Sponsors event={event} key={event.id} />;
          })}
        </div>
      </div>
      <div className="gpt3__features_sponsors_row">
        
        <div className="row">
          {row3?.map((event) => {
            return <Sponsors event={event} key={event.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default SponsorsFeatures;
