---
title: Border-Radius Utilities
description: Shipyard's border-radius utilities are useful for connecting components together.
sass_file: shipyard/utilities/_border-radius
col_classes: col col-50 sm:col-20 mb-10
box_classes: pt-10 pb-10 text-sm bold align-center bg-gray-light gray-dark
directions:
  -
    label: all
    modifier: null
  -
    label: none
    modifier: 0
  -
    label: top
    modifier: top
  -
    label: bottom
    modifier: bottom
  -
    label: left
    modifier: left
  -
    label: right
    modifier: right
  -
    label: top left
    modifier: top-left
  -
    label: top right
    modifier: top-right
  -
    label: bottom left
    modifier: bottom-left
  -
    label: bottom right
    modifier: bottom-right
---

{% include page-heading.html page=page %}

---

## Sizes `.{ screen }:rounded-{ size }`
The examples below demonstrate the utility classes at each size.
{: .section-description }

<div class="col-container">
  <div class="{{ page.col_classes }}">
    <div class="{{ page.box_classes }} rounded-pill">pill</div>
  </div>
  <div class="{{ page.col_classes }}">
    <div class="{{ page.box_classes }} rounded">default</div>
  </div>
  <div class="{{ page.col_classes }}">
    <div class="{{ page.box_classes }} rounded-sm">sm</div>
  </div>
  <div class="{{ page.col_classes }}">
    <div class="{{ page.box_classes }} rounded-xs">xs</div>
  </div>
  <div class="{{ page.col_classes }}">
    <div class="{{ page.box_classes }} rounded-0">0</div>
  </div>
</div>

```css
.rounded { border-radius: 5px }
.rounded-pill { border-radius: 999px }
.rounded-sm { border-radius: 3px }
.rounded-xs { border-radius: 2px }
.rounded-0 { border-radius: 0 }
```

---

## Responsive Options `.{screen}:rounded-{ direction }`
The examples below demonstrate the utility classes on each breakpoint.
{: .section-description }

```html
{% for direction in page.directions -%}
  <div class="{% if direction.modifier != 0 and direction.modifier != none %}rounded {% endif %}{{ 'rounded' | component_css_class: direction.modifier }}"><!-- {{ direction.label }} --></div>
{% endfor -%}
```

{% for breakpoint in site.data.breakpoints %}
  <h3 class="text-md text-light mt-30 mb-10" markdown="1">{{ breakpoint.label }} `.{{ 'rounded' | component_css_class: breakpoint.modifier }}`</h3>
  <div class="col-container">
    {% for direction in page.directions %}
      <div class="{{ page.col_classes }}">
        <div class="{{ page.box_classes }} tooltip-data tooltip-data-top {{ 'rounded' | component_css_class: breakpoint.modifier }} {{ 'rounded' | component_css_class: breakpoint.modifier, direction.modifier }}" data-tooltip=".{{ 'rounded' | component_css_class: breakpoint.modifier, direction.modifier }}">
          {{ direction.label }}
        </div>
      </div>
    {% endfor %}
  </div>
{% endfor %}

---

### Utility CSS
```css
{% sass_output -%}
```

---

{% include css-stats.html %}
