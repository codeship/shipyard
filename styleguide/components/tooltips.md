---
title: Shipyard Tooltips
description: Tooltips are used primarily by setting the tooltip attribute on any element (e.g. `tooltip="..."`).
sass_file: shipyard/components/_tooltips
directions: [top, bottom, right, left]
---

{% include page-heading.html page=page %}

---

<div class="align-center">
  {% btn Default Tooltip, :secondary :margin, tooltip: 'What a lovely tooltip' %}
  {% btn Top, :secondary :margin, tooltip: 'What a lovely tooltip' %}
  {% btn Bottom, :secondary :margin, tooltip: 'What a lovely tooltip' %}
  {% btn Left, :secondary :margin, tooltip: 'What a lovely tooltip' %}
  {% btn Right, :secondary :margin, tooltip: 'What a lovely tooltip' %}
</div>

---

## Custom Tooltips
Useful when you need tooltips with content that's a bit more complex than your average tooltip.
{: .section-description }

<div class="align-center mb-30">
  {% for direction in page.directions %}
    <button class="btn btn-secondary btn-margin tooltip-parent">
      {{ direction | capitalize }}
      <div class="tooltip tooltip-{{ direction }}">
        <h3 class="text-inverse text-md mb-5">Tooltip {{ direction | capitalize }}</h3>
        <p class="text-inverse-normal text-sm">Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus.</p>
      </div>
    </button>
  {% endfor %}
</div>

```html
{%- for direction in page.directions %}
<!-- Tooltip ({{ direction | capitalize }}) -->
<button class="tooltip-parent">
  Call to Action
  <div class="tooltip tooltip-{{ direction }}">
    <!-- Tooltip Content -->
  </div>
</button>
{% endfor -%}
```

---

## CSS Output
```css
{% sass_output -%}
```

---

{% include css-stats.html %}
