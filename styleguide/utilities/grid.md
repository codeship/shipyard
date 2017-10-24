---
title: Shipyard Grid
description: The Shipyard grid is a percentage-based, flexbox grid and is entirely responsive. Each class needs the foundational `.col` class in order to function properly, and also should be contained inside the `.col-container` as well.
container_classes: col-container margin-top-xs margin-top-x1-sm margin-top-x2-md margin-bottom-xs margin-bottom-x1-sm margin-bottom-x2-md
box_classes: utilities-grid-box box-secondary text-light text-sm strong align-center
example_flex_columns: [10,20,25,33,50]
example_sizes: [5,10,15,20,25,30,33,35,40,45,50,55,60,65,66,70,75,80,85,90,95,100]
example_offsets: [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75]
---

{% include page-heading.html page=page %}

---

### Flexible Columns `.col`
<p class="text-light margin-bottom-md">By default, the flexbox-based grid will automatically size each column inside the container.</p>

{% for example in page.example_flex_columns %}
  <div class="{{ page.container_classes }}">
    {% assign num = 100 | divided_by: example %}
    {% for i in (1..num) %}
      <div class="col">
        <div class="{{ page.box_classes }}">{{ example }}</div>
      </div>
    {% endfor %}
  </div>
{% endfor %}
<div class="{{ page.container_classes }}">
  <div class="col col-66 align-center">
    <div class="{{ page.box_classes }}">66</div>
  </div>
  <div class="col align-center">
    <div class="{{ page.box_classes }}">auto</div>
  </div>
</div>

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
  <div class="{{ page.container_classes }}">
    {% assign num = 100 | divided_by: example %}
    {% for i in (1..num) %}
      <div class="col col-{{ example }}">
        <div class="{{ page.box_classes }}">{{ example }}</div>
      </div>
    {% endfor %}

    {% assign remainder = 100 | modulo: example %}
    {% if remainder > 1 %}
      <div class="col col-{{ remainder }}">
        <div class="{{ page.box_classes }}">{{ remainder }}</div>
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
  <div class="{{ page.container_classes }}">
    <div class="col col-{{ i }}">
      <div class="{{ page.box_classes }}">{{ i }}</div>
    </div>
    {% if i < 100 %}
      <div class="col col-20 col-offset-{{ 80 | minus: i }}">
        <div class="{{ page.box_classes }}">offset {{ 80 | minus: i }}</div>
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

---

### Responsive Columns `.col-(x1..x4)-{ n }`
<p class="text-light margin-bottom-md" markdown="1">Useful when you want to build a grid that works for any size of screen.</p>

<div class="{{ page.container_classes }}">
  {% for i in (1..5) %}
    <div class="col col-100 col-x1-33 col-x2-25 col-x3-20">
      <div class="{{ page.box_classes }}">
        <span class="display-block display-x1-none">100</span>
        <span class="display-none display-x1-block display-x2-none">33</span>
        <span class="display-none display-x2-block display-x3-none">25</span>
        <span class="display-none display-x3-block">20</span>
      </div>
    </div>
  {% endfor %}
</div>

```html
<div class="col-container-wrap">
  <div class="col col-100 col-x1-33 col-x2-25 col-x3-20"><!-- column 1 --></div>
  <div class="col col-100 col-x1-33 col-x2-25 col-x3-20"><!-- column 2 --></div>
  <div class="col col-100 col-x1-33 col-x2-25 col-x3-20"><!-- column 3 --></div>
  <div class="col col-100 col-x1-33 col-x2-25 col-x3-20"><!-- column 4 --></div>
  <div class="col col-100 col-x1-33 col-x2-25 col-x3-20"><!-- column 5 --></div>
</div>
```

---

### Take-Up-The-Rest Columns `.col-container-nowrap`
<p class="text-light margin-bottom-md" markdown="1">This type of layout is useful in all kinds of scenarios, especially when you have the auto-sized column contains some kind of call-to-action.</p>

<div class="{{ page.container_classes | replace: 'col-container', 'col-container-nowrap' }}">
  <div class="col col-100">
    <div class="{{ page.box_classes }}">Take-up-the-rest Column</div>
  </div>
  <div class="col">
    <div class="white-space-nowrap {{ page.box_classes }}">Variable Column</div>
  </div>
</div>

```html
<div class="col-container-nowrap">
  <div class="col col-100">
    <!-- Take-Up-The-Rest Column -->
  </div>
  <div class="col">
    <!-- Variable Column -->
  </div>
</div>
```

---

### Nested Columns
<p class="text-light margin-bottom-md" markdown="1">Nested grids can be tricky to build and somewhat fragile by nature. For the best results, pay special attention to how you want each column to respond at various screen sizes and test each breakpoint thoroughly.</p>

<div class="{{ page.container_classes }}">
  <div class="col col-40 display-flex">
    <div class="{{ page.box_classes }}">40</div>
  </div>
  <div class="col col-60">
    <div class="{{ page.box_classes }} margin-bottom-xs margin-bottom-x1-sm margin-bottom-x2-md">60</div>
    <div class="col-container">
      <div class="col"><div class="{{ page.box_classes }}">20</div></div>
      <div class="col"><div class="{{ page.box_classes }}">20</div></div>
      <div class="col"><div class="{{ page.box_classes }}">20</div></div>
    </div>
  </div>
</div>

```html
<div class="col-container">
  <div class="col col-40">
    <!-- 40% column -->
  </div>
  <div class="col col-60">
    <!-- 60% column -->
    <div class="col-container">
      <div class="col"><!-- auto column --></div>
      <div class="col"><!-- auto column --></div>
      <div class="col"><!-- auto column --></div>
    </div>
  </div>
</div>
```
