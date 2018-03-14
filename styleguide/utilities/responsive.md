---
title: Mobile-first Methodology
description: Shipyard is a CSS Framework is built from mobile-first approach to front-end development. This means that by default, a class applies to all screen sizes unless otherwise specifed. In order to make something truly responsive, you need to first think about how you want it to look on all screen sizes, and then using the modifiers `(x1xl:)` to define how the style will change as the screen size grows.
---

{% include page-heading.html page=page %}

---

## Responsive Demo

<div class="box-secondary box-padding align-center">
  <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
    <span class="display-inline sm:display-none">All Screens (.btn-xs)</span>
    <span class="display-none sm:display-inline md:display-none">Tablets &amp; Up (.sm:btn-sm)</span>
    <span class="display-none md:display-inline lg:display-none">Small Laptops &amp; Up (.md:btn-md)</span>
    <span class="display-none lg:display-inline xl:display-none">Wide Laptos &amp; Up (.lg:btn-lg)</span>
    <span class="display-none xl:display-inline">Large Monitors &amp; Up (.xl:btn-xl)</span>
  </button>
</div>
