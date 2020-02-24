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
    "Saturday",
    "3:30 - 5:30 PM",
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
    "Mt. Scott Community Center",
    "5530 Southeast 72nd Avenue",
    null,
    "Basketball",
    "Saturday",
    "4:45 - 6:45 PM",
    "$0 - $6.25",
    "Ages 30+ (ID Required)",
    "https://www.portlandoregon.gov/parks/article/634572",
    null,
    null,
    null,
    null
  )
];

export default class Saturday extends React.Component {
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
