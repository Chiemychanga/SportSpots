import { OpenGymInst } from "../OpenGymInst";
import Conestoga from "./images/conestoga.jpg"; 
import EPCC from "./images/epcc.jpg"; 
import WillamettePrimarySchool from "./images/willamettePrimarySchool.png"; 
import SWCommunityCenter from "./images/SWCommunityCenter.jpg"; 
import LakeGroveElementary from "./images/LakeGroveElementary.jpg"; 
import AtheyCreekMiddleSchool from "./images/AtheyCreekMiddleSchool.jpg"; 
import CharlesJordanCC from "./images/CharlesJordanCC.jpg";
import SellwoodCommunityHouse from "./images/SellwoodCommunityHouse.png"; 
import HillsideCommunityCenter from "./images/HillsideCommunityCenter.jpg"; 
import ColumbiaChristianSchool from "./images/ColumbiaChristianSchool.jpg"; 
import TheCourtsInBeaverton from "./images/TheCourtsInBeaverton.jpg"; 
import TualatinHillsAthleticCenter from "./images/TualatinHillsAthleticCenter.jpg"; 
import MtScottCommunityCenter from "./images/MtScottCommunityCenter.jpg"; 

const gyms = [
      //Sunday gyms
      new OpenGymInst(TualatinHillsAthleticCenter, "Tualatin Hills Athletic Center", "50 NW 158th Ave, Beaverton, OR 97006", "https://goo.gl/maps/xS2V7opznhbrRKCG9", "Volleyball", "Sunday and Saturday", "7:00pm to 9:45pm", "$5, $6.25 (out of district)", "Open", "http://www.thprd.org/schedules/schedule.cfm?cs_id=28", "No pre-registration required on Saturdays. 42 players max limit.", "3", "Indoor", "18"),
      new OpenGymInst(Conestoga, "Conestoga Sunday", "9985 SW 125th Avenue, Beaverton, OR 97008", "https://goo.gl/maps/26BrMpZBaw1BJJjC8", "Volleyball", "Sunday", "6:00pm to 7:55pm", "$6.25 (out of district)", "Open", "http://www.thprd.org/facilities/recreation/conestoga/schedule/dropinsports/#dropin", "Drop-in tickets available at 5:15pm. Check-in starts at 5:45pm. Play at 6:00pm. They let in 32 players, then a wait list.", "2", "Indoor", "16"),
      //Monday Gyms
      new OpenGymInst(Conestoga, "Conestoga", "9985 SW 125th Avenue, Beaverton, OR 97008", "https://goo.gl/maps/26BrMpZBaw1BJJjC8", "Volleyball", "Monday and Wednesday", "7:30pm to 9:25pm", "$6.25 (out of district)", "Open", "http://www.thprd.org/facilities/recreation/conestoga/schedule/dropinsports/#dropin", "Wednesday fills quickly, get there early. Not sure about other days. Drop-in tickets available at 6:45pm. Check-in at 7:15pm. Play at 7:30pm. They let in 32 players, then a wait list. So when full, which is often — at least on Wednesday, 8 players per team.", "2", "Indoor", "16"),
      new OpenGymInst(EPCC, "East Portland Community Center", "740 SE 106th Avenue, Portland, OR 97216", "https://goo.gl/maps/zp4jQJNk3XUyA81CA", "Volleyball", "Monday and Thursday", "7:30pm to 9:30pm", "$6.25 (Seniors: $5)", "Open", "http://www.portlandoregon.gov/parks/60370", "Open, advanced play at East Portland Community Center. Plenty of parking and easy access from I-205.", "2", "Indoor", "18"),
      new OpenGymInst(WillamettePrimarySchool, "Willamette Primary School (West Linn Parks)", "1403 12th Street, West Linn, OR 97068", "https://goo.gl/maps/xmauxRXfJZnHiBbT7", "Volleyball", "Monday", "8:00pm to 10:00pm", "$2", "Beginner", "https://westlinnoregon.gov/parksrec/adult-sports-fitness", "", "2", "Indoor", "18"),
      //Tuesday gyms
      new OpenGymInst(SWCommunityCenter, "SW Community Center", "6820 Southwest 45th Avenue, Portland, OR 97219", "https://goo.gl/maps/K59PYeZthQvWCCgC8", "Volleyball", "Tuesday and Thursday", "7:30pm to 9:30pm", "$7.25", "Open", "http://www.portlandoregon.gov/parks/60161", "Great location. All days are now open play, all levels.", "2", "Indoor", "16"),
      new OpenGymInst(LakeGroveElementary, "Lake Grove Elementary", "15777 Boones Ferry Rd, Lake Oswego, OR 97035", "https://goo.gl/maps/456SdGUoLUxKfPjq5", "Volleyball", "Tuesday", "7:30pm to 9:45pm", "$4 residents, $6 non-residents", "Open", "http://www.ci.oswego.or.us/parksrec/adult-drop-sports", "Winter 2020: January 7 through March 31. No play 1/14 and 3/24. Check website for schedules, especially around holidays. Not active during the summer — school’s out. Lake Grove has a low ceiling, backboards interfering, odd lines (large courts), and no separation between courts. With that, still fun play.", "2", "Indoor", "18"),
      new OpenGymInst(AtheyCreekMiddleSchool, "Athey Creek Middle School (West Linn Parks)", "2900 SW Borland Rd, Tualatin, OR 97062", "https://goo.gl/maps/YiKfbTfwZ3DFVGF28", "Volleyball", "Tuesday", "8:00pm to 10:00pm", "$2", "Advanced", "http://westlinnoregon.gov/parksrec/adult-sports-fitness", "They say this is power volleyball at AA and A levels.", "2", "Indoor", "18"),
      //Wednesday gyms
      new OpenGymInst(CharlesJordanCC, "Charles Jordan Community Center (teen)", "9009 N Foss Ave, Portland, OR 97217", "https://goo.gl/maps/QWW1XFA5MnxRyk7L8", "Volleyball", "Wednesday", "5:00pm to 7:00pm", "Free, with a teen pass", "Open", "https://www.portlandoregon.gov/parks/60367", "Free drop-in but your teen needs a teen pass that provides access to Portland community centers. There are also coaches providing instruction and drills. Listed for ages 12-17, but we do have girls who are 10. Youth just need to be eligible for a TeenForce pass which starts at 10 years old.", "2", "Indoor", "12-17"),
      //Thursday gyms
      new OpenGymInst(SellwoodCommunityHouse, "Sellwood Community House", "1436 SE Spokane Street, Portland, OR 97202", "https://goo.gl/maps/3sFmTALR49gWdtcj9", "Volleyball", "Thursday", "11:30am to 2:00pm", "$3.50", "Open", "https://fsch.recdesk.com/Community/Program", "Formerly, Sellwood Community Center. Check website for schedule.", "1", "Indoor", "16"),
      new OpenGymInst(HillsideCommunityCenter, "Hillside Community Center", "653 Northwest Culpepper Terrace, Portland, OR 97204", "https://goo.gl/maps/97BZFt9txMVCzYHH6", "Volleyball", "Thursday", "7:00pm to 8:30pm", "$4", "Advanced", "http://www.portlandoregon.gov/parks/60396", "", "1", "Indoor", "18"),
      //Friday gyms
      new OpenGymInst(ColumbiaChristianSchool, "Columbia Christian School", "9100 East Burnside St, Portland OR 97216", "https://goo.gl/maps/5NsQ6UcQfsetpZdt8", "Volleyball", "Friday", "7:05pm to 10:00pm", "$10", "Open", "https://www.meetup.com/meetup-group-kLcTIHwA/", "Drop-in is back at what used to be called Cascade College, but is now Columbia Christian School. Still offered by portlandbasketball.com. Things are starting with Fridays but more days are coming — and they’re looking for your input!", "2", "Indoor", "18"),
      new OpenGymInst(TheCourtsInBeaverton, "The Courts in Beaverton", "14523 SW Millikan Way #110 Beaverton, Oregon 97005", "https://goo.gl/maps/HSHrQtSbvNMBiG29A", "Volleyball", "Friday", "7:00pm to 9:30pm", "$4", "Advanced", "http://www.thecourtsinbeaverton.com/DropinPlayxpf.html", "This is the place to play volleyball on Friday evenings! The Courts are typically packed full and you can expect a high level of play. Bring your own volleyball.", "6", "Indoor", "None"),
      new OpenGymInst(TualatinHillsAthleticCenter, "Friday Night Teen Volleyball at Tualatin Hills Athletic Center", "50 NW 158th Ave, Beaverton, OR 97006", "https://goo.gl/maps/xS2V7opznhbrRKCG9", "Volleyball", "Friday", "7:30pm to 9:45pm", "$6.25", "Open", "http://www.thprd.org/schedules/schedule.cfm?cs_id=28", "Teen night! You must be 13 to 18 years old and still in high school.", "3", "Indoor", "13-18"),
      //Saturday gyms
      new OpenGymInst(MtScottCommunityCenter, "Mt. Scott Community Center", "5530 SE 72nd Ave, Portland, OR 97206", "https://goo.gl/maps/45ZLWS7ZdRrA17Er8", "Volleyball", "Saturday", "12:00pm to 2:00pm", "$6 (Seniors: $4.75, Teens: $4.75)", "Open", "http://www.portlandoregon.gov/parks/60409", "Saturday starts at 12:15pm and runs to 1:45pm.", "2", "Indoor", "13"),
];

export default gyms;