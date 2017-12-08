//= require ./shipyard/core
//= require ./shipyard/scroll
//= require ./shipyard/hamburger
//= require ./shipyard/alert
//= require ./shipyard/alert-timer
//= require ./shipyard/accordion
//= require ./shipyard/accordion-trigger
//= require ./shipyard/modal
//= require ./shipyard/modal-trigger

var shipyard = new Shipyard(document.documentElement)
shipyard.windowScroll = new Scroll(window)
shipyard.hamburger = new Shipyard('[shipyard=hamburger]', Hamburger)
shipyard.alerts = new Shipyard('[shipyard=alert]', Alert)
shipyard.modalTriggers = new Shipyard('[modal-trigger]', ModalTrigger)
shipyard.accordionTriggers = new Shipyard('[accordion]', AccordionTrigger)
