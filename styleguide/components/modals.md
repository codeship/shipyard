---
title: Shipyard Modals
description: Modals are triggered by applying the following attribute to any button or link (e.g. `modal-trigger="login"`).
---

{% include page-heading.html page=page %}

---

<div class="box-padding align-center">
  <button class="btn btn-secondary" modal-trigger="example">Trigger Modal</button>
</div>

<div class="modal-container display-none" modal="example">
  <div class="modal">
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

---

### Building Modals
```html
<div class="modal-container">
  <div class="modal">
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
