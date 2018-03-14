---
title: Shipyard Boxes
description: Boxes should be used to grab a draw attention to specific groups of content, and are most useful to linked content. By default, all boxes need to have the base class of `.box` in order to function properly.
sass_file: shipyard/components/_boxes
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

{% include css-stats.html %}
