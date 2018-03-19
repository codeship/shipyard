---
title: Box-Shadow Utilities
sass_file: shipyard/utilities/_box-shadow
options: [default, hover, active]
---

{% include page-heading.html page=page %}

---

{% for option in page.options -%}
  <div class="bg-white box-shadow-{{ option }} rounded p-20 text-normal mb-20">
    .box-shadow-{{ option }}
  </div>
{% endfor %}

```css
{% sass_output -%}
```

---

{% include css-stats.html %}
