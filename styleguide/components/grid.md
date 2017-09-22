---
title: Shipyard Grid
description: The grid is percentage-based and also entirely responsive. Each class needs the foundational `.col` class in order to function properly, and also should be contained inside the `.col-container` as well.
example_one: [10,20,25,33]
example_two: [50,55,60,65,70,75,80,85,90,95,100]
example_three: [25,35,45,50,55,60,65,70,75]
---

{% include page-heading.html page=page %}

---

{% for example in page.example_one %}
  <div class="col-container margin-top-xs margin-top-x1-sm margin-top-x2-md">
    {% assign num = 100 | divided_by: example %}
    {% for i in (1..num) %}
      <div class="col col-{{ example }} align-center">
        <div class="box-secondary text-light text-sm strong">{{ example }}</div>
      </div>
    {% endfor %}
  </div>
{% endfor %}

<div class="col-container margin-top-xs margin-top-x1-sm margin-top-x2-md">
  <div class="col col-66 align-center">
    <div class="box-secondary text-light text-sm strong">66</div>
  </div>
  <div class="col col-33 align-center">
    <div class="box-secondary text-light text-sm strong">33</div>
  </div>
</div>

---

### Column Sizes `.col-{ n }`

{% for i in page.example_two %}
  <div class="col-container margin-top-xs margin-top-x1-sm margin-top-x2-md">
    <div class="col col-{{ i }} align-center">
      <div class="box-secondary text-light text-sm strong">{{ i }}</div>
    </div>
    {% if i < 100 %}
      <div class="col col-{{ 100 | minus: i }} align-center">
        <div class="box-secondary text-light text-sm strong">{{ 100 | minus: i }}</div>
      </div>
    {% endif %}
  </div>
{% endfor %}

---

### Offset Columns `.col-offset-{ n }`
<p class="text-light margin-bottom-sm">Useful when you need to push columns to the right to fill some empty space.</p>

{% for i in page.example_three %}
  <div class="col-container margin-top-xs margin-top-x1-sm margin-top-x2-md">
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
