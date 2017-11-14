---
title: Checkboxes
labels:
  - Nulla vitae elit libero, a pharetra augue.
  - Cras mattis consectetur purus sit amet fermentum.
  - Cum sociis natoque penatibus et magnis dis parturient montes.
  - Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia.
  - Donec id elit non mi porta gravida at eget metus.
---

{% include page-heading.html page=page %}

---

## Default Checkbox Lists
<ul class="input-list">
  {% for label in page.labels %}
    <li class="input-item">
      <input id="checkbox-default-{{ forloop.index }}" name="checkbox-list" type="checkbox" class="input input-checkbox" {% if forloop.index == 1 %}checked{% endif %} />
      <label for="checkbox-default-{{ forloop.index }}" class="input-label">{{ label }}</label>
    </li>
  {% endfor %}
</ul>
```html
<ul class="input-list">
  <li class="input-item">
    <input id="checkbox-id" name="checkbox-name" type="checkbox" class="input input-checkbox" checked />
    <label for="checkbox-id" class="input-label">Checkbox Label</label>
  </li>
</ul>
```

---

## Inline Checkbox Lists
<ul class="input-list">
  {% for label in page.labels %}
    <li class="input-item-inline">
      <input id="checkbox-inline-{{ forloop.index }}" name="checkbox-list" type="checkbox" class="input input-checkbox" {% if forloop.index == 1 %}checked{% endif %} />
      <label for="checkbox-inline-{{ forloop.index }}" class="input-label">Inline Label</label>
    </li>
  {% endfor %}
</ul>

```html
<ul class="input-list">
  <li class="input-item-inline">
    <input id="checkbox-id" name="checkbox-name" type="checkbox" class="input input-checkbox" checked />
    <label for="checkbox-id" class="input-label">Checkbox Label</label>
  </li>
</ul>
```
