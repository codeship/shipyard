---
title: Height Utilities
description: Useful when you need to create elements with fixed heights.
sass_file: shipyard/utilities/_height
heights: [50, 60, 70, 80, 90, 100]
---

{% include page-heading.html page=page %}

---

{% for size in page.heights %}
  <div class="box h-{{ size }} mb-20 relative">
    <strong class="center text-lighter text-sm">.h-{{ size }}</strong>
  </div>
{% endfor %}

```css
{% sass_output -%}
```

---

{% include css-stats.html %}
