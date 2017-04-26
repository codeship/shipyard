class Alert extends Shipyard {
  constructor () {
    super()
    var alerts = document.querySelectorAll('[data-shipyard="alert"]');
    for (var alert of alerts) {
      new Vue({
        el: alert,
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
