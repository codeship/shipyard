---
title: Horizontal Rules
description: Shipyard doesn't make any assumptions on how you want to common tags like an `hr` to styled. As a result, we would recommend extending the `.hr` class in your own SASS files to achieve the results below on all `hr` tags (e.g. `@extend .hr`).
sass_file: shipyard/components/_horizontal-rules
text_sizes: [xxs, xs, sm, md, lg, xl, xxl, xxxl]
text_shades: [normal, light, lighter, lightest]
---

{% include page-heading.html page=page %}

{% note :warning %}
  <p markdown="1">
    Please note that the code examples below are **not possible** without `hr { @extend .hr }` somewhere in your application's sass files. If you haven't done this, then you'll need to include the `.hr` class on every horizontal rule.
  </p>
{% endnote %}

---

## Default Horizontal Rules
<div class="utilities-typography-hr-box-default">
  <hr class="utilities-typography-hr" />
</div>
<div class="utilities-typography-hr-box-dark">
  <hr class="utilities-typography-hr" />
</div>
<div class="utilities-typography-hr-box-light">
  <hr class="utilities-typography-hr" />
</div>

```html
<hr />
```

---

## Thin Horizontal Rules `.hr-thin`
{: .m-b-20 }

<div class="utilities-typography-hr-box-default">
  <hr class="utilities-typography-hr hr-thin" />
</div>
<div class="utilities-typography-hr-box-dark">
  <hr class="utilities-typography-hr hr-thin" />
</div>
<div class="utilities-typography-hr-box-light">
  <hr class="utilities-typography-hr hr-thin" />
</div>

```html
<hr class="hr-thin" />
```

---

## Dark Horizontal Rules
Useful when you have a horizontal rule on a darker background.
{: .section-description }

<div class="utilities-typography-hr-box-dark">
  <hr class="utilities-typography-hr hr-dark" />
</div>
```html
<hr class="hr-dark" />
```

---

## Light Horizontal Rules
Useful when you have a horizontal rule on a lighter background.
{: .section-description }

<div class="utilities-typography-hr-box-light">
  <hr class="utilities-typography-hr hr-light" />
</div>

```html
<hr class="hr-light" />
```

---

{% include css-stats.html %}
