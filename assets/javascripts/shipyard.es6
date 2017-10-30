//= require ./shipyard/core
//= require ./shipyard/scroll
//= require ./shipyard/hamburger
//= require ./shipyard/alerts
//= require ./shipyard/modal
//= require ./shipyard/modal-triggers

var shipyard = new Shipyard('html')
var windowScroll = new Scroll(window)
var hamburger = new Hamburger('[shipyard=hamburger]')
var shipyardAlerts = new Alerts('[shipyard=alert]')
var modalTriggers = new ModalTriggers('[modal-trigger]')
