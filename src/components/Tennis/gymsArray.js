import { OpenGymInst } from "../OpenGymInst";
import PortlandTennisCenter from "./images/PortlandTennisCenter.jpg";
import StJohnsRacquetCenter from "./images/StJohnsRacquetCenter.jpg"; 
import LakeOswegoTennisCenter from "./images/LakeOswegoTennisCenter.jpeg";

const gyms = [
      //mon - fri
      new OpenGymInst 
            (PortlandTennisCenter, 
             "Portland Tennis Center", 
             "324 NE 12th Avenue, Portland, Oregon 97232", 
             "https://goo.gl/maps/pD42T9Nez3XxQejD7", 
             "Tennis", 
             "Monday Tuesday Wednesday Thursday Friday", 
             "5:30am to 11:00pm", 
             "$16.00 per Court for 75 minutes", 
             "Singles/Doubles", 
             "http://www.thprd.org/facilities/recreation/conestoga/schedule/dropinsports/#dropin", 
             "Reservations open 3 days in advance at 8:30am.", 
             "8", 
             "Indoor", 
             "None", 
             "45.525501",
             "-122.652735"),
      //sat & sun
      new OpenGymInst 
            (PortlandTennisCenter, 
             "Portland Tennis Center", 
             "324 NE 12th Avenue, Portland, Oregon 97232", 
             "https://goo.gl/maps/pD42T9Nez3XxQejD7", 
             "Tennis", 
             "Saturday Sunday", 
             "6:30am to 10:00pm", 
             "$16.00 per Court for 75 minutes", 
             "Singles/Doubles", 
             "http://www.thprd.org/facilities/recreation/conestoga/schedule/dropinsports/#dropin", 
             "Reservations open 3 days in advance at 8:30am.", 
             "8", 
             "Indoor", 
             "None", 
             "45.525501",
             "-122.652735"),
      //mon - thurs
      new OpenGymInst 
            (StJohnsRacquetCenter, 
             "St. Johns Racquet Center", 
             "7519 N Burlington Ave, Portland, OR 97203", 
             "https://goo.gl/maps/d7WVkBReSGAJVeb4A", 
             "Tennis", 
             "Monday Tuesday Wednesday Thursday", 
             "8:00am to 2:00pm and 6:00pm to 10:00pm", 
             "$30.00 per Court 75 minutes", 
             "Singles/Doubles", 
             "https://www.stjohnsracquetcenter.org/", 
             "Courts can be booked up to 7 days in advance.", 
             "8", 
             "Indoor", 
             "None", 
             "45.591440",
             "-122.754664"),
      //fri - sun
      new OpenGymInst 
            (StJohnsRacquetCenter, 
             "St. Johns Racquet Center", 
             "7519 N Burlington Ave, Portland, OR 97203", 
             "https://goo.gl/maps/d7WVkBReSGAJVeb4A", 
             "Tennis", 
             "Friday Saturday Sunday", 
             "8:00am to 10:00pm", 
             "$30.00 per Court 75 minutes", 
             "Singles/Doubles", 
             "https://www.stjohnsracquetcenter.org/", 
             "Courts can be booked up to 7 days in advance.", 
             "8", 
             "Indoor", 
             "None", 
             "45.591440",
             "-122.754664"),
      //all days
      new OpenGymInst 
            (LakeOswegoTennisCenter, 
             "Lake Oswego Tennis Center", 
             "2900 SW Diane Dr, Lake Oswego, OR 97035", 
             "https://goo.gl/maps/3QUUnJDZjpMpqtF17", 
             "Tennis", 
             "Monday Tuesday Wednesday Thursday Friday Saturday Sunday", 
             "6:00am to 10:00pm", 
             "$22.00 per Court 60 minutes", 
             "Singles/Doubles", 
             "https://www.ci.oswego.or.us/parksrec/indoor-tennis-center", 
             "Courts can be booked up to 7 days in advance.", 
             "8", 
             "Indoor", 
             "None", 
             "45.421863", 
             "-122.706789"),
];

export default gyms;