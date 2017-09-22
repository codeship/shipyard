---
title: Shipyard Boxes
description: Boxes should be used to grab a draw attention to specific groups of content, and are most useful to linked content. By default, all boxes need to have the base class of `.box` in order to function properly.
box_sizes: [xxs, xs, sm, md, lg, xl]
---

{% include page-heading.html page=page %}

---

### Default `.box`
<p class="text-light margin-bottom-sm">Useful when needing to draw extra attention to a particular group of content.</p>

{% box %}
  <p>Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
{% endbox %}

---

### Padded `.box-padding`
<p class="text-light margin-bottom-sm">Useful when needing to draw extra attention to a particular group of content.</p>

{% box :padding %}
  <p>Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
{% endbox %}

---

### Linked `.box-link`
<p class="text-light margin-bottom-sm">Useful when linking important components to another page or another group of content.</p>

{% box :link, :padding %}
  <p>Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
{% endbox %}

---

### Secondary `.box-secondary`
<p class="text-light margin-bottom-sm">Useful when connecting secondary information to the default box styles.</p>

{% box :secondary, :padding %}
  <p>Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
{% endbox %}

---

### Box Sizes `.box-[{{ page.box_sizes | join: ', ' }}]`
<p class="text-light margin-bottom-sm">Useful when you need to create boxes with fixed heights. Note: The <a href="{{ site.baseurl }}/utilities/responsive">responsive utility classes</a> can also be applied to each box size.</p>

{% for size in page.box_sizes %}
  <div class="box box-{{ size }} margin-top-md">
    <strong class="center text-lighter text-sm">.box-{{ size }}</strong>
  </div>
{% endfor %}
