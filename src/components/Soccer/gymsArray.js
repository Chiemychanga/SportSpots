import { OpenGymInst } from "../OpenGymInst";
import RoseCityFutsalEast from "./images/RoseCityFutsalEast.jpg"; 
import PortlandIndoorSoccer from "./images/PortlandIndoorSoccer.jpg"; 
import PDXSportsCenter from "./images/PDXSportsCenter.jpg"; 
import RPSportsInc from "./images/RPSportsInc.jpg"; 

const gyms = [
      new OpenGymInst(PortlandIndoorSoccer, "Portland Indoor Soccer", "5010 NE Oregon St, Portland, OR 97213", "https://goo.gl/maps/D8NH246JDCarssdt7", "Soccer", "Tuesday and Thursday", "12:00pm to 2:00pm", "$8", "Open", "https://pdxindoorsoccer.com/", "We have open play every Tuesday and Friday from noon to 2:00 pm. The walk up price is $8. Or you can purchase a 10-play card for $70.", "1", "Indoor", "N/A", "45.5131242", "-122.6637738"),
      new OpenGymInst(RoseCityFutsalEast, "Rose City Futsal EAST", "418 SE Main St, Portland, OR 97214", "https://g.page/rose-city-futsal-east?share", "Soccer", "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday", "N/A", "N/A", "Open", "https://rosecityfutsal.com", "Rose City Futsal hosts tournaments and many unique community events year round.  We also rent our space for local business team building events, parties and large fundraisers. Think of RCF for your next court rental, birthday party, or large event venue!", "1", "Indoor", "N/A", "45.5289443", "-122.6140195"),
      new OpenGymInst(PDXSportsCenter, "PDX SportsCenter", "8785 SW Beaverton Hillsdale Hwy, Portland, OR 97225", "https://goo.gl/maps/VR7FrsGyM7bQEnmF8e", "Soccer", "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday", "N/A", "N/A", "Open", "https://theplexpdx.com", "EFFECTIVE 3/14/20 — THE PLEX PDX WILL BE CLOSED UNTIL FURTHER NOTICE DUE TO COVID-19 PRECAUTIONS. WE WILL REOPEN AND RESUME REGULAR PROGRAMMING AS SOON AS LOCAL AUTHORITIES ALLOW IT.", "1", "Indoor", "N/A", "45.4869231", "-122.7696218"),
      new OpenGymInst(RPSportsInc, "RP Sports INC (la canchita soccer)", "13116 NE Sandy Blvd, Portland, OR 97230", "https://goo.gl/maps/EZNJKdN7Qae6hmss6", "Soccer", "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday", "N/A", "N/A", "Private", "https://lacanchitasoccer.com", "EFFECTIVE 3/14/20 — THIS PLACE WILL BE CLOSED UNTIL FURTHER NOTICE DUE TO COVID-19 PRECAUTIONS. WE WILL REOPEN AND RESUME REGULAR PROGRAMMING AS SOON AS LOCAL AUTHORITIES ALLOW IT.", "1", "Indoor", "N/A", "45.5548301", "-122.5302969")
];


export default gyms;