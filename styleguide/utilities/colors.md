---
title: Shipyard Colors
description: Shipyard includes **9 standard colors** by default, and each color can be accessed with the corresponding CSS utility class `.color-shade` or by using the SASS variable `$color-shade` in your SASS files.
colors: [Gray, Blue, Teal, Green, Yellow, Orange, Red, Coral, Purple]
shades: [Lightest, Lighter, Light, Base, Dark, Darker, Darkest]
---

{% include page-heading.html page=page %}

---

{% for color in page.colors %}
  <ul class="shade-list margin-bottom-xxl">
    {% for shade in page.shades %}
      <li class="shade-item shade-{{ shade | downcase }}">
        <div class="shade-box box bg-{{ color | append: '-' | append: shade | downcase | replace: '-base', '' }} shade-{{ shade | downcase | replace: 'er', '' | replace: 'est', '' }}">
          <div class="shade-color text-xxl bold bg-{{ color | append: '-' | append: shade | downcase | replace: '-base', '' }}"></div>
          <p class="shade-text text-sm medium {{ color | append: '-' | append: shade | downcase | replace: '-base', '' }}">
            ${{ color | append: '-' | append: shade | downcase | replace: '-base', '' }}
          </p>
        </div>
      </li>
    {% endfor %}
  </ul>
{% endfor %}
