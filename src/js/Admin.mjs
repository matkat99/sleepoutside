import ExternalServices from "./ExternalServices.mjs";
import { alertMessage } from "./utils.mjs";

export default class Admin {
  constructor(outputSelector) {
    this.mainElement = document.querySelector(outputSelector);
    this.token = null;
    this.services = new ExternalServices();
  }
  async login(creds, next) {
    // I built the login method with a callback: next. This makes it much more flexible...
    // there could be many different things the user wants to do after logging in...
    // this allows us that flexibility without having to write a bunch of login methods
    try {
      this.token = await this.services.loginRequest(creds);
      next();
    } catch (err) {
      alertMessage(err.message.message);
    }
  }
  showLogin() {
    // add the html for the login form
    this.mainElement.innerHTML = loginFormTemplate();
    // now that it is in the DOM we can add a listener for the login button
    document.querySelector("#loginButton").addEventListener("click", (e) => {
      const email = document.querySelector("#email").value;
      const password = document.querySelector("#password").value;
      this.login({ email, password }, this.showOrders.bind(this));
    });
  }
  async showOrders() {
    try {
      const orders = await this.services.getOrders(this.token);
      this.mainElement.innerHTML = orderTemplate();
      const parent = document.querySelector("#orders tbody");
      // why not a template like we have done before?  The markup here was simple enough that I didn't think it worth the overhead...but a template would certainly work!
      parent.innerHTML = orders
        .map(
          (order) =>
            `<tr><td>${order.id}</td><td>${new Date(
              order.orderDate
            ).toLocaleDateString("en-US")}</td><td>${
              order.items.length
            }</td><td>${order.orderTotal}</td></tr>`
        )
        .join("");
    } catch (err) {
      console.log(err);
    }
  }
}
// why do this as functions returning html instead of a template? Both of these are single use. Templates as we have used them make more sense for re-use.
// using a template would be another valid solution for this however...
function loginFormTemplate() {
  return `<fieldset class="login-form">
  <legend>Login</legend>
  <p>
    <label for="email">Email</label>
    <input type="text" placeholder="email" id="email" value="user1@email.com"/>
  </p>
  <p>
    <label for="password">Password</label>
    <input type="password" placeholder="password" id="password" />
  </p>
  <button type="submit" id="loginButton">Login</button>
</fieldset>`;
}
// test
function orderTemplate() {
  return `<h2>Current Orders</h2>
  <table id="orders">
  <thead>
  <tr><th>Id</th><th>Date</th><th>#Items</th><th>Total</th>
  </thead>
  <tbody class="order-body"></tbody>
  </table>
  `;
}
