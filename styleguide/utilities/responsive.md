---
title: Mobile-first Methodology
description: Shipyard is a CSS Framework is built from mobile-first approach to front-end development. This means that by default, a class applies to all screen sizes unless otherwise specifed. In order to make something truly responsive, you need to first think about how you want it to look on all screen sizes, and then using the modifiers `(x1xl:)` to define how the style will change as the screen size grows.
---

{% include page-heading.html page=page %}

---

## Responsive Demo

<div class="box-secondary p-10 sm:p-15 md:p-20 lg:p-30 align-center">
  <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
    <span class="inline sm:hidden">All Screens (.btn-xs)</span>
    <span class="hidden sm:inline md:hidden">Tablets &amp; Up (.sm:btn-sm)</span>
    <span class="hidden md:inline lg:hidden">Small Laptops &amp; Up (.md:btn-md)</span>
    <span class="hidden lg:inline xl:hidden">Wide Laptos &amp; Up (.lg:btn-lg)</span>
    <span class="hidden xl:inline">Large Monitors &amp; Up (.xl:btn-xl)</span>
  </button>
</div>
