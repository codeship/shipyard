---
title: Shipyard Modals
description: Modals are triggered by applying the following attribute to any button or link (e.g. `modal-trigger="login"`).
sass_file: shipyard/components/_modals
---

{% include page-heading.html page=page %}

---

<div class="sm:col-container-nowrap">
  <div class="col col-100">
    <h3 class="col-100">Building Modals</h3>
    <p class="text-light mb-15">Useful when you need to draw attention to information that requires additional action.</p>
  </div>
  <div class="col">
    <button class="btn btn-sm sm:btn-md btn-secondary white-space-nowrap" modal-trigger="example">Demo Modal</button>
  </div>
</div>

```html
<div class="modal-container z-200">
  <div class="modal" role="dialog">
    <div class="modal-content">
      <div class="modal-title">
        <!-- Modal Title -->
      </div>
      <!-- Modal Content -->
    </div>
    <div class="modal-ctas">
      <button class="btn btn-primary">Save</button>
      <button class="btn btn-secondary">Cancel</button>
    </div>
  </div>
</div>
```

{% note :warning %}
  <p markdown="1">
    By default, modals don't have a `z-index` property applied so it is recommended to use the [z-index utility classes]({{ site.baseurl }}/utilities/z-index) on the `modal-container` element. We've chosen the highest possible value (i.e. `.z-200`) for the purposes of our documentation.
  </p>
{% endnote %}

---

## CSS Output
Here's the raw CSS output if you'd like a peak under the hood.
{: .section-description }

```css
{% sass_output -%}
```

---

{% include css-stats.html %}
{% include_relative _modal.html css_class="hidden" %}
