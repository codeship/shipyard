---
title: Shipyard Icons
description: Shipyard comes with several default icons that you're welcome to use on any project. Each icon has been designed on a pixel grid at the small size possible, but can be scaled up to any size you like simply by changing the `width` and `height` in the CSS.
---

{% include page-heading.html page=page %}

---

### Common Icons
<p class="text-light margin-bottom-md" markdown="1">The following icons are the most frequently used in just about any application.</p>

<ul class="icon-list col-container">
  {% iconitem %}
    {% icon :plus, class: 'center' %}
  {% endiconitem %}

  {% iconitem %}
    {% icon :restart, class: 'center' %}
  {% endiconitem %}

  {% iconitem %}
    {% icon :gear, class: 'center' %}
  {% endiconitem %}

  {% iconitem %}
    {% icon :lock, class: 'center' %}
  {% endiconitem %}

  {% iconitem %}
    {% icon :tag, class: 'center' %}
  {% endiconitem %}

  {% iconitem %}
    {% icon :x, class: 'center' %}
  {% endiconitem %}

  {% iconitem %}
    {% icon :arrow_down, class: 'center' %}
  {% endiconitem %}
</ul>

---

### Brand Icons
<p class="text-light margin-bottom-md" markdown="1">If you need to style several paths inside of the icon, it's important to make sure you use the *injected* version of the icon.</p>

<ul class="icon-list col-container">
  {% iconitem %}
    {% icon :bitbucket, class: 'center' %}
  {% endiconitem %}

  {% iconitem %}
    {% icon :campfire_color, class: 'center' %}
  {% endiconitem %}

  {% iconitem %}
    {% icon :codeship, class: 'center' %}
  {% endiconitem %}

  {% iconitem %}
    {% icon :email_color, class: 'center' %}
  {% endiconitem %}

  {% iconitem %}
    {% icon :flowdock_color, class: 'center' %}
  {% endiconitem %}

  {% iconitem %}
    {% icon :github, class: 'center' %}
  {% endiconitem %}

  {% iconitem %}
    {% icon :gitlab, class: 'center' %}
  {% endiconitem %}

  {% iconitem %}
    {% icon :grove_color, class: 'center' %}
  {% endiconitem %}

  {% iconitem %}
    {% icon :hipchat, class: 'center' %}
  {% endiconitem %}

  {% iconitem %}
    {% icon :hipchat_color, class: 'center' %}
  {% endiconitem %}

  {% iconitem %}
    {% icon :slack, class: 'center' %}
  {% endiconitem %}

  {% iconitem %}
    {% icon :slack_color, class: 'center' %}
  {% endiconitem %}

  {% iconitem %}
    {% icon :webhook, class: 'center' %}
  {% endiconitem %}

  {% iconitem %}
    {% icon :webhook_color, class: 'center' %}
  {% endiconitem %}
</ul>

---

### Multi-color Icons
<p class="text-light margin-bottom-md" markdown="1">If you need to style several paths inside of the icon, it's important to make sure you use the *injected* version of the icon.</p>

<ul class="icon-list col-container">
  {% iconitem %}
    {% icon 'email-color', class: 'icon-xl center' %}
  {% endiconitem %}
</ul>
```html
<%= icon 'email-color' %>
```

---

### Icon Sizes
<p class="text-light margin-bottom-md">The icon size utility classes can be applied to any icon, and are useful when you want to override the default icon size.</p>

<ul class="icon-list col-container">
  {% iconitem %}
    {% icon :gear, class: 'center icon-xxs' %}
  {% endiconitem %}

  {% iconitem %}
    {% icon :gear, class: 'center icon-xs' %}
  {% endiconitem %}

  {% iconitem %}
    {% icon :gear, class: 'center icon-sm' %}
  {% endiconitem %}

  {% iconitem %}
    {% icon :gear, class: 'center icon-md' %}
  {% endiconitem %}

  {% iconitem %}
    {% icon :gear, class: 'center icon-lg' %}
  {% endiconitem %}

  {% iconitem %}
    {% icon :gear, class: 'center icon-xl' %}
  {% endiconitem %}
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
