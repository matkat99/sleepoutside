import alerts from "../public/json/alerts.json"
export default class Alert{
      showAlert() {
        var alert1 =  alerts;
        alert(alert1[0])
        var alertPart = document.querySelector(".alert-list");
        alertPart.append(document.createElement("p"));
        alertPart.querySelector("p").innerHTML = alert1[1];
      }
}
