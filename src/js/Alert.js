const fg = require("fs")
class Alert {
  constructor(){
    this.alerts = JSON.parse(fg.readFileSync("alerts.json","utf8"));
    this.alertList = document.createElement("section");
    this.alertList.classList.add("alert-list");
    document.body.appendChild(this.alertList);
    this.alerts.forEach(alert => {
      let p = document.createElement("p");
      p.style.backgroundColor = alert.bgColor;
      p.style.color = alert.fgColor;
      p.innerText = alert.message;
      this.alertList.appendChild(p);
    });
  }
}

export default Alert;
