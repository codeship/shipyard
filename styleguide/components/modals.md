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
      {% btn Submit, :primary %}
      <button class="btn btn-secondary margin-left-xs" shipyard="modal-close">Close</button>
    </div>
  </div>
</div>
