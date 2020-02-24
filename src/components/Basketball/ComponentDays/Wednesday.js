import React from "react";
import { OpenGymInst } from "../../OpenGymInst";
import { OpenGym } from "../../../OpenGymInst";

const openGyms = [
  new OpenGymInst(
    null,
    "East Portland Community Center",
    "740 SE 106th Ave, Portland, OR 97216",
    null,
    "Basketball",
    "Wednesday",
    "6:00 - 8:00 AM",
    "Adults (18-59) $6.25, Seniors(60+) $5",
    "Open Adult (Ages 18+ w/ photo ID)",
    "https://issuu.com/portlandparks/docs/epcc_wi_sp20_issuu?fr=sZGFiZjUwOTgxNw",
    null,
    null,
    null,
    null
  ),
  new OpenGymInst(
    null,
    "East Portland Community Center",
    "740 SE 106th Ave, Portland, OR 97216",
    null,
    "Basketball",
    "Wednesday",
    "2:45 - 5:00 PM",
    "Youth (3-12) $4.50, Teens (13-17) $5, Adults (18-59) $6.25",
    "Open Youth (Ages 8-20)",
    "https://issuu.com/portlandparks/docs/epcc_wi_sp20_issuu?fr=sZGFiZjUwOTgxNw",
    null,
    null,
    null,
    null
  ),
];

export default class Wednesday extends React.Component {
  render() {
    return (
      <div>
        {openGyms.map(function(gym) {
          return <OpenGym gym={gym} />
        })}
      </div>
    );
  }
}