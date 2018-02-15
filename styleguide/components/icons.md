---
title: Shipyard Icons
description: Shipyard comes with several default icons that you're welcome to use on any project. Each icon has been designed on a pixel grid at the small size possible, but can be scaled up to any size you like simply by changing the `width` and `height` in the CSS.
sass_file: shipyard/components/_icons
---

{% include page-heading.html page=page %}

---

### Common Icons
The following icons are the most frequently used in just about any application.
{: .section-description }

<ul class="icon-list col-container">
  {% iconitem :plus, class: 'center' %}
  {% iconitem :restart, class: 'center' %}
  {% iconitem :gear, class: 'center' %}
  {% iconitem :lock, class: 'center' %}
  {% iconitem :card, class: 'center' %}
  {% iconitem :tag, class: 'center' %}
  {% iconitem :x, class: 'center' %}
  {% iconitem :arrow_up, class: 'center' %}
  {% iconitem :arrow_down, class: 'center' %}
  {% iconitem :arrow_left, class: 'center' %}
  {% iconitem :arrow_right, class: 'center' %}
  {% iconitem :check, class: 'center' %}
</ul>

---

### Brand Icons
If you need to style several paths inside of the icon, it's important to make sure you use the *injected* version of the icon.
{: .section-description }

<ul class="icon-list col-container">
  {% iconitem 'bitbucket-white', class: 'center icon-xl' %}
  {% iconitem 'bitbucket', class: 'center gray icon-xl' %}
  {% iconitem 'bitbucket-color', class: 'center icon-xl' %}
  {% iconitem :campfire_color, class: 'center icon-xl' %}
  {% iconitem :codeship, class: 'center icon-xl' %}
  {% iconitem :email_color, class: 'center icon-xl' %}
  {% iconitem :flowdock_color, class: 'center icon-xl' %}
  {% iconitem :github, class: 'center icon-xl' %}
  {% iconitem :gitlab, class: 'center icon-xl' %}
  {% iconitem :gitlab_color, class: 'center icon-xl' %}
  {% iconitem :google_app_engine, class: 'center icon-xl' %}
  {% iconitem :grove_color, class: 'center icon-xl' %}
  {% iconitem :hipchat, class: 'center icon-xl' %}
  {% iconitem :hipchat_color, class: 'center icon-xl' %}
  {% iconitem :slack, class: 'center icon-xl' %}
  {% iconitem :slack_color, class: 'center icon-xl' %}
  {% iconitem :webhook, class: 'center icon-xl' %}
  {% iconitem :webhook_color, class: 'center icon-xl' %}
</ul>

---

### Multi-color Icons
If you need to style several paths inside of the icon, it's important to make sure you use the *injected* version of the icon.
{: .section-description }

<ul class="icon-list col-container">
  {% iconitem 'email-color', class: 'icon-xl center' %}
</ul>
```erb
<%= icon 'email-color' %>
```

---

### Icon Sizes
The icon size utility classes can be applied to any icon, and are useful when you want to override the default icon size.
{: .section-description }

<ul class="icon-list col-container">
  {% iconitem :gear, class: 'center icon-xxs' %}
  {% iconitem :gear, class: 'center icon-xs' %}
  {% iconitem :gear, class: 'center icon-sm' %}
  {% iconitem :gear, class: 'center icon-md' %}
  {% iconitem :gear, class: 'center icon-lg' %}
  {% iconitem :gear, class: 'center icon-xl' %}
</ul>

```erb
<%= icon :gear, class: 'icon-xxs' %>
<%= icon :gear, class: 'icon-xs' %>
<%= icon :gear, class: 'icon-sm' %>
<%= icon :gear, class: 'icon-md' %>
<%= icon :gear, class: 'icon-lg' %>
<%= icon :gear, class: 'icon-xl' %>
```

---

### Centered Icons
One of the most common problems when using an icon is that doesn't line up with the text content next to it. Don't worry though, we've got you covered — simply apply the `.align-middle` class to any icon to fix this issue.
{: .section-description }

<div class="mb-30">
  <button class="btn btn-secondary">{% icon :plus, class: 'align-middle icon-sm mr-5' %} Create</button>
</div>

```erb
<button class="btn btn-secondary">
  <%= icon :plus, class: 'align-middle icon-sm' %>
  Create
</button>
```

---

{% include css-stats.html %}
