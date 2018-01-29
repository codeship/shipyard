---
title: Margin & Padding Utilities
description: Shipyard's margin & padding utilities are useful for overriding the default margin and padding in any component, and can be extremely useful in a wide array of situations.
sass_file: shipyard/utilities/_margin-padding
box_classes: utilities-margin-padding-box box-secondary btn-sm medium text-light
options: [none,xxs,xs,sm,md,lg,xl,xxl]
directions: [left,right]
---

{% include page-heading.html page=page %}

---

### Margin All Sides `.margin-{ x1..x4 }-{ xxs..xxl }`
The examples below demonstrate how much margin will be added to the top and bottom of any element the classes is applied to.
{: .section-description }

<div class="col-container">
  <div class="col">
    <div class="align-center">
      {% for option in page.options %}
        <div class="{{ page.box_classes }} margin-{{ option }}">.margin-{{ option }}</div>
      {% endfor %}
      <div class="{{ page.box_classes }} col-55 col-x1-75 col-x2-85 margin-auto">.margin-auto</div>
    </div>
  </div>
</div>

---

### Margin Top & Bottom `.margin-{ top, bottom }-{ x1..x4 }-{ xxs..xxl }`
The examples below demonstrate how much margin will be added to the top and bottom of any element the classes is applied to.
{: .section-description }

<div class="col-container">
  {% for option in page.options %}
    <div class="col align-center">
      <div class="{{ page.box_classes }} margin-bottom-{{ option }}">{{ option }}</div>
      <div class="{{ page.box_classes }} margin-top-{{ option }}">{{ option }}</div>
    </div>
  {% endfor %}
</div>

---

### Margin Left & Right `.margin-{ left, right }-{ x1..x4 }-{ xxs..xxl }`
The examples below demonstrate how much margin will be added to the left and right sides of any element the classes is applied to.
{: .section-description }

<div class="col-container">
  {% for direction in page.directions %}
    <div class="col">
      <div class="align-{{ direction }}">
        {% for option in page.options %}
          <div class="{{ page.box_classes }} margin-{{ direction }}-{{ option }} margin-bottom-md">.margin-{{ direction }}-{{ option }}</div>
        {% endfor %}
      </div>
    </div>
  {% endfor %}
</div>

---

### Padding All Sides `.padding-{ x1..x4 }-{ xxs..xxl }`
The examples below demonstrate how much padding will be added to the top and bottom of any element the classes is applied to.
{: .section-description }

<div class="col-container">
  {% for option in page.options %}
    <div class="col align-center">
      <div class="box-secondary medium text-light text-sm padding-{{ option }} margin-bottom-xs">{{ option }}</div>
    </div>
  {% endfor %}
</div>

---

### Padding Top & Bottom `.padding-{ top, bottom }-{ x1..x4 }-{ xxs..xxl }`
The examples below demonstrate how much padding will be added to the top and bottom of any element the classes is applied to.
{: .section-description }

<div class="col-container">
  {% for option in page.options %}
    <div class="col align-center">
      <div class="box-secondary medium text-light text-sm padding-bottom-{{ option }} margin-bottom-xs">{{ option }}</div>
      <div class="box-secondary medium text-light text-sm padding-top-{{ option }}">{{ option }}</div>
    </div>
  {% endfor %}
</div>

---

### Padding Left & Right `.padding-{ left, right }-{ x1..x4 }-{ xxs..xxl }`
The examples below demonstrate how much padding will be added to the left and right sides of any element the classes is applied to
{: .section-description }

<div class="col-container">
  {% for direction in page.directions %}
    <div class="col">
      <div class="align-{{ direction }}">
        {% for option in page.options %}
          <div class="{{ page.box_classes }} padding-{{ direction }}-{{ option }} margin-bottom-md">.padding-{{ direction }}-{{ option }}</div>
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
