---
title: Shipyard Grid
description: The Shipyard grid is a percentage-based, flexbox grid and is entirely responsive. Each class needs the foundational `.col` class in order to function properly, and also should be contained inside the `.col-container` as well.
example_one: [10,20,25,33,50]
example_sizes: [5,10,15,20,25,30,33,35,40,45,50,55,60,65,66,70,75,80,85,90,95,100]
example_offsets: [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75]
---

{% include page-heading.html page=page %}

---

### Flexible Columns `.col`
<p class="text-light margin-bottom-md">By default, the flexbox-based grid will automatically size each column inside the container.</p>

{% for example in page.example_one %}
  <div class="col-container margin-top-xs margin-top-x1-sm margin-top-x2-md margin-bottom-md">
    {% assign num = 100 | divided_by: example %}
    {% for i in (1..num) %}
      <div class="col align-center">
        <div class="box-secondary text-light text-sm strong">{{ example }}</div>
      </div>
    {% endfor %}
  </div>
{% endfor %}

```html
<div class="col-container">
  <div class="col"><!-- column contents --></div>
  <div class="col"><!-- column contents --></div>
  <div class="col"><!-- column contents --></div>
</div>
```

---

### Column Sizes `.col-{ n }`
<p class="text-light margin-bottom-md" markdown="1">The column sizes are percentage-based and available in any size from `5-100` in increments of 5.</p>

{% for example in page.example_sizes %}
  <div class="col-container margin-top-xs margin-top-x1-sm margin-top-x2-md margin-bottom-md">
    {% assign num = 100 | divided_by: example %}
    {% for i in (1..num) %}
      <div class="col col-{{ example }} align-center">
        <div class="box-secondary text-light text-sm strong">{{ example }}</div>
      </div>
    {% endfor %}

    {% assign remainder = 100 | modulo: example %}
    {% if remainder > 1 %}
      <div class="col align-center">
        <div class="box-secondary text-light text-sm strong">Auto</div>
      </div>
    {% endif %}
  </div>
{% endfor %}

```html
<div class="col-container">
  <div class="col col-33"><!-- column contents --></div>
  <div class="col col-33"><!-- column contents --></div>
  <div class="col col-33"><!-- column contents --></div>
</div>
```

---

### Offset Columns `.col-offset-{ n }`
<p class="text-light margin-bottom-md">Useful when you need to push columns to the right to fill some empty space.</p>

{% assign example_offsets = page.example_offsets | reverse %}
{% for i in example_offsets %}
  <div class="col-container margin-top-xs margin-top-x1-sm margin-top-x2-md margin-bottom-md">
    <div class="col col-{{ i }} align-center">
      <div class="box-secondary text-light text-sm strong">{{ i }}</div>
    </div>
    {% if i < 100 %}
      <div class="col col-20 col-offset-{{ 80 | minus: i }} align-center">
        <div class="box-secondary text-light text-sm strong">offset {{ 80 | minus: i }}</div>
      </div>
    {% endif %}
  </div>
{% endfor %}
```html
<div class="col-container">
  <div class="col col-70"><!-- column contents --></div>
  <div class="col col-20 col-offset-10"><!-- column contents --></div>
</div>
```
