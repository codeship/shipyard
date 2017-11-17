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

## Inline Checkbox Lists
<p class="text-light margin-bottom-md">Useful when you want to group a series of checkboxes together on a single line.</p>

<ul class="input-list margin-bottom-lg">
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

## Stacked Checkbox Lists
<p class="text-light margin-bottom-md">Useful when you want to group a series of checkboxes together in a list (stacked by default).</p>

<div class="col-container margin-bottom-sm margin-bottom-x1-lg">
  <div class="col col-100 col-x1-50 margin-bottom-sm margin-bottom-x1-none">
    <div class="rounded bg-white box-padding">
      <ul class="input-list">
        {% for label in page.labels %}
          <li class="input-item">
            <input id="checkbox-light-{{ forloop.index }}" name="checkbox-list" type="checkbox" class="input input-checkbox" {% if forloop.index == 1 %}checked{% endif %} />
            <label for="checkbox-light-{{ forloop.index }}" class="input-label">{{ label }}</label>
          </li>
        {% endfor %}
      </ul>
    </div>
  </div>
  <div class="col col-100 col-x1-50">
    <div class="box-secondary box-padding">
      <ul class="input-list">
        {% for label in page.labels %}
          <li class="input-item">
            <input id="checkbox-dark-{{ forloop.index }}" name="checkbox-list" type="checkbox" class="input input-checkbox" {% if forloop.index == 1 %}checked{% endif %} />
            <label for="checkbox-dark-{{ forloop.index }}" class="input-label">{{ label }}</label>
          </li>
        {% endfor %}
      </ul>
    </div>
  </div>
</div>
```html
<ul class="input-list">
  <li class="input-item">
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

---

## Checkbox Switches
<p class="text-light margin-bottom-md">Switches are useful when the user has a choice to toggle on and off. Note: For the best UX, please make sure that the switch saves immediately each time it changes state.</p>

<div class="box box-xs margin-bottom-sm padding-top-md padding-bottom-md padding-left-sm padding-right-sm padding-left-x1-lg padding-right-x1-lg">
  <div class="col-container-nowrap">
    <div class="components-checkboxes-switch-col col col-100 text-light text-overflow-ellipsis">Praesent commodo cursus magna, vel scelerisque aenean eu leo quam pellentesque ornare sem lacinia quam.</div>
    <div class="col margin-left-sm">
      <input type="checkbox" class="input input-switch" checked />
    </div>
  </div>
</div>
<div class="box-secondary box-xs padding-top-md padding-bottom-md padding-left-sm padding-right-sm padding-left-x1-lg padding-right-x1-lg">
  <div class="col-container-nowrap">
    <div class="components-checkboxes-switch-col col col-100 text-light text-overflow-ellipsis">Praesent commodo cursus magna, vel scelerisque aenean eu leo quam pellentesque ornare sem lacinia quam.</div>
    <div class="col margin-left-sm">
      <input type="checkbox" class="input input-switch" />
    </div>
  </div>
</div>
```html
<input type="checkbox" class="input input-switch" />
```

---

## Secondary Checkbox Switches
<p class="text-light margin-bottom-md">Useful when you don't need to draw attention to the bright-red, off state.</p>

<div class="box box-xs margin-bottom-sm padding-top-md padding-bottom-md padding-left-sm padding-right-sm padding-left-x1-lg padding-right-x1-lg">
  <div class="col-container-nowrap">
    <div class="components-checkboxes-switch-col col col-100 text-light text-overflow-ellipsis">Praesent commodo cursus magna, vel scelerisque aenean eu leo quam pellentesque ornare sem lacinia quam.</div>
    <div class="col margin-left-sm">
      <input type="checkbox" class="input input-switch-secondary" checked />
    </div>
  </div>
</div>
<div class="box-secondary box-xs padding-top-md padding-bottom-md padding-left-sm padding-right-sm padding-left-x1-lg padding-right-x1-lg">
  <div class="col-container-nowrap">
    <div class="components-checkboxes-switch-col col col-100 text-light text-overflow-ellipsis">Praesent commodo cursus magna, vel scelerisque aenean eu leo quam pellentesque ornare sem lacinia quam.</div>
    <div class="col margin-left-sm">
      <input type="checkbox" class="input input-switch-secondary" />
    </div>
  </div>
</div>
```html
<input type="checkbox" class="input input-switch-secondary" />
```

---

## Small Checkbox Switches
<p class="text-light margin-bottom-md">Useful when you want to show checkboxes inline next to a text label.</p>
<div>
  <input id="small-switch-off" type="checkbox" class="input input-switch input-switch-sm align-middle" />
  <label for="small-switch-off" class="text-sm text-light margin-left-xxs medium margin-right-md">Checkbox Switch Off</label>

  <input id="small-switch-on" type="checkbox" class="input input-switch input-switch-sm align-middle" checked />
  <label for="small-switch-on" class="text-sm text-light margin-left-xxs medium">Checkbox Switch On</label>
</div>
```html
<input type="checkbox" class="input input-switch input-switch-sm" />
```
