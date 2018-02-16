---
title: Shipyard Forms
---

{% include page-heading.html page=page %}

---

<div class="col-container input-group">
  <div class="col col-100 col-x1-33 mb-15 mb-x1-0">
    <label class="label">Textbox</label>
    <input type="text" class="input input-text" placeholder=".input-text" />
  </div>
  <div class="col col-100 col-x1-33 mb-15 mb-x1-0">
    <label class="label">Textbox Read-Only</label>
    <input type="text" class="input input-text input-readonly" placeholder=".input-readonly" value="copy-paste-me" readonly />
  </div>
  <div class="col col-100 col-x1-33 mb-15 mb-x1-0">
    <label class="label">Textbox Disabled</label>
    <input type="text" class="input input-text" placeholder=".input-text" disabled />
  </div>
</div>
```html
<!-- Default Textbox -->
<input type="text" class="input input-text" />

<!-- Read-Only Textbox -->
<input type="text" class="input input-text input-readonly" readonly />

<!-- Disabled Textbox -->
<input type="text" class="input input-text" disabled />
```

---

## Connected Textboxes

<div class="input-group">
  <input type="text" class="input input-text input-text-connect-top" placeholder=".input-text-connect-top" />
  <input type="text" class="input input-text input-text-connect-middle" placeholder=".input-text-connect-middle" />
  <input type="text" class="input input-text input-text-connect-bottom" placeholder=".input-text-connect-bottom" />
</div>

```html
<input type="text" class="input input-text input-text-connect-top" />
<input type="text" class="input input-text input-text-connect-middle" />
<input type="text" class="input input-text input-text-connect-bottom" />
```

---

<div class="col-container input-group">
  <div class="col">
    <label class="label">Select Boxes</label>
    <div class="input-select-container">
      <select class="input input-select">
        <option class="input-option-placeholder">.input-select</option>
        {% for i in (1..10) %}
          <option>{{ i }}</option>
        {% endfor %}
      </select>
    </div>
  </div>
  <div class="col">
    <label class="label">Select Box Disabled</label>
    <div class="input-select-container input-select-container-disabled">
      <select class="input input-select" disabled>
        <option class="input-option-placeholder">.input-select</option>
        {% for i in (1..10) %}
          <option>{{ i }}</option>
        {% endfor %}
      </select>
    </div>
  </div>
</div>

---

<div class="input-group">
  <label class="label">Textbox</label>
  <p class="label-note">Some critically important notes about this field.</p>
  <input type="text" class="input input-text" placeholder=".input .input-text" />
</div>

---

<h2 class="mb-10">Input Boxes</h2>
<div class="input-box">
  <input type="text" class="input input-text" placeholder=".input .input-text" />
</div>

---

<h2 class="mb-10">Required Fields</h2>
<div class="col-container">
  <div class="col col-50">
    <div class="input-required">
      <input type="text" class="input input-text" placeholder=".input .input-text" />
    </div>
  </div>
  <div class="col col-50">
    <div class="input-required">
      <div class="input-select-container">
        <select class="input input-select">
          <option class="input-option-placeholder">.input-select</option>
          {% for i in (1..10) %}
            <option>{{ i }}</option>
          {% endfor %}
        </select>
      </div>
    </div>
  </div>
</div>

---

<h2 class="mb-10">Form Errors</h2>
<div class="form-error-container">
  <ul class="form-error-list">
    <li class="form-error-item">
      <span class="form-error-text">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</span>
    </li>
    <li class="form-error-item">
      <span class="form-error-text">Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</span>
    </li>
    <li class="form-error-item">
      <span class="form-error-text">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</span>
    </li>
  </ul>
</div>
<div class="col-container mt-20 mb-20">
  <div class="col col-50 input-error">
    <label class="label">Required Select Box</label>
    <div class="input-required">
      <div class="input-select-container">
        <select class="input input-select">
          <option class="input-option-placeholder">.input-select</option>
          {% for i in (1..10) %}
            <option>{{ i }}</option>
          {% endfor %}
        </select>
      </div>
    </div>
  </div>
  <div class="col col-50 input-error">
    <label class="label">Required Textbox</label>
    <div class="input-required">
      <input type="text" class="input input-text" placeholder=".input .input-text" />
    </div>
  </div>
</div>
