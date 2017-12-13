---
title: Shipyard Buttons
sass_file: shipyard/components/_buttons
---

{% include page-heading.html page=page %}

---

## Common Buttons
Shipyard gives you more buttons than you can shake a stick at.
{: .section-description }

<div class="margin-bottom-md">
  {% btn Default, :default, class: 'margin-right-xs' %}
  {% btn Primary, :primary, class: 'margin-right-xs' %}
  {% btn Primary Dark, :primary_dark, class: 'margin-right-xs' %}
  {% btn CTA, :cta, class: 'margin-right-xs' %}
  {% btn Caution, :caution, class: 'margin-right-xs' %}
  {% btn Disabled, :disabled, class: 'margin-right-xs' %}
  {% btn Link, :link %}
</div>

```html
{% btn Default %}
{% btn Primary, :primary %}
{% btn Primary Dark, :primary_dark %}
{% btn CTA, :cta %}
{% btn Caution, :caution %}
{% btn Disabled, :disabled %}
{% btn Link, :link %}
```

---

## Secondary Buttons
Useful when you have a button on a darker background.
{: .section-description }

<div class="margin-bottom-md">
  {% btn Secondary, :secondary, class: 'margin-right-xs' %}
  {% btn Secondary Dark, :secondary_dark, class: 'margin-right-xs' %}
  {% btn Secondary Link, :secondary_link %}
</div>

```html
{% btn Secondary, :secondary %}
{% btn Secondary Dark, :secondary_dark %}
{% btn Secondary Link, :secondary_link %}
```

---

## Inverse Buttons
Useful when you have a button on a darker background.
{: .section-description }

<div class="box-secondary box-padding bg-gray-dark margin-bottom-md">
  {% btn Inverse, :inverse, class: 'margin-right-xs' %}
  {% btn Inverse Secondary, :inverse_secondary %}
</div>

```html
{% btn Inverse, :inverse %}
{% btn Inverse Secondary, :inverse_secondary %}
```

---

## Rounded Buttons
Useful when you want a button with completely rounded corners.
{: .section-description }

<div class="margin-bottom-md">
  {% btn Default, :rounded, class: 'margin-right-xs' %}
  {% btn Primary, :primary :rounded, class: 'margin-right-xs' %}
  {% btn CTA, :cta :rounded, class: 'margin-right-xs' %}
  {% btn Caution, :caution :rounded, class: 'margin-right-xs' %}
  {% btn Secondary, :secondary :rounded %}
</div>

```html
{% btn Rounded, :rounded %}
```

---

## Loading Buttons
Useful when you have a button that triggers an asynchronous action.
{: .section-description }

<div class="margin-bottom-md">
  {% btn Default, :loading, class: 'margin-right-xs' %}
  {% btn Primary, :primary :loading, class: 'margin-right-xs' %}
  {% btn CTA, :cta :loading, class: 'margin-right-xs' %}
  {% btn Caution, :caution :loading, class: 'margin-right-xs' %}
  {% btn Secondary, :secondary :loading, class: 'margin-right-xs' %}
  {% btn Secondary Link, :secondary_link :loading, class: 'margin-right-xs' %}
</div>

```html
{% btn Default, :loading %}
```

---

### Full-Screen Buttons
Often really useful on mobile screens or in combination with other grids.
{: .section-description }

<div class="margin-bottom-md">
  {% btn Save Changes, :full %}
</div>

```html
{% btn Save Changes, :full %}
```

---

### Common Buttons Tags
The button classes can be applied to any type of html tag to achieve the desired result. The most common examples being the `button`, `a`, and `input` tags as seen in the example below.
{: .section-description }

<div class="margin-bottom-lg">
  {% btn Button %}
  <a href="#" class="btn">Link</a>
  <input type="button" class="btn" value="Input" />
  <input type="submit" class="btn" value="Submit" />
  <input type="reset" class="btn" value="Reset" />
</div>

```html
{% btn Button %}
<a href="#" class="btn">Link</a>
<input type="button" class="btn" value="Input" />
<input type="submit" class="btn" value="Input" />
<input type="reset" class="btn" value="Input" />
```

---

## Button Sizes (default: md)

<div class="box-padding align-center">
  {% btn XX-Small, :xxs %}
  {% btn X-Small, :xs %}
  {% btn Small, :sm %}
  {% btn Medium, :md %}
  {% btn Large, :lg %}
  {% btn X-Large, :xl %}
</div>

## XX-Small, Responsive Buttons
<div class="box-padding align-center">
  {% btn All Screens, :xxs %}
  {% btn Tablets, :x1_xxs %}
  {% btn Laptops, :x2_xxs %}
  {% btn Wide Screens, :x3_xxs %}
  {% btn Giant Screens, :x4_xxs %}
</div>

## X-Small, Responsive Buttons
<div class="box-padding align-center">
  {% btn All Screens, :xs %}
  {% btn Tablets, :x1_xs %}
  {% btn Laptops, :x2_xs %}
  {% btn Wide Screens, :x3_xs %}
  {% btn Giant Screens, :x4_xs %}
</div>

## Small, Responsive Buttons
<div class="box-padding align-center">
  {% btn All Screens, :sm %}
  {% btn Tablets, :x1_sm %}
  {% btn Laptops, :x2_sm %}
  {% btn Wide Screens, :x3_sm %}
  {% btn Giant Screens, :x4_sm %}
</div>

## Medium, Responsive Buttons (Default Size)
<div class="box-padding align-center">
  {% btn All Screens %}
  {% btn Tablets, :sm :x1_md %}
  {% btn Laptops, :sm :x2_md %}
  {% btn Wide Screens, :sm :x3_md %}
  {% btn Giant Screens, :sm :x4_md %}
</div>

---

{% include css-stats.html %}
