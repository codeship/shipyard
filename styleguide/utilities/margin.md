---
title: Margin Utilities
description: Shipyard's margin utilities are useful for overriding the default margin in any component, and can be extremely useful in a wide array of situations.
sass_file: shipyard/utilities/_margin
box_classes: utilities-margin-padding-box box-secondary btn-sm medium text-light
options: [0,5,10,15,20,30,40]
directions:
  -
    name: left
    css: l
  -
    name: right
    css: r
---

{% include page-heading.html page=page %}

---

### Margin All Sides `.{ screen }-m-{ 0..40 }`
The examples below demonstrate how much margin will be added to the top and bottom of any element the classes is applied to.
{: .section-description }

<div class="col-container">
  <div class="col">
    <div class="align-center">
      {% for option in page.options %}
        <div class="{{ page.box_classes }} m-{{ option }}">.m-{{ option }}</div>
      {% endfor %}
      <div class="{{ page.box_classes }} col-55 sm:col-75 md:col-85 m-auto">.m-auto</div>
    </div>
  </div>
</div>

---

### Margin Top & Bottom `.{ screen }-m{ t, b }-{ 0..40 }`
The examples below demonstrate how much margin will be added to the top and bottom of any element the classes is applied to.
{: .section-description }

<div class="col-container">
  {% for option in page.options %}
    <div class="col align-center">
      <div class="{{ page.box_classes }} mb-{{ option }}">.mb-{{ option }}</div>
      <div class="{{ page.box_classes }} mt-{{ option }}">.mt-{{ option }}</div>
    </div>
  {% endfor %}
</div>

---

### Margin Left & Right `.{ screen }-m{ l, r }-{ 0..40 }`
The examples below demonstrate how much margin will be added to the left and right sides of any element the classes is applied to.
{: .section-description }

<div class="col-container">
  {% for direction in page.directions %}
    <div class="col">
      <div class="align-{{ direction.name }}">
        {% for option in page.options %}
          <div class="{{ page.box_classes }} m{{ direction.css }}-{{ option }} mb-20">.m{{ direction.css }}-{{ option }}</div>
        {% endfor %}
      </div>
    </div>
  {% endfor %}
</div>

---

### Component CSS
```css
{% sass_output -%}
```

---

{% include css-stats.html %}
