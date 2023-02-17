import alerts from "../public/json/alerts.json";

export default class Alert {
  showAlert() {
    const alertList = document.createElement("section");
    alertList.classList.add("alert-list");

    alerts.forEach(alert => {
      const alertMessage = alert.message;
      const alertBackground = alert.background;
      const alertColor = alert.color;

      const alertElement = document.createElement("p");
      alertElement.innerHTML = alertMessage;
      alertElement.style.backgroundColor = alertBackground;
      alertElement.style.color = alertColor;

      alertList.appendChild(alertElement);
    });

    const mainElement = document.querySelector("main");
    mainElement.insertBefore(alertList, mainElement.firstChild);
  }
}
