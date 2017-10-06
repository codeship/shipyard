//= require ./shipyard/core
//= require ./shipyard/scroll
//= require ./shipyard/hamburger
//= require ./shipyard/alerts

var shipyard = new Shipyard('html')
var windowScroll = new Scroll(window)
var hamburger = new Hamburger('[shipyard=hamburger]')
var shipyardAlerts = new Alerts('[shipyard=alert]')
