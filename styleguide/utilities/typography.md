---
title: Shipyard Typography
text_sizes: [xxs, xs, sm, md, lg, xl, xxl, xxxl]
text_shades: [darkest, darker, dark, normal, light, lighter, lightest]
---

{% include page-heading.html page=page %}

---

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

---

<div class="col-container">
  <div class="col">
    <h3>Text Shades</h3>
    <div class="box box-padding margin-top-xs">
      <ul class="list medium">
        {% for shade in page.text_shades %}
          <li class="text-{{ shade }}">.text-{{ shade }}</li>
        {% endfor %}
      </ul>
    </div>
  </div>
  <div class="col">
    <h3>Inverse Text Shades</h3>
    <div class="box-secondary box-padding bg-gray-dark margin-top-xs">
      <ul class="list medium">
        {% for shade in page.text_shades %}
          <li class="text-inverse{{ '-' | append: shade | replace: '-normal', '' }}">
            .text-inverse{{ '-' | append: shade | replace: '-normal', '' }}
          </li>
        {% endfor %}
      </ul>
    </div>
  </div>
</div>
