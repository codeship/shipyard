---
title: Shipyard Tooltips
description: Add more context to any element your design with a simple tooltip.
sass_file: shipyard/components/_tooltips
directions: [top, bottom, right, left]
---

{% include page-heading.html page=page %}

---

## Data Tooltips `.tooltip-data`
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

## Light, Data Tooltips `.tooltip-data.tooltip-data-light`
Useful when the tooltip you're display will appear on a darker background.
{: .section-description }

<div class="align-center mb-30">
  {% for direction in page.directions %}
    <button class="btn btn-secondary btn-margin tooltip-data tooltip-data-light tooltip-data-{{ direction }}" data-tooltip="What a lovely tooltip">{{ direction | capitalize }}</button>
  {% endfor %}
</div>

```html
<button class="tooltip-data tooltip-data-light tooltip-data-{ direction }" data-tooltip="What a lovely tooltip">CTA</button>
```

---

## Custom Tooltips `.tooltip`
Useful when you need tooltips with content that's a bit more complex than your average tooltip.
{: .section-description }

<div class="align-center mb-30">
  {% for direction in page.directions %}
    <button class="btn btn-secondary btn-margin tooltip-parent">
      {{ direction | capitalize }}
      <div class="tooltip tooltip-{{ direction }} z-50">
        <h3 class="white text-md mb-5">Tooltip {{ direction | capitalize }}</h3>
        <p class="white-70 text-sm">Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus.</p>
      </div>
    </button>
  {% endfor %}
</div>

```html
{%- for direction in page.directions %}
<!-- Tooltip ({{ direction | capitalize }}) -->
<button class="tooltip-parent">
  Call to Action
  <div class="tooltip tooltip-{{ direction }} z-50"><!-- Tooltip Content --></div>
</button>
{% endfor -%}
```

---

## Light, Custom Tooltips `.tooltip.tooltip-light`
Useful when the tooltip you're display will appear on a darker background.
{: .section-description }

<div class="align-center mb-30">
  {% for direction in page.directions %}
    <button class="btn btn-secondary btn-margin tooltip-parent">
      {{ direction | capitalize }}
      <div class="tooltip tooltip-light tooltip-{{ direction }} z-50">
        <h3 class="text-dark text-md mb-5">Tooltip {{ direction | capitalize }}</h3>
        <p class="text-light text-sm">Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus.</p>
      </div>
    </button>
  {% endfor %}
</div>

```html
<button class="tooltip-parent">
  Call to Action
  <div class="tooltip tooltip-light tooltip-{ direction } z-50"><!-- Tooltip Content --></div>
</button>
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
