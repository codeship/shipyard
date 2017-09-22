---
title: Mobile-first Methodology
description: Shipyard is a CSS Framework is built from mobile-first approach to front-end development. This means that by default, a class applies to all screen sizes unless otherwise specifed. In order to make something truly responsive, you need to first think about how you want it to look on all screen sizes, and then using the modifiers `(x1-x4)` to define how the style will change as the screen size grows.
---

{% include page-heading.html page=page %}

---

## Responsive Demo

<div class="box-secondary box-padding align-center">
  <button class="btn btn-xs btn-x1-sm btn-x2-md btn-x3-lg btn-x4-xl">
    <span class="display-inline display-x1-none">All Screens (.btn-xs)</span>
    <span class="display-none display-x1-inline display-x2-none">Tablets &amp; Up (.btn-x1-sm)</span>
    <span class="display-none display-x2-inline display-x3-none">Small Laptops &amp; Up (.btn-x2-md)</span>
    <span class="display-none display-x3-inline display-x4-none">Wide Laptos &amp; Up (.btn-x3-lg)</span>
    <span class="display-none display-x4-inline">Large Monitors &amp; Up (.btn-x4-xl)</span>
  </button>
</div>
