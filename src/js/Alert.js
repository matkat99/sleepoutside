export default class Alert {
  constructor(jsonPath) {
    this.path = jsonPath;
  }

  async getData() {
    try {
      const response = await fetch(this.path);
      if (!response.ok) throw new Error("Bad Response");

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Alert request error: ", error);
      return false;
    }
  }

  async show(elementOrSelector) {
    const alerts = await this.getData();
    if (!alerts || alerts.length === 0) return;

    const section = document.createElement("section");
    section.classList.add("alert-list");
    section.innerHTML = alerts
      .map(
        (alert) => `
        <p class="alert" style="background: ${alert.background}; color: ${alert.color}">${alert.message}</p>
      `,
      )
      .join("");

    let alertParent;
    if (typeof elementOrSelector === "string") {
      alertParent = document.querySelector(elementOrSelector);
    } else if (elementOrSelector instanceof Element) {
      alertParent = elementOrSelector;
    }

    const htmlEl = document.querySelector("html");
    const modalActiveClass = "modal-active";
    htmlEl.classList.add(modalActiveClass);
    alertParent.appendChild(section);

    const top = (
      window.innerHeight / 2 -
      section.offsetHeight / 2 +
      window.scrollY
    ).toFixed();
    const left = (window.innerWidth / 2 - section.offsetWidth / 2).toFixed();
    section.style = `left: ${left}px; top: ${top}px; opacity: 1;`;

    htmlEl.addEventListener("click", function listenerFunc(e) {
      if (e.target === alertParent || alertParent.contains(e.target)) {
        return;
      }

      htmlEl.classList.remove(modalActiveClass);
      htmlEl.removeEventListener("click", listenerFunc);
    });
  }
}
