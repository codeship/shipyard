---
title: Shipyard Modals
description: Modals are triggered by applying the following attribute to any button or link (e.g. `modal-trigger="login"`).
---

{% include page-heading.html page=page %}

---

<div class="col-container-x1-nowrap">
  <div class="col col-100">
    <h3 class="col-100">Building Modals</h3>
    <p class="text-light margin-bottom-sm">Useful when you need to draw attention to information that requires additional action.</p>
  </div>
  <div class="col">
    <button class="btn btn-sm btn-x1-md btn-secondary white-space-nowrap" modal-trigger="example">Demo Modal</button>
  </div>
</div>

```html
<div class="modal-container">
  <div class="modal" role="dialog">
    <div class="modal-content">
      <div class="modal-title">
        <!-- Modal Title -->
      </div>
      <!-- Modal Content -->
    </div>
    <div class="modal-ctas">
      {% btn Save, :primary %}
      {% btn Cancel, :secondary %}
    </div>
  </div>
</div>
```

{% include_relative _modal.html css_class="display-none" %}
