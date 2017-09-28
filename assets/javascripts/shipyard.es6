//= require ./shipyard/core
//= require ./shipyard/scroll
//= require ./shipyard/hamburger
//= require ./shipyard/alert

var shipyard = new Shipyard('html')
var windowScroll = new Scroll(window)
var hamburger = new Hamburger('[shipyard="hamburger"]')
var shipyardAlerts = new Alert('[shipyard="alert"]')
