---
title: Padding Utilities
description: Shipyard's padding utilities are useful for overriding the default padding in any component, and can be extremely useful in a wide array of situations.
sass_file: shipyard/utilities/_padding
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

### Padding All Sides `.{ screen }-p-{ 0..40 }`
The examples below demonstrate how much padding will be added to the top and bottom of any element the classes is applied to.
{: .section-description }

<div class="col-container">
  {% for option in page.options %}
    <div class="col align-center">
      <div class="box-secondary medium text-light text-sm p-{{ option }} mb-10">.p-{{ option }}</div>
    </div>
  {% endfor %}
</div>

---

### Padding Top & Bottom `.{ screen }-p{ t, b }-{ 0..40 }`
The examples below demonstrate how much padding will be added to the top and bottom of any element the classes is applied to.
{: .section-description }

<div class="col-container">
  {% for option in page.options %}
    <div class="col align-center">
      <div class="box-secondary medium text-light text-sm pb-{{ option }} mb-10">.pb-{{ option }}</div>
      <div class="box-secondary medium text-light text-sm pt-{{ option }}">.pt-{{ option }}</div>
    </div>
  {% endfor %}
</div>

---

### Padding Left & Right `.{ screen }-p{ l, r }-{ 0..40 }`
The examples below demonstrate how much padding will be added to the left and right sides of any element the classes is applied to
{: .section-description }

<div class="col-container">
  {% for direction in page.directions %}
    <div class="col">
      <div class="align-{{ direction.name }}">
        {% for option in page.options %}
          <div class="{{ page.box_classes }} p{{ direction.css }}-{{ option }} mb-20">.p{{ direction.css }}-{{ option }}</div>
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
