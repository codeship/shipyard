---
title: Shipyard Icons
description: Shipyard comes with several default icons that you're welcome to use on any project. Each icon has been designed on a pixel grid at the small size possible, but can be scaled up to any size you like simply by changing the `width` and `height` in the CSS.
---

{% include page-heading.html page=page %}

---

### Common Icons
<p class="text-light margin-bottom-md" markdown="1">The following icons are the most frequently used in just about any application.</p>

<ul class="icon-list col-container">
  {% iconitem :plus, class: 'center' %}
  {% iconitem :restart, class: 'center' %}
  {% iconitem :gear, class: 'center' %}
  {% iconitem :lock, class: 'center' %}
  {% iconitem :card, class: 'center' %}
  {% iconitem :tag, class: 'center' %}
  {% iconitem :x, class: 'center' %}
  {% iconitem :arrow_down, class: 'center' %}
</ul>

---

### Brand Icons
<p class="text-light margin-bottom-md" markdown="1">If you need to style several paths inside of the icon, it's important to make sure you use the *injected* version of the icon.</p>

<ul class="icon-list col-container">
  {% iconitem :bitbucket, class: 'center' %}
  {% iconitem :campfire_color, class: 'center' %}
  {% iconitem :codeship, class: 'center' %}
  {% iconitem :email_color, class: 'center' %}
  {% iconitem :flowdock_color, class: 'center' %}
  {% iconitem :github, class: 'center' %}
  {% iconitem :gitlab, class: 'center' %}
  {% iconitem :grove_color, class: 'center' %}
  {% iconitem :hipchat, class: 'center' %}
  {% iconitem :hipchat_color, class: 'center' %}
  {% iconitem :slack, class: 'center' %}
  {% iconitem :slack_color, class: 'center' %}
  {% iconitem :webhook, class: 'center' %}
  {% iconitem :webhook_color, class: 'center' %}
</ul>

---

### Multi-color Icons
<p class="text-light margin-bottom-md" markdown="1">If you need to style several paths inside of the icon, it's important to make sure you use the *injected* version of the icon.</p>

<ul class="icon-list col-container">
  {% iconitem 'email-color', class: 'icon-xl center' %}
</ul>
```html
<%= icon 'email-color' %>
```

---

### Icon Sizes
<p class="text-light margin-bottom-md">The icon size utility classes can be applied to any icon, and are useful when you want to override the default icon size.</p>

<ul class="icon-list col-container">
  {% iconitem :gear, class: 'center icon-xxs' %}
  {% iconitem :gear, class: 'center icon-xs' %}
  {% iconitem :gear, class: 'center icon-sm' %}
  {% iconitem :gear, class: 'center icon-md' %}
  {% iconitem :gear, class: 'center icon-lg' %}
  {% iconitem :gear, class: 'center icon-xl' %}
</ul>

```html
<%= icon :gear, class: 'icon-xxs' %>
<%= icon :gear, class: 'icon-xs' %>
<%= icon :gear, class: 'icon-sm' %>
<%= icon :gear, class: 'icon-md' %>
<%= icon :gear, class: 'icon-lg' %>
<%= icon :gear, class: 'icon-xl' %>
```

---

### Centered Icons
<p class="text-light margin-bottom-md" markdown="1">One of the most common problems when using an icon is that doesn't line up with the text content next to it. Don't worry though, we've got you covered — simply apply the `.icon-center` class to any icon to fix this issue.</p>

<div class="margin-bottom-lg">
  <button class="btn btn-secondary">{% icon :plus, class: 'icon-center icon-sm margin-right-xxs' %} Create</button>
</div>

```html
<button class="btn btn-secondary">
  <%= icon :plus, class: 'icon-center icon-sm' %>
  Create
</button>
```
