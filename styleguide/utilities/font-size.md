---
title: Font-Size Utilities
sass_file: shipyard/utilities/_font-size
font_sizes: [xxs, xs, sm, md, lg, xl, xxl, xxxl]
---

{% include page-heading.html page=page %}

---

{% for size in page.font_sizes %}
  <p class="text-{{ size }}">.text-{{ size }}</p>
{% endfor %}

```css
{% sass_output -%}
```

---

{% include css-stats.html %}
