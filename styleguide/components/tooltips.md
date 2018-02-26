---
title: Shipyard Tooltips
description: Tooltips are used primarily by setting the tooltip attribute on any element (e.g. `tooltip="..."`).
sass_file: shipyard/components/_tooltips
directions: [top, bottom, right, left]
---

{% include page-heading.html page=page %}

---

## Data Tooltips
Useful when you need tooltips with content that's a bit more complex than your average tooltip.
{: .section-description }

<div class="align-center mb-30">
  {% for direction in page.directions %}
    <button class="btn btn-secondary btn-margin tooltip-data tooltip-data-{{ direction }}" data-tooltip="What a lovely tooltip">{{ direction | capitalize }}</button>
  {% endfor %}
</div>

```html
{% for direction in page.directions -%}
<button class="tooltip-data tooltip-data-{{ direction }}" data-tooltip="What a lovely tooltip">{{ direction | capitalize }}</button>
{% endfor -%}
```

---

## Large, Custom Tooltips
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
  <div class="tooltip tooltip-{{ direction }}"><!-- Tooltip Content --></div>
</button>
{% endfor -%}
```

---

## CSS Output
Here's the raw CSS output if you'd like a peak under the hood.
{: .section-description }

```css
{% sass_output -%}
```

---

{% include css-stats.html %}
