---
title: Z-Index
description: Utilities for controlling the stack order of an element.
sass_file: shipyard/utilities/_z-index
options: [0,10,20,30,40,50]
---

{% include page-heading.html page=page %}

---

## Usage `.z-{ index }`
Control the stack order (or three-dimensional positioning) of an element, regardless of it's order in the HTML.
{: .section-description }

<ul class="utilities-z-index-list relative mb-30">
  <li class="utilities-z-index-item absolute bg-white z-50 align-center text-normal col-center">z-50</li>
  <li class="utilities-z-index-item absolute bg-gray-lighter z-40 align-center text-normal col-center">z-40</li>
  <li class="utilities-z-index-item absolute bg-gray-light z-30 align-center text-normal col-center">z-30</li>
  <li class="utilities-z-index-item absolute bg-gray z-20 align-center text-normal col-center">z-20</li>
  <li class="utilities-z-index-item absolute bg-gray-dark z-10 align-center text-normal col-center">z-10</li>
  <li class="utilities-z-index-item absolute bg-gray-darker z-auto align-center text-normal col-center">z-auto</li>
</ul>

```html
<div class="absolute z-50">z-50</div>
<div class="absolute z-40">z-40</div>
<div class="absolute z-30">z-30</div>
<div class="absolute z-20">z-20</div>
<div class="absolute z-10">z-10</div>
<div class="absolute z-auto">z-auto</div>
```

---

## Default Classes
The following classes can be overridden by changing the default values of `$z-indexes` variable.
{: .section-description }

```css
{% sass_output -%}
```

---

{% include css-stats.html %}
