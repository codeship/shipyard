---
title: Shipyard Buttons
---

{% include page-heading.html page=page %}

---

## Button Types
<div class="box-padding align-center">
  {% btn Default %}
  {% btn Primary, :primary %}
  {% btn Primary Dark, :primary_dark %}
  {% btn Secondary, :secondary %}
  {% btn Secondary Dark, :secondary_dark %}
  {% btn Disabled, :disabled %}
  {% btn CTA, :cta %}
  {% btn Caution, :caution %}
  {% btn Link, :link %}
</div>
<div class="box-secondary box-padding align-center bg-gray-dark">
  {% btn Inverse, :inverse %}
  {% btn Inverse, :inverse_secondary, class: 'margin-left-xs' %}
</div>

---

<div class="box-padding align-center">
  {% btn Button %}
  <a href="#" class="btn">Link</a>
  <input type="button" class="btn" value="Input" />
</div>

---

## Button Sizes (default: md)
<div class="box-padding align-center">
  {% btn XX-Small, :xxs %}
  {% btn X-Small, :xs %}
  {% btn Small, :sm %}
  {% btn Medium, :md %}
  {% btn Large, :lg %}
  {% btn X-Large, :xl %}
</div>

## XX-Small, Responsive Buttons
<div class="box-padding align-center">
  {% btn All Screens, :xxs %}
  {% btn Tablets, :x1_xxs %}
  {% btn Laptops, :x2_xxs %}
  {% btn Wide Screens, :x3_xxs %}
  {% btn Giant Screens, :x4_xxs %}
</div>

## X-Small, Responsive Buttons
<div class="box-padding align-center">
  {% btn All Screens, :xs %}
  {% btn Tablets, :x1_xs %}
  {% btn Laptops, :x2_xs %}
  {% btn Wide Screens, :x3_xs %}
  {% btn Giant Screens, :x4_xs %}
</div>

## Small, Responsive Buttons
<div class="box-padding align-center">
  {% btn All Screens, :sm %}
  {% btn Tablets, :x1_sm %}
  {% btn Laptops, :x2_sm %}
  {% btn Wide Screens, :x3_sm %}
  {% btn Giant Screens, :x4_sm %}
</div>

## Medium, Responsive Buttons (Default Size)
<div class="box-padding align-center">
  {% btn All Screens %}
  {% btn Tablets, :sm :x1_md %}
  {% btn Laptops, :sm :x2_md %}
  {% btn Wide Screens, :sm :x3_md %}
  {% btn Giant Screens, :sm :x4_md %}
</div>
