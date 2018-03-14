---
title: Shipyard Buttons
sass_file: shipyard/components/_buttons
---

{% include page-heading.html page=page %}

---

## Common Buttons
Shipyard gives you more buttons than you can shake a stick at.
{: .section-description }

<div class="mb-20">
  <button class="btn mr-10">Default</button>
  <button class="btn btn-primary mr-10">Primary</button>
  <button class="btn btn-primary-dark mr-10">Primary Dark</button>
  <button class="btn btn-cta mr-10">CTA</button>
  <button class="btn btn-caution mr-10">Caution</button>
  <button class="btn btn-disabled mr-10">Disabled</button>
  <button class="btn btn-link">Link</button>
</div>

```html
<button class="btn">Default</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-primary-dark">Primary Dark</button>
<button class="btn btn-cta">CTA</button>
<button class="btn btn-caution">Caution</button>
<button class="btn btn-disabled">Disabled</button>
<button class="btn btn-link">Link</button>
```

---

## Secondary Buttons
Useful when you have a button on a darker background.
{: .section-description }

<div class="mb-20">
  <button class="btn btn-secondary mr-10">Secondary</button>
  <button class="btn btn-secondary-dark mr-10">Secondary Dark</button>
  <button class="btn btn-secondary-link">Secondary Link</button>
</div>

```html
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-secondary-dark">Secondary Dark</button>
<button class="btn btn-secondary-link">Secondary Link</button>
```

---

## Inverse Buttons
Useful when you have a button on a darker background.
{: .section-description }

<div class="box-secondary box-padding bg-gray-dark mb-20">
  <button class="btn btn-inverse mr-10">Inverse</button>
  <button class="btn btn-inverse-secondary">Inverse Secondary</button>
</div>

```html
<button class="btn btn-inverse">Inverse</button>
<button class="btn btn-inverse-secondary">Inverse Secondary</button>
```

---

## Rounded Buttons
Rounded buttons utilize the [border-radius utility](/utilities/border-radius), and are useful when you want a button with completely rounded corners.
{: .section-description }

<div class="mb-20">
  <button class="btn rounded-pill mr-10">Default</button>
  <button class="btn btn-primary rounded-pill mr-10">Primary</button>
  <button class="btn btn-cta rounded-pill mr-10">CTA</button>
  <button class="btn btn-caution rounded-pill mr-10">Caution</button>
  <button class="btn btn-secondary rounded-pill">Secondary</button>
</div>

```html
<button class="btn rounded-pill">Rounded</button>
```

---

## Loading Buttons
Useful when you have a button that triggers an asynchronous action.
{: .section-description }

<div class="mb-20">
  <button class="btn btn-loading mr-10">Default</button>
  <button class="btn btn-primary btn-loading mr-10">Primary</button>
  <button class="btn btn-cta btn-loading mr-10">CTA</button>
  <button class="btn btn-caution btn-loading mr-10">Caution</button>
  <button class="btn btn-secondary btn-loading mr-10">Secondary</button>
  <button class="btn btn-secondary-link btn-loading">Secondary Link</button>
</div>

```html
<button class="btn btn-loading">Loading</button>
```

---

### Full-Screen Buttons
Often really useful on mobile screens or in combination with other grids.
{: .section-description }

<div class="mb-20">
  <button class="btn btn-full">Save Changes</button>
</div>

```html
<button class="btn btn-full">Save Changes</button>
```

---

### Common Buttons Tags
The button classes can be applied to any type of html tag to achieve the desired result. The most common examples being the `button`, `a`, and `input` tags as seen in the example below.
{: .section-description }

<div class="mb-30">
  <button class="btn">Button</button>
  <a href="#" class="btn">Link</a>
  <input type="button" class="btn" value="Input" />
  <input type="submit" class="btn" value="Submit" />
  <input type="reset" class="btn" value="Reset" />
</div>

```html
<button class="btn">Button</button>
<a href="#" class="btn">Link</a>
<input type="button" class="btn" value="Input" />
<input type="submit" class="btn" value="Input" />
<input type="reset" class="btn" value="Input" />
```

---

## Button Sizes (default: md)
<div class="box-padding align-center">
  <button class="btn btn-xxs">XX-Small</button>
  <button class="btn btn-xs">X-Small</button>
  <button class="btn btn-sm">Small</button>
  <button class="btn btn-md">Medium</button>
  <button class="btn btn-lg">Large</button>
  <button class="btn btn-xl">X-Large</button>
</div>

## XX-Small, Responsive Buttons
<div class="box-padding align-center">
  <button class="btn btn-xxs">All Screens</button>
  <button class="btn sm:btn-xxs">Tablets</button>
  <button class="btn md:btn-xxs">Laptops</button>
  <button class="btn lg:btn-xxs">Wide Screens</button>
  <button class="btn xl:btn-xxs">Giant Screens</button>
</div>

## X-Small, Responsive Buttons
<div class="box-padding align-center">
  <button class="btn btn-xs">All Screens</button>
  <button class="btn sm:btn-xs">Tablets</button>
  <button class="btn md:btn-xs">Laptops</button>
  <button class="btn lg:btn-xs">Wide Screens</button>
  <button class="btn xl:btn-xs">Giant Screens</button>
</div>

## Small, Responsive Buttons
<div class="box-padding align-center">
  <button class="btn btn-sm">All Screens</button>
  <button class="btn sm:btn-sm">Tablets</button>
  <button class="btn md:btn-sm">Laptops</button>
  <button class="btn lg:btn-sm">Wide Screens</button>
  <button class="btn xl:btn-sm">Giant Screens</button>
</div>

## Medium, Responsive Buttons (Default Size)
<div class="box-padding align-center">
  <button class="btn btn-md">All Screens</button>
  <button class="btn btn-sm sm:btn-md">Tablets</button>
  <button class="btn btn-sm md:btn-md">Laptops</button>
  <button class="btn btn-sm lg:btn-md">Wide Screens</button>
  <button class="btn btn-sm xl:btn-md">Giant Screens</button>
</div>

---

{% include css-stats.html %}
