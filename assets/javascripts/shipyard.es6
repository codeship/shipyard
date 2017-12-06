//= require ./shipyard/core
//= require ./shipyard/scroll
//= require ./shipyard/hamburger
//= require ./shipyard/alert
//= require ./shipyard/accordion
//= require ./shipyard/modal
//= require ./shipyard/modal-trigger

var shipyard = new Shipyard('html')
var windowScroll = new Scroll(window)
var hamburger = new Hamburger('[shipyard=hamburger]')
var shipyardAlert = new Alert('[shipyard=alert]')
var modalTrigger = new ModalTrigger('[modal-trigger]')
var accordion = new Accordion('[accordion]')
