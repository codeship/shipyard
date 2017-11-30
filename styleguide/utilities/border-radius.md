---
title: Border-Radius Utilities
description: Shipyard's border-radius utilities are useful for connecting components together.
col_classes: col col-50 col-x1-20 margin-bottom-xs
box_classes: padding-top-xs padding-bottom-xs text-sm strong align-center bg-gray-light gray-dark
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

## Responsive Options `.rounded-{ breakpoint }-{ direction }`
The examples below demonstrate the utility classes on each breakpoint.
{: .section-description }

```html
{% for direction in page.directions -%}
  <div class="{{ 'rounded' | component_css_class: direction.modifier }}"><!-- {{ direction.label }} --></div>
{% endfor -%}
```

{% for breakpoint in site.data.breakpoints %}
  <h3 class="text-md text-light margin-top-lg margin-bottom-xs">{{ breakpoint.label }}</h3>
  <div class="col-container">
    {% for direction in page.directions %}
      <div class="{{ page.col_classes }}">
        <div class="{{ page.box_classes }} {{ 'rounded' | component_css_class: breakpoint.modifier, direction.modifier }}" tooltip="{{ '.rounded' | component_css_class: breakpoint.modifier, direction.modifier }}">
          {{ direction.label }}
        </div>
      </div>
    {% endfor %}
  </div>
{% endfor %}
