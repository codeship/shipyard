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

<div class="modal-container display-none" modal="example">
  <div class="modal" role="dialog">
    <div class="modal-content">
      <div class="modal-title">
        <h1>Modal Title</h1>
      </div>
      <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
      <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
      <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
      <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
      <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
      <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae elit libero, a pharetra augue.</p>
    </div>
    <div class="modal-ctas">
      <button class="btn btn-primary btn-sm btn-x1-md" modal-close>Save & Close</button>
      <button class="btn btn-secondary btn-sm btn-x1-md margin-left-xxs margin-left-x1-xs" modal-close>Cancel</button>
    </div>
  </div>
</div>
