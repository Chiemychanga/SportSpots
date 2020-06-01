import { OpenGymInst } from "../OpenGymInst";
import MtScottCommunityCenter from "./images/MtScottCommunityCenter.jpg"; 
import WilsonOutdoorPool from "./images/WilsonOutdoorPool.jpg"; 

const gyms = [
      new OpenGymInst(MtScottCommunityCenter, "Mt. Scott Community Center", "5530 SE 72nd Ave, Portland, OR 97206", "https://goo.gl/maps/45ZLWS7ZdRrA17Er8", "Swimming", "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday", "12:00pm to 2:00pm", "$6 (Seniors: $4.75, Teens: $4.75)", "Open", "http://www.portlandoregon.gov/parks/60409", "Saturday starts at 12:15pm and runs to 1:45pm.", "2", "Indoor", "13", "45.4824077", "-122.5906866"),
      new OpenGymInst(WilsonOutdoorPool, "Wilson Outdoor Pool", "1151 S Vermont St, Portland, OR 97219", "https://goo.gl/maps/Ddo9xzcVSk3W5DHy9", "Swimming", "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday", "12:00pm to 2:00pm", "$6 (Seniors: $4.75, Teens: $4.75)", "Open", "https://www.portlandoregon.gov/parks/61027", "Saturday starts at 12:15pm and runs to 1:45pm.", "2", "Indoor", "13", "45.4775373", "-122.6928661")
];


export default gyms;