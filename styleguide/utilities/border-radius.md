---
title: Border-Radius Utilities
description: Shipyard's border-radius utilities are useful for connecting components together.
col_classes: col col-50 col-x1-0 margin-bottom-xs
box_classes: padding-top-xs padding-bottom-xs text-sm strong align-center bg-gray-light gray-dark
directions:
  none: 0
  top: t
  bottom: b
  left: l
  right: r
---

{% include page-heading.html page=page %}

---

<div class="col-container">
  <div class="{{ page.col_classes }}">
    <div class="{{ page.box_classes }} rds" tooltip=".rds">
      all
    </div>
  </div>
  {% for direction in page.directions %}
    <div class="{{ page.col_classes }}">
      <div class="{{ page.box_classes }} box-secondary rds-{{ direction[1] }}" tooltip=".rds-{{ direction[1] }}">
        {{ direction[0] }}
      </div>
    </div>
  {% endfor %}
</div>

```html
<div class="rds"><!-- border-radius: all corners --></div>
<div class="rds-0"><!-- border-radius: 0 --></div>
<div class="rds-t"><!-- border-radius: top --></div>
<div class="rds-b"><!-- border-radius: bottom --></div>
<div class="rds-l"><!-- border-radius: left --></div>
<div class="rds-r"><!-- border-radius: right --></div>
```
