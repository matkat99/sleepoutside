const fg = require("fs")
class Alert {
  constructor(){
    this.alerts = fg.readFileSync("alerts.json","utf8");
  }
}

export default Alert;
