---
title: Shipyard Boxes
description: Boxes should be used to grab a draw attention to specific groups of content, and are most useful to linked content. By default, all boxes need to have the base class of `.box` in order to function properly.
box_sizes: [xxs, xs, sm, md, lg, xl, xxl]
---

{% include page-heading.html page=page %}

---

### Default `.box`
Useful when needing to draw extra attention to a particular group of content.
{: .section-description }

{% box %}
  <p>Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
{% endbox %}

---

### Padded `.box-padding`
Useful when needing to draw extra attention to a particular group of content.
{: .section-description }

{% box :padding %}
  <p>Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
{% endbox %}

---

### Linked `.box-link`
Useful when linking important components to another page or another group of content.
{: .section-description }

{% box :link %}
  <p>Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
{% endbox %}

---

### Linked & Active `.box-link-active`
Useful when linking important components to another page or another group of content.
{: .section-description }

{% box :link, :link_active %}
  <p>Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
{% endbox %}

---

### Linked & Selected `.box-link-selected`
Useful when highlighting a linked box that's been selected by the user.
{: .section-description }

{% box :link, :link_selected %}
  <p>Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
{% endbox %}

---

### Secondary `.box-secondary`
Useful when connecting secondary information to the default box styles.
{: .section-description }

{% box :secondary %}
  <p>Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
{% endbox %}


---

### Box Sizes `.box-[{{ page.box_sizes | join: ', ' }}]`
Useful when you need to create boxes with fixed heights. Note: The <a href="{{ site.baseurl }}/utilities/responsive">responsive utility classes</a> can also be applied to each box size.
{: .section-description }

{% for size in page.box_sizes %}
  <div class="box box-{{ size }} margin-top-md">
    <strong class="center text-lighter text-sm">.box-{{ size }}</strong>
  </div>
{% endfor %}

---

### Rounded `.box-rounded`
Useful when you need a box with rounded corners.
{: .section-description }

{% for size in page.box_sizes %}
  <div class="box box-rounded box-{{ size }} margin-top-md">
    <strong class="center text-lighter text-sm">.box-{{ size }}</strong>
  </div>
{% endfor %}
