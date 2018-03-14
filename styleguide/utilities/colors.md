---
title: Shipyard Colors
description: Shipyard includes **9 standard colors** by default, and each color can be accessed with the corresponding CSS utility class `.color-shade` or by using the SASS variable `$color-shade` in your SASS files.
sass_file: shipyard/utilities/_colors
primary_colors: [Gray, Blue, Teal, Green, Yellow, Orange, Red, Coral, Purple]
shades: [Lightest, Lighter, Light, Base, Dark, Darker, Darkest]
base_colors: [Black, White]
---

{% include page-heading.html page=page %}

---

{% for color in page.primary_colors %}
  <ul class="col-container shade-list mb-30" shade-list>
    {% for shade in page.shades %}
      <li class="col col-50 sm:col-25 md:col-0 pl-5 pr-5 sm:pl-10 sm:pr-10 mb-10 sm:mb-20 shade-item shade-{{ shade | downcase }} shade-{{ color | color_css_class: shade }}">
        <div class="shade-box box bg-{{ color | color_css_class: shade }} shade-{{ shade | downcase | replace: 'er', '' | replace: 'est', '' }}">
          <div class="shade-color col-center text-xxl bold bg-{{ color | color_css_class: shade }}" shade-color></div>
          <p class="shade-text text-sm medium {{ color | color_css_class: shade }}">
            ${{ color | color_css_class: shade }}
          </p>
        </div>
      </li>
    {% endfor %}
  </ul>
{% endfor %}

<ul class="col-container shade-list mb-30" shade-list>
  {% assign shade = 'Base' %}
  {% for color in page.base_colors %}
    <li class="col pl-5 pr-5 sm:pl-10 sm:pr-10 mb-10 sm:mb-20 shade-item shade-{{ shade | downcase }} shade-{{ color | color_css_class: shade }}">
      <div class="shade-box box bg-{{ color | color_css_class: shade }} shade-{{ shade | downcase | replace: 'er', '' | replace: 'est', '' }}">
        <div class="shade-color text-xxl bold bg-{{ color | color_css_class: shade }}" shade-color></div>
        <p class="shade-text text-sm medium {{ color | color_css_class: shade }}">
          ${{ color | color_css_class }}
        </p>
      </div>
    </li>
  {% endfor %}
</ul>

---

```css
{% sass_output -%}
```

---

{% include css-stats.html %}
