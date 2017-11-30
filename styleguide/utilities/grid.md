---
title: Shipyard Grid
description: The Shipyard grid is a percentage-based, flexbox grid and is entirely responsive. Each class needs the foundational `.col` class in order to function properly, and also should be contained inside the `.col-container` as well.
container_classes: col-container margin-top-xs margin-top-x1-sm margin-top-x2-md margin-bottom-xs margin-bottom-x1-sm margin-bottom-x2-md
box_classes: utilities-grid-box col-center box-secondary text-lighter text-sm strong align-center
example_flex_columns: [10,20,25,33,50]
example_sizes: [5,10,15,20,25,30,33,35,40,45,50,55,60,65,66,70,75,80,85,90,95,100]
example_offsets: [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75]
---

{% include page-heading.html page=page %}

---

### Flexible Columns `.col`
By default, the flexbox-based grid will automatically size each column inside the container.
{: .section-description }

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
The column sizes are percentage-based and available in any size from `5-100` in increments of 5.
{: .section-description }

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
Useful when you need to push columns to the right to fill some empty space.
{: .section-description }

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

### Responsive Columns `.col-{ x1..x4 }-{ n }`
Useful when you want to build a grid that works for any size of screen.
{: .section-description }

<div class="{{ page.container_classes }}">
  {% for i in (1..7) %}
    <div class="col col-100 col-x1-33 col-x2-25 col-x3-0">
      <div class="{{ page.box_classes }}">
        <span class="display-block display-x1-none">100</span>
        <span class="display-none display-x1-block display-x2-none">33</span>
        <span class="display-none display-x2-block display-x3-none">25</span>
        <span class="display-none display-x3-block">auto</span>
      </div>
    </div>
  {% endfor %}
</div>

```html
<div class="col-container-wrap">
  <div class="col col-100 col-x1-33 col-x2-25 col-x3-0"><!-- column 1 --></div>
  <div class="col col-100 col-x1-33 col-x2-25 col-x3-0"><!-- column 2 --></div>
  <div class="col col-100 col-x1-33 col-x2-25 col-x3-0"><!-- column 3 --></div>
  <div class="col col-100 col-x1-33 col-x2-25 col-x3-0"><!-- column 4 --></div>
  <div class="col col-100 col-x1-33 col-x2-25 col-x3-0"><!-- column 5 --></div>
  <div class="col col-100 col-x1-33 col-x2-25 col-x3-0"><!-- column 6 --></div>
  <div class="col col-100 col-x1-33 col-x2-25 col-x3-0"><!-- column 7 --></div>
</div>
```

---

### Take-Up-The-Rest Columns `.col-container-nowrap`
This type of layout is useful in all kinds of scenarios, especially when you have the auto-sized column contains some kind of call-to-action.
{: .section-description }

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
Nested grids can be tricky to build and somewhat fragile by nature. For the best results, pay special attention to how you want each column to respond at various screen sizes and test each breakpoint thoroughly.
{: .section-description }

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

---

### Reversible Columns `.flex-{ x1..x4 }-{ col | col-reverse | row | row-reverse }`
Useful when the flow of the content should be different at a certain breakpoint.
{: .section-description }

<div class="{{ page.container_classes }}">
  <div class="col flex-col flex-x2-col-reverse">
    <div class="{{ page.box_classes }} bg-teal-lighter">
      <span class="teal-darker display-inline display-x2-none">top (mobile)</span>
      <span class="teal-darker display-none display-x2-inline">bottom (desktop)</span>
    </div>
    <div class="col-container margin-top-xs margin-top-x2-sm margin-bottom-xs margin-bottom-x2-sm flex-row flex-x2-row-reverse">
      <div class="col">
        <div class="{{ page.box_classes }} bg-blue-lighter">
          <span class="blue-darker display-inline display-x2-none">left (mobile)</span>
          <span class="blue-darker display-none display-x2-inline">right (desktop)</span>
        </div>
      </div>
      <div class="col">
        <div class="{{ page.box_classes }} bg-green-lighter">
          <span class="green-darker">middle</span>
        </div>
      </div>
      <div class="col">
        <div class="{{ page.box_classes }} bg-yellow-lighter">
          <span class="yellow-darker display-inline display-x2-none">right (mobile)</span>
          <span class="yellow-darker display-none display-x2-inline">left (desktop)</span>
        </div>
      </div>
    </div>
    <div class="{{ page.box_classes }} bg-orange-lightest">
      <span class="orange-darker display-inline display-x2-none">bottom (mobile)</span>
      <span class="orange-darker display-none display-x2-inline">top (desktop)</span>
    </div>
  </div>
</div>

```html
<div class="col-container">
  <div class="col flex-col flex-x2-col-reverse">
    <div>
      <!-- top on mobile; bottom on desktop -->
    </div>
    <div class="col-container flex-row flex-x2-row-reverse">
      <div class="col"><!-- left on mobile; right on desktop --></div>
      <div class="col"><!-- middle on all breakpoints --></div>
      <div class="col"><!-- right on mobile; left on desktop --></div>
    </div>
    <div>
      <!-- bottom on mobile; top on desktop -->
    </div>
  </div>
</div>
```
