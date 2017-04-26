class Alert extends Shipyard {
  constructor () {
    super()
    if (document.querySelector('[data-shipyard="alert"]')) {
      shipyard.alerts = new Vue({
        el: '[data-shipyard="alert"]',
        data: {
          visible: true
        },
        methods: {
          close () {
            this.visible = false;
          }
        }
      });
    }
  }
}
