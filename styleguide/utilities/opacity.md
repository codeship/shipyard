---
title: Opacity Utilities
description: Shipyard's opacity utilities are useful when you need to overwrite the default opacity of a component.
options: [0,05,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95]
---

{% include page-heading.html page=page %}

---

<ul class="col-container strong align-center">
  {% for option in page.options reversed -%}
    <li class="col col-20 margin-bottom-sm">
      <div class="bg-gray-dark white rounded-sm padding-xs o-{{ option | opacity_css_class }}">
        .{{ option | opacity_css_class }}
      </div>
    </li>
  {% endfor -%}
</ul>

```css
{% sass_output shipyard/utilities/_opacity -%}
```
---

{% css_lines shipyard/utilities/_opacity -%}

---

{{ site.sass_output }}
