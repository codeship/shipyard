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
<p class="text-light margin-bottom-md">Useful when you want to group a series of checkboxes together in a list (stacked by default).</p>

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
<p class="text-light margin-bottom-md">Useful when you want to group a series of checkboxes together on a single line.</p>

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

---

## Inverse Checkbox Lists
<p class="text-light margin-bottom-md">Useful when the checkboxes are displayed on a dark background.</p>

<div class="box-secondary box-padding bg-gray-darker">
  <ul class="input-list">
    {% for label in page.labels %}
      <li class="input-item">
        <input id="checkbox-inverse-{{ forloop.index }}" name="checkbox-inverse-list" type="checkbox" class="input input-checkbox input-checkbox-inverse" {% if forloop.index == 1 %}checked{% endif %} />
        <label for="checkbox-inverse-{{ forloop.index }}" class="input-label-inverse">{{ label }}</label>
      </li>
    {% endfor %}
  </ul>
</div>

```html
<ul class="input-list">
  <li class="input-item">
    <input id="checkbox-id" name="checkbox-name" type="checkbox" class="input input-checkbox input-checkbox-inverse" checked />
    <label for="checkbox-id" class="input-label-inverse">Checkbox Inverse Label</label>
  </li>
</ul>
```

---

## Checkboxes Nested in Buttons
{: .margin-bottom-md }

<button class="btn btn-secondary margin-right-xs margin-bottom-xs">
  <input type="checkbox" class="input input-checkbox margin-right-xxs" />
  Unchecked
</button>
<button class="btn btn-secondary margin-right-xs margin-bottom-xs">
  <input type="checkbox" class="input input-checkbox margin-right-xxs" checked />
  Checked
</button>
<button class="btn btn-cta margin-right-xs margin-bottom-xs">
  <input type="checkbox" class="input input-checkbox input-checkbox-inverse margin-right-xxs" />
  Inverse Unchecked
</button>
<button class="btn btn-cta margin-right-xs margin-bottom-xs">
  <input type="checkbox" class="input input-checkbox input-checkbox-inverse margin-right-xxs" checked />
  Inverse Checked
</button>

```html
<!-- Secondary button with a checkbox in the unchecked state. -->
<button class="btn btn-secondary">
  <input type="checkbox" class="input input-checkbox margin-right-xxs" />
  Button Text
</button>

<!-- CTA button with a checkbox in the checked state. -->
<button class="btn btn-cta">
  <input type="checkbox" class="input input-checkbox input-checkbox-inverse margin-right-xxs" checked />
  Button Text
</button>
```
