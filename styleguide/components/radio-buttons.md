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

<div class="box-secondary box-padding bg-gray-darker">
  <div class="col-container margin-top-xs">
    <div class="col col-25">
      <h2 class="white">Inverse States</h2>
      <ul class="input-radio-list">
        <li class="input-radio-item">
          <input id="radio-inverse-unchecked" type="radio" class="input-radio input-radio-inverse" />
          <label for="radio-inverse-unchecked" class="input-radio-label-inverse">Unchecked</label>
        </li>
        <li class="input-radio-item">
          <input id="radio-inverse-checked" type="radio" class="input-radio input-radio-inverse" checked />
          <label for="radio-inverse-checked" class="input-radio-label-inverse">Checked</label>
        </li>
      </ul>
    </div>
    <div class="col col-75">
      <h2 class="white">Inverse List Example</h2>
      <ul class="input-radio-list">
        {% for label in page.labels %}
          <li class="input-radio-item">
            <input id="radio-inverse-{{ forloop.index }}" name="radio-list-inverse" type="radio" class="input-radio input-radio-inverse" {% if forloop.index == 1 %}checked{% endif %} />
            <label for="radio-inverse-{{ forloop.index }}" class="input-radio-label-inverse">{{ label }}</label>
          </li>
        {% endfor %}
      </ul>
    </div>
  </div>
</div>

<hr />

<div class="col-container margin-top-xs">
  <div class="col">
    <h2>Radio Buttons w/ Checkmarks</h2>
    <ul class="input-radio-list">
      <li class="input-radio-item">
        <input id="radio-unchecked-checkmark" type="radio" class="input-radio input-radio-checked" />
        <label for="radio-unchecked-checkmark" class="input-radio-label">Unchecked</label>
      </li>
      <li class="input-radio-item">
        <input id="radio-checked-checkmark" type="radio" class="input-radio input-radio-checked" checked />
        <label for="radio-checked-checkmark" class="input-radio-label">Checked</label>
      </li>
      <li class="input-radio-item">
        <input id="radio-inverse-unchecked-checkmark" type="radio" class="input-radio input-radio-inverse input-radio-checked" />
        <label for="radio-inverse-unchecked-checkmark" class="input-radio-label">Inverse Unchecked</label>
      </li>
      <li class="input-radio-item">
        <input id="radio-inverse-checked-checkmark" type="radio" class="input-radio input-radio-inverse input-radio-checked" checked />
        <label for="radio-inverse-checked-checkmark" class="input-radio-label">Inverse Checked</label>
      </li>
    </ul>
  </div>
  <div class="col">
    <h2>Radio Buttons Nested in Buttons</h2>
    <ul>
      <li>
        <button class="btn btn-secondary">
          <input type="radio" class="input-radio margin-right-xxs" />
          Unchecked
        </button>
      </li>
      <li>
        <button class="btn btn-secondary">
          <input type="radio" class="input-radio margin-right-xxs" checked />
          Checked
        </button>
      </li>
      <li>
        <button class="btn btn-secondary">
          <input type="radio" class="input-radio input-radio-checked margin-right-xxs" checked />
          Checked w/ Icon
        </button>
      </li>
      <li>
        <button class="btn btn-cta">
          <input type="radio" class="input-radio input-radio-inverse margin-right-xxs" />
          Inverse Unchecked
        </button>
      </li>
      <li>
        <button class="btn btn-cta">
          <input type="radio" class="input-radio input-radio-inverse margin-right-xxs" checked />
          Inverse Checked
        </button>
      </li>
      <li>
        <button class="btn btn-cta">
          <input type="radio" class="input-radio input-radio-inverse input-radio-checked margin-right-xxs" checked />
          Inverse Checked w/ Icon
        </button>
      </li>
    </ul>
  </div>
</div>

<hr />

<h2>Radio &amp; Checkbox Lists</h2>
<div class="col-container">
  <div class="col">
    <ul class="legacy-input-radio-list">
      <li class="legacy-input-radio-item">
        <input type="radio" class="input legacy-input-radio margin-right-xxs" checked />
        <label class="legacy-input-radio-label">Label</label>
      </li>
      {% for i in (1..4) %}
        <li class="legacy-input-radio-item">
          <input type="radio" class="input legacy-input-radio margin-right-xxs" />
          <label class="legacy-input-radio-label">Label</label>
        </li>
      {% endfor %}
    </ul>
  </div>
  <div class="col">
    <ul class="legacy-input-checkbox-list">
      <li class="legacy-input-checkbox-item">
        <input type="checkbox" class="input legacy-input-checkbox margin-right-xxs" checked />
        <label class="legacy-input-checkbox-label">Label</label>
      </li>
      {% for i in (1..4) %}
        <li class="legacy-input-checkbox-item">
          <input type="checkbox" class="input legacy-input-checkbox margin-right-xxs" />
          <label class="legacy-input-checkbox-label">Label</label>
        </li>
      {% endfor %}
    </ul>
  </div>
</div>
