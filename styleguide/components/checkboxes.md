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
Useful when you want to group a series of checkboxes together on a single line.
{: .section-description }

<ul class="input-list mb-30">
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
Useful when you want to group a series of checkboxes together in a list (stacked by default).
{: .section-description }

<div class="col-container mb-15 sm:mb-30">
  <div class="col col-100 sm:col-50 mb-15 sm:mb-0">
    <div class="rounded bg-white p-10 sm:p-15 md:p-20 lg:p-30">
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
  <div class="col col-100 sm:col-50">
    <div class="box-secondary p-10 sm:p-15 md:p-20 lg:p-30">
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
Useful when the checkboxes are displayed on a dark background.
{: .section-description }

<div class="box-secondary p-10 sm:p-15 md:p-20 lg:p-30 bg-gray-darker">
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

## Caution Checkbox Lists
Useful when you want to the user to proceed with caution about the choices they're making.
{: .section-description }

<ul class="input-list">
  {% for label in page.labels %}
    <li class="input-item">
      <input id="checkbox-caution-{{ forloop.index }}" name="checkbox-list" type="checkbox" class="input input-checkbox input-checkbox-caution" {% if forloop.index == 1 %}checked{% endif %} />
      <label for="checkbox-caution-{{ forloop.index }}" class="input-label">{{ label }}</label>
    </li>
  {% endfor %}
</ul>

```html
<ul class="input-list">
  <li class="input-item">
    <input id="checkbox-id" name="checkbox-name" type="checkbox" class="input input-checkbox input-checkbox-caution" checked />
    <label for="checkbox-id" class="input-label">Checkbox Label</label>
  </li>
</ul>
```

---

## Checkboxes Nested in Buttons
{: .mb-20 }

<button class="btn btn-secondary mr-10 mb-10">
  <input type="checkbox" class="input input-checkbox mr-5" />
  Unchecked
</button>
<button class="btn btn-secondary mr-10 mb-10">
  <input type="checkbox" class="input input-checkbox mr-5" checked />
  Checked
</button>
<button class="btn btn-cta mr-10 mb-10">
  <input type="checkbox" class="input input-checkbox input-checkbox-inverse mr-5" />
  Inverse Unchecked
</button>
<button class="btn btn-cta mr-10 mb-10">
  <input type="checkbox" class="input input-checkbox input-checkbox-inverse mr-5" checked />
  Inverse Checked
</button>

```html
<!-- Secondary button with a checkbox in the unchecked state. -->
<button class="btn btn-secondary">
  <input type="checkbox" class="input input-checkbox mr-5" />
  Button Text
</button>

<!-- CTA button with a checkbox in the checked state. -->
<button class="btn btn-cta">
  <input type="checkbox" class="input input-checkbox input-checkbox-inverse mr-5" checked />
  Button Text
</button>
```

---

## Checkbox-Switches
Switches are useful when the user has a choice to toggle on and off. Note: For the best UX, please make sure that the switch saves immediately each time it changes state.
{: .section-description }

<div class="box h-60 mb-15 pt-20 pb-20 pl-15 pr-15 sm:pl-30 sm:pr-30">
  <div class="col-container-nowrap">
    <div class="components-checkboxes-switch-col col col-100 text-light text-overflow-ellipsis">Praesent commodo cursus magna, vel scelerisque aenean eu leo quam pellentesque ornare sem lacinia quam.</div>
    <div class="col ml-15">
      <input type="checkbox" class="input input-switch" checked />
    </div>
  </div>
</div>
<div class="box-secondary h-60 pt-20 pb-20 pl-15 pr-15 sm:pl-30 sm:pr-30">
  <div class="col-container-nowrap">
    <div class="components-checkboxes-switch-col col col-100 text-light text-overflow-ellipsis">Praesent commodo cursus magna, vel scelerisque aenean eu leo quam pellentesque ornare sem lacinia quam.</div>
    <div class="col ml-15">
      <input type="checkbox" class="input input-switch" />
    </div>
  </div>
</div>

```html
<input type="checkbox" class="input input-switch" />
```

---

## Secondary Checkbox-Switches
Useful when you don't need to draw attention to the bright-red, off state.
{: .section-description }

<div class="box h-60 mb-15 pt-20 pb-20 pl-15 pr-15 sm:pl-30 sm:pr-30">
  <div class="col-container-nowrap">
    <div class="components-checkboxes-switch-col col col-100 text-light text-overflow-ellipsis">Praesent commodo cursus magna, vel scelerisque aenean eu leo quam pellentesque ornare sem lacinia quam.</div>
    <div class="col ml-15">
      <input type="checkbox" class="input input-switch-secondary" checked />
    </div>
  </div>
</div>
<div class="box-secondary h-60 pt-20 pb-20 pl-15 pr-15 sm:pl-30 sm:pr-30">
  <div class="col-container-nowrap">
    <div class="components-checkboxes-switch-col col col-100 text-light text-overflow-ellipsis">Praesent commodo cursus magna, vel scelerisque aenean eu leo quam pellentesque ornare sem lacinia quam.</div>
    <div class="col ml-15">
      <input type="checkbox" class="input input-switch-secondary" />
    </div>
  </div>
</div>
```html
<input type="checkbox" class="input input-switch-secondary" />
```

---

## Warning Checkbox-Switches
Useful to communicate that your object is only partially connected, and it needs additional attention.
{: .section-description }

<div class="box h-60 mb-15 pt-20 pb-20 pl-15 pr-15 sm:pl-30 sm:pr-30">
  <div class="col-container-nowrap">
    <div class="components-checkboxes-switch-col col col-100 text-light text-overflow-ellipsis">Praesent commodo cursus magna, vel scelerisque aenean eu leo quam pellentesque ornare sem lacinia quam.</div>
    <div class="col ml-15">
      <input type="checkbox" class="input input-switch-secondary input-switch-warning" checked />
    </div>
  </div>
</div>
<div class="box-secondary h-60 pt-20 pb-20 pl-15 pr-15 sm:pl-30 sm:pr-30">
  <div class="col-container-nowrap">
    <div class="components-checkboxes-switch-col col col-100 text-light text-overflow-ellipsis">Praesent commodo cursus magna, vel scelerisque aenean eu leo quam pellentesque ornare sem lacinia quam.</div>
    <div class="col ml-15">
      <input type="checkbox" class="input input-switch-secondary input-switch-warning" />
    </div>
  </div>
</div>
```html
<input type="checkbox" class="input input-switch-secondary input-switch-warning" />
```

---

## Checkbox-Switch Sizes `.{ screen }-input-switch-{ sm..xl }`
Each size can be used or altered at any breakpoint.
{: .section-description }

<ul class="input-list">
  <li class="input-item">
    <input id="small-switch-on-sm" type="checkbox" class="input input-switch input-switch-sm align-middle" checked />
    <label for="small-switch-on-sm" class="text-sm text-light ml-5 medium">Small</label>
  </li>
  <li class="input-item">
    <input id="small-switch-on-md" type="checkbox" class="input input-switch align-middle" checked />
    <label for="small-switch-on-md" class="text-sm text-light ml-5 medium">Medium (Default)</label>
  </li>
  <li class="input-item">
    <input id="small-switch-on-lg" type="checkbox" class="input input-switch input-switch-lg align-middle" checked />
    <label for="small-switch-on-lg" class="text-sm text-light ml-5 medium">Large</label>
  </li>
  <li class="input-item">
    <input id="small-switch-on-xl" type="checkbox" class="input input-switch input-switch-xl align-middle" checked />
    <label for="small-switch-on-xl" class="text-sm text-light ml-5 medium">X-Large</label>
  </li>
</ul>

```html
<!-- Input-Switch: Small -->
<input type="checkbox" class="input input-switch input-switch-sm" />

<!-- Input-Switch: Medium (Default) -->
<input type="checkbox" class="input input-switch" />

<!-- Input-Switch: Large -->
<input type="checkbox" class="input input-switch input-switch-lg" />

<!-- Input-Switch: X-Large -->
<input type="checkbox" class="input input-switch input-switch-xl" />
```
