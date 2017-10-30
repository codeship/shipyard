---
title: Shipyard Typography
text_sizes: [xxs, xs, sm, md, lg, xl, xxl, xxxl]
text_shades: [normal, light, lighter, lightest]
---

{% include page-heading.html page=page %}

<hr />

<div class="col-container">
  <div class="col">
    <h1>h1. Heading</h1>
    <h2>h2. Heading</h2>
    <h3>h3. Heading</h3>
    <h4>h4. Heading</h4>
    <h5>h5. Heading</h5>
    <h6>h6. Heading</h6>
  </div>
  <div class="col">
    <h3>Text Sizes</h3>
    {% for size in page.text_sizes %}
      <p class="text-{{ size }}">.text-{{ size }}</p>
    {% endfor %}
  </div>
  <div class="col">
    <h3>Font Weights</h3>
    <ul>
      <li class="normal">.normal</li>
      <li class="medium">.medium</li>
      <li class="strong">.strong</li>
    </ul>
  </div>
  <div class="col">
    <h3>Text Alignment</h3>
    <ul>
      <li class="align-left">.align-left</li>
      <li class="align-center">.align-center</li>
      <li class="align-right">.align-right</li>
    </ul>
  </div>
</div>

<hr />

<div class="col-container">
  <div class="col">
    <h3>Text Shades</h3>
    <div class="box box-padding margin-top-xs">
      <ul class="list strong">
        {% for shade in page.text_shades %}
          <li class="text-{{ shade }}">.text-{{ shade }}</li>
        {% endfor %}
      </ul>
    </div>
  </div>
  <div class="col">
    <h3>Inverse Text Shades</h3>
    <div class="box-secondary box-padding bg-gray-dark margin-top-xs">
      <ul class="list strong">
        {% for shade in page.text_shades %}
          <li class="text-inverse{{ '-' | append: shade | replace: '-normal', '' }}">
            .text-inverse{{ '-' | append: shade | replace: '-normal', '' }}
          </li>
        {% endfor %}
      </ul>
    </div>
  </div>
</div>

---

## Horizontal Rules
<p class="text-light margin-bottom-md" markdown="1">Shipyard doesn't make any assumptions on how you want to common tags like an `hr` to styled. As a result, we would recommend extending the `.hr` class in your own SASS files to achieve the results below on all `hr` tags (e.g. `@extend .hr`).</p>

<div class="utilities-typography-hr-box-default">
  <hr class="utilities-typography-hr" />
</div>
<div class="utilities-typography-hr-box-dark">
  <hr class="utilities-typography-hr hr-dark" />
</div>
<div class="utilities-typography-hr-box-light">
  <hr class="utilities-typography-hr hr-light" />
</div>

{% note :warning %}
  <p markdown="1">
    Please note that the code examples below are **not possible** without `hr { @extend .hr }` somewhere in your application's sass files. If you haven't done this, then you'll need to include the `.hr` class on every horizontal rule.
  </p>
{% endnote %}

```html
<hr />

<!-- Useful on darker backgrounds. -->
<hr class="hr-dark" />

<!-- Useful on lighter backgrounds. -->
<hr class="hr-light" />
```

---

## Thin Horizontal Rules `.hr-thin`
{: .margin-bottom-md }

<div class="utilities-typography-hr-box-default">
  <hr class="utilities-typography-hr hr-thin" />
</div>
<div class="utilities-typography-hr-box-dark">
  <hr class="utilities-typography-hr hr-dark hr-thin" />
</div>
<div class="utilities-typography-hr-box-light">
  <hr class="utilities-typography-hr hr-light hr-thin" />
</div>

```html
<hr class="hr-thin" />

<!-- Useful on darker backgrounds. -->
<hr class="hr-thin hr-dark" />

<!-- Useful on lighter backgrounds. -->
<hr class="hr-thin hr-light" />
```
