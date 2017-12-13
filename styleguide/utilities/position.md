---
title: Position Utilities
description: Shipyard's position utilities are helpful to override the default styles of component.
sass_file: shipyard/utilities/_position
position_utilities: [static, relative, absolute, fixed]
---

{% include page-heading.html page=page %}

---

## Position Utilities `.{ position }-{ x1..x4 }`
Useful when you need to overwrite the default styles of an element or component.
{: .section-description }

```css
{% for utility in page.position_utilities -%}
.{{ utility }} { position: {{ utility }} }
{% endfor -%}
```

---

{% include css-stats.html %}
