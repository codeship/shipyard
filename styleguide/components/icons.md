---
title: Shipyard Icons
description: Shipyard comes with several default icons that you're welcome to use on any project. Each icon has been designed on a pixel grid at the small size possible, but can be scaled up to any size you like simply by changing the `width` and `height` in the CSS.
---

{% include page-heading.html page=page %}

---

### Miscellaneous Icons
<p class="text-light margin-bottom-sm">Something awesome</p>

{% icon :plus %}
{% icon :restart %}
{% icon :gear %}
{% icon :lock %}
{% icon :tag %}
{% icon :x %}
{% icon :arrow_down %}

---

### Social Icons
{% icon :bitbucket %}
{% icon :campfire_color %}
{% icon :codeship %}
{% icon :email_color %}
{% icon :flowdock_color %}
{% icon :github %}
{% icon :gitlab %}
{% icon :grove_color %}
{% icon :hipchat %}
{% icon :hipchat_color %}
{% icon :slack %}
{% icon :slack_color %}
{% icon :webhook %}
{% icon :webhook_color %}

---

### Multi-color Icons
<p class="text-light margin-bottom-sm">If you need to style several paths inside of the icon, it's important to make sure you use the *injected* version of the icon.</p>
{% icon 'email-color', class: 'icon-xl' %}

---

### Icon Sizes
{% icon :plus, class: 'icon-xs' %}
{% icon :plus, class: 'icon-sm' %}
{% icon :plus, class: 'icon-md' %}
{% icon :plus, class: 'icon-lg' %}
{% icon :plus, class: 'icon-xl' %}
