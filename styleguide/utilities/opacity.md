---
title: Opacity Utilities
description: Shipyard's opacity utilities are useful when you need to overwrite the default opacity of a component.
options: [0,05,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95]
---

{% include page-heading.html page=page %}

---

## Sizes `.rounded-{ x1..x4 }-{ size }`
The examples below demonstrate the utility classes at each size.
{: .section-description }


```css
{% for option in page.options -%}
.o-{{ option | opacity_css_class }} { opacity: {{ option | opacity_css_class: '.' }} }
{% endfor -%}
```
