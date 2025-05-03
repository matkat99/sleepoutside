import {convertToJson} from './utils.mjs';

function alertTemplate(alert) {
    return `
    <p class="foreground-${alert.color} background-${alert.background}">${alert.message}</p>
    `;
}

//Alert class
export default class Alert {
    constructor(message) {
        this.message = message;
        this.path = `../json/alerts.json`;
        this.renderAlerts();
    }
    async getData() { // Mark as async
        return fetch(this.path)
          .then(convertToJson)
          .then((data) => data);
    }
    async getAlertsHtml() { // Mark as async
        let alerts = await this.getData();
        let alertsHTML = '';
        if(alerts){
            
            alerts.forEach((alert) => {
                alertsHTML += alertTemplate(alert);
            });
        }
        return alertsHTML;
    }
    async renderAlerts(){ // Mark as async
        const element = document.querySelector('.alert-list');
        const alertsHtml = await this.getAlertsHtml();
        element.insertAdjacentHTML(
        'afterBegin',
        alertsHtml
        );
    }
}
