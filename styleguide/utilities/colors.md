---
title: Shipyard Colors
description: Shipyard includes **9 standard colors** by default, and each color can be accessed with the corresponding CSS utility class `.color-shade` or by using the SASS variable `$color-shade` in your SASS files.
colors: [Gray, Blue, Teal, Green, Yellow, Orange, Red, Coral, Purple]
shades: [Lightest, Lighter, Light, Base, Dark, Darker, Darkest]
---

{% include page-heading.html page=page %}

---

{% for color in page.colors %}
  <ul class="col-container shade-list margin-bottom-lg" shade-list>
    {% for shade in page.shades %}
      <li class="col col-50 col-x1-25 col-x2-0 padding-left-xxs padding-right-xxs padding-left-x1-xs padding-right-x1-xs margin-bottom-xs margin-bottom-x1-md shade-item shade-{{ shade | downcase }}">
        <div class="shade-box box bg-{{ color | append: '-' | append: shade | downcase | replace: '-base', '' }} shade-{{ shade | downcase | replace: 'er', '' | replace: 'est', '' }}">
          <div class="shade-color text-xxl bold bg-{{ color | append: '-' | append: shade | downcase | replace: '-base', '' }}" shade-color></div>
          <p class="shade-text text-sm medium {{ color | append: '-' | append: shade | downcase | replace: '-base', '' }}">
            ${{ color | append: '-' | append: shade | downcase | replace: '-base', '' }}
          </p>
        </div>
      </li>
    {% endfor %}
  </ul>
{% endfor %}
