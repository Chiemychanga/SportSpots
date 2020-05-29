import { OpenGymInst } from "../OpenGymInst";
import RoseCityFutsalEast from "./images/RoseCityFutsalEast.jpg"; 
import PortlandIndoorSoccer from "./images/PortlandIndoorSoccer.jpg"; 



const gyms = [
      new OpenGymInst(PortlandIndoorSoccer, "Portland Indoor Soccer", "5010 NE Oregon St, Portland, OR 97213", "https://goo.gl/maps/D8NH246JDCarssdt7", "Soccer", "Tuesday and Thursday", "12:00pm to 2:00pm", "$8", "Open", "https://pdxindoorsoccer.com/", "We have open play every Tuesday and Friday from noon to 2:00 pm. The walk up price is $8. Or you can purchase a 10-play card for $70.", "1", "Indoor", "N/A", "45.5131242", "-122.6637738"),
      new OpenGymInst(RoseCityFutsalEast, "Rose City Futsal EAST", "418 SE Main St, Portland, OR 97214", "https://g.page/rose-city-futsal-east?share", "Soccer", "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday", "N/A", "N/A", "Open", "https://rosecityfutsal.com", "Rose City Futsal hosts tournaments and many unique community events year round.  We also rent our space for local business team building events, parties and large fundraisers. Think of RCF for your next court rental, birthday party, or large event venue!", "1", "Indoor", "N/A", "45.5289443", "-122.6140195"),
];

export default gyms;