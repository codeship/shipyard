---
title: Radio Buttons
labels:
  - Nulla vitae elit libero, a pharetra augue.
  - Cras mattis consectetur purus sit amet fermentum.
  - Cum sociis natoque penatibus et magnis dis parturient montes.
  - Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia.
  - Donec id elit non mi porta gravida at eget metus.
---

{% include page-heading.html page=page %}

---

## Default Radio-Button Lists
<p class="text-light margin-bottom-md">Useful when you want to group a series of radio buttons together in a list (stacked by default).</p>

<ul class="input-list">
  {% for label in page.labels %}
    <li class="input-item">
      <input id="radio-default-{{ forloop.index }}" name="radio-list" type="radio" class="input input-radio" {% if forloop.index == 1 %}checked{% endif %} />
      <label for="radio-default-{{ forloop.index }}" class="input-label">{{ label }}</label>
    </li>
  {% endfor %}
</ul>

```html
<ul class="input-list">
  <li class="input-item">
    <input id="radio-id" name="radio-name" type="radio" class="input input-radio" checked />
    <label for="radio-id" class="input-label">Radio Button Label</label>
  </li>
</ul>
```

---

## Inline Radio-Button Lists
<p class="text-light margin-bottom-md">Useful when you want to group a series of radio buttons together on a single line.</p>

<ul class="input-list">
  {% for label in page.labels %}
    <li class="input-item-inline">
      <input id="radio-inline-{{ forloop.index }}" name="radio-list" type="radio" class="input input-radio" {% if forloop.index == 1 %}checked{% endif %} />
      <label for="radio-inline-{{ forloop.index }}" class="input-label">Inline Label</label>
    </li>
  {% endfor %}
</ul>

```html
<ul class="input-list">
  <li class="input-item-inline">
    <input id="radio-id" name="radio-name" type="radio" class="input input-radio" checked />
    <label for="radio-id" class="input-label">Radio Button Label</label>
  </li>
</ul>
```

---

## Inverse Radio-Button Lists
<p class="text-light margin-bottom-md">Useful when the radio buttons are displayed on a dark background.</p>
<div class="box-secondary box-padding bg-gray-darker">
  <ul class="input-list">
    {% for label in page.labels %}
      <li class="input-item">
        <input id="radio-inverse-{{ forloop.index }}" name="radio-inverse-list" type="radio" class="input input-radio input-radio-inverse" {% if forloop.index == 1 %}checked{% endif %} />
        <label for="radio-inverse-{{ forloop.index }}" class="input-label-inverse">{{ label }}</label>
      </li>
    {% endfor %}
  </ul>
</div>

```html
<ul class="input-list">
  <li class="input-item">
    <input id="radio-id" name="radio-name" type="radio" class="input input-radio input-radio-inverse" checked />
    <label for="radio-id" class="input-label-inverse">Radio Button Inverse Label</label>
  </li>
</ul>
```

---

## Radio-Checkbox Button Lists
<p class="text-light margin-bottom-md">Yep, that's exactly what it sounds like. It behaves like a radio button but looks a bit like a checkbox. Fancy!</p>

<ul class="input-list">
  {% for label in page.labels %}
    <li class="input-item">
      <input id="radio-checkbox-{{ forloop.index }}" name="radio-list" type="radio" class="input input-radio-checkbox" {% if forloop.index == 1 %}checked{% endif %} />
      <label for="radio-checkbox-{{ forloop.index }}" class="input-label">{{ label }}</label>
    </li>
  {% endfor %}
</ul>

```html
<ul class="input-list">
  <li class="input-item">
    <input id="radio-id" name="radio-name" type="radio" class="input input-radio-checkbox" checked />
    <label for="radio-id" class="input-label">Radio Button Label</label>
  </li>
</ul>
```

---

## Radio Buttons Nested in Buttons
{: .margin-bottom-md }

<button class="btn btn-secondary margin-right-xs margin-bottom-xs">
  <input type="radio" class="input input-radio margin-right-xxs" />
  Unchecked
</button>
<button class="btn btn-secondary margin-right-xs margin-bottom-xs">
  <input type="radio" class="input input-radio margin-right-xxs" checked />
  Checked
</button>
<button class="btn btn-secondary margin-right-xs margin-bottom-xs">
  <input type="radio" class="input input-radio-checkbox margin-right-xxs" checked />
  Checked w/ Icon
</button>
<button class="btn btn-cta margin-right-xs margin-bottom-xs">
  <input type="radio" class="input input-radio input-radio-inverse margin-right-xxs" />
  Inverse Unchecked
</button>
<button class="btn btn-cta margin-right-xs margin-bottom-xs">
  <input type="radio" class="input input-radio input-radio-inverse margin-right-xxs" checked />
  Inverse Checked
</button>
<button class="btn btn-cta margin-right-xs margin-bottom-xs">
  <input type="radio" class="input input-radio-checkbox input-radio-inverse margin-right-xs" checked />
  Inverse Checked w/ Icon
</button>

```html
<!-- Secondary button with a radio button in the unchecked state. -->
<button class="btn btn-secondary">
  <input type="radio" class="input input-radio margin-right-xxs" />
  Button Text
</button>

<!-- CTA button with a radio-checkbox in the checked state. -->
<button class="btn btn-cta">
  <input type="radio" class="input input-radio-checkbox input-radio-inverse margin-right-xxs" checked />
  Button Text
</button>
```
