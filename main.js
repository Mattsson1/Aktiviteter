//const HeaderRequest = {
//  "authority": "visitlinkoping.se",
//  "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
//  "accept-encoding": "gzip, deflate, br",
//  "accept-language": "sv-SE,sv;q=0.9,en-US;q=0.8,en;q=0.7",
//  "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
//}



import { Events } from "./events.js";
var x = 0;
const AllEvents = Events();

function sleepFunction() {
  x++;
  document.getElementById("AktiviteterDiv").innerHTML = AllEvents[x].body[0].summary + "<br><br>";
  document.getElementById("tidDiv").innerHTML = AllEvents[x].field_date_and_time[0].value.replace("T", " Klockan ") + "<br><br>";
  if (x === AllEvents.length - 1) {
    x = 0;
  }
}

sleepFunction();
setInterval(sleepFunction, 6000);


