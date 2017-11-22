---
title: Shipyard Colors
description: Shipyard includes **9 standard colors** by default, and each color can be accessed with the corresponding CSS utility class `.color-shade` or by using the SASS variable `$color-shade` in your SASS files.
primary_colors: [Gray, Blue, Teal, Green, Yellow, Orange, Red, Coral, Purple]
shades: [Lightest, Lighter, Light, Base, Dark, Darker, Darkest]
base_colors: [Black, White]
---

{% include page-heading.html page=page %}

---

{% for color in page.primary_colors %}
  <ul class="col-container shade-list margin-bottom-lg" shade-list>
    {% for shade in page.shades %}
      <li class="col col-50 col-x1-25 col-x2-0 padding-left-xxs padding-right-xxs padding-left-x1-xs padding-right-x1-xs margin-bottom-xs margin-bottom-x1-md shade-item shade-{{ shade | downcase }} shade-{{ color | color_css_class: shade }}">
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

<ul class="col-container shade-list margin-bottom-lg" shade-list>
  {% assign shade = 'Base' %}
  {% for color in page.base_colors %}
    <li class="col padding-left-xxs padding-right-xxs padding-left-x1-xs padding-right-x1-xs margin-bottom-xs margin-bottom-x1-md shade-item shade-{{ shade | downcase }} shade-{{ color | color_css_class: shade }}">
      <div class="shade-box box bg-{{ color | color_css_class: shade }} shade-{{ shade | downcase | replace: 'er', '' | replace: 'est', '' }}">
        <div class="shade-color text-xxl bold bg-{{ color | color_css_class: shade }}" shade-color></div>
        <p class="shade-text text-sm medium {{ color | color_css_class: shade }}">
          ${{ color | color_css_class }}
        </p>
      </div>
    </li>
  {% endfor %}
</ul>
