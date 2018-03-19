---
title: Opacity Utilities
description: Shipyard's opacity utilities are useful when you need to overwrite the default opacity of a component.
options: [0,10,20,30,40,50,60,70,80,90]
sass_file: shipyard/utilities/_opacity
---

{% include page-heading.html page=page %}

---

<ul class="col-container bold align-center">
  {% for option in page.options reversed -%}
    <li class="col col-20 mb-15">
      <div class="bg-gray-dark white rounded-sm p-10 o-{{ option | opacity_css_class }}">
        .{{ option | opacity_css_class }}
      </div>
    </li>
  {% endfor -%}
</ul>

```css
{% sass_output -%}
```

---

{% include css-stats.html %}
