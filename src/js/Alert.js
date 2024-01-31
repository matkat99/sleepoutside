import alertsData from "../public/json/alert.json";

class Alert {
  constructor(message, background = "lightblue", color = "black") {
    this.message = message;
    this.background = background;
    this.color = color;
  }

  showMessage() {
    console.log(`%c${this.message}`, `background: ${this.background}; color: ${this.color}`);
  }

  static createFromJson(jsonAlert) {
    return new Alert(jsonAlert.message, jsonAlert.background, jsonAlert.color);
  }

  static displayAlerts() {
    const alertListSection = document.createElement("section");
    alertListSection.className = "alert-list";

    alertsData.forEach(jsonAlert => {
      const alert = Alert.createFromJson(jsonAlert);
      const alertContainer = document.createElement("div");
      alertContainer.className = "alert-container";

      const alertParagraph = document.createElement("p");
      alertParagraph.textContent = alert.message;
      alertParagraph.style.background = alert.background;
      alertParagraph.style.color = alert.color;

      const closeButton = document.createElement("button");
      closeButton.textContent = "Dismiss";
      closeButton.className = "close-button";
      closeButton.addEventListener("click", () => {
        alertContainer.remove();
      });

      alertContainer.appendChild(alertParagraph);
      alertContainer.appendChild(closeButton);

      alertListSection.appendChild(alertContainer);
    });

    // Insert alertListSection before the main element
    const mainElement = document.querySelector("main");
    document.body.insertBefore(alertListSection, mainElement);
  }
}

export default Alert;
