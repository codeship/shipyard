---
title: Shipyard Statuses
sass_file: shipyard/components/_statuses
statuses: [skipped, waiting, running, success, idle, error, fail]
---

{% include page-heading.html page=page %}

---

### Status Dots `.status-xs`
Useful in tight spaces where it's still important to show status, but not important enough to compete for attention with other elements on the page.
{: .section-description }

<div class="mb-25">
  {% for status in page.statuses -%}
    <button class="btn btn-secondary btn-xs btn-rounded mr-5">
      <span class="status status-xs status-{{ status }}"></span>
      <span class="text-sm medium ml-xs text-{{ status }}">{{ status | capitalize }}</span>
    </button>
  {% endfor %}
</div>

```html
{%- for status in page.statuses %}
<span class="status status-xs status-{{ status }}"></span>
<span class="text-{{ status }}">{{ status }}</span>
{% endfor -%}
```

---

### Status Circles `.status-sm`
Useful when next to standard text where where it's important to show the status of a particular object.
{: .section-description }

{% for status in page.statuses -%}
  <button class="btn btn-secondary btn-sm btn-rounded mr-5">
    <span class="status status-{{ status }} status-sm"></span>
    <span class="text-md medium ml-xs text-{{ status }}">{{ status | capitalize }}</span>
  </button>
{% endfor %}

```html
{%- for status in page.statuses %}
<span class="status status-sm status-{{ status }}"></span>
<span class="text-{{ status }}">{{ status }}</span>
{% endfor -%}
```

---

### Status Icons `.status-md`
Useful when next to standard text where where it's important to show the status of a particular object.
{: .section-description }

<button tooltip="skipped" class="mr-5">
  <span class="status status-skipped status-md">{% icon :skipped, prefix: 'status-md', class: 'status-icon' %}</span>
</button>
<button tooltip="waiting" class="mr-5">
  <span class="status status-waiting status-md">{% icon 'waiting', prefix: 'status-md', class: 'status-icon' %}</span>
</button>
<button tooltip="running" class="mr-5">
  <span class="status status-running status-md">{% icon :running, prefix: 'status-md', class: 'status-icon' %}</span>
</button>
<button tooltip="success" class="mr-5">
  <span class="status status-success status-md">{% icon :success, prefix: 'status-md', class: 'status-icon' %}</span>
</button>
<button tooltip="idle" class="mr-5">
  <span class="status status-idle status-md">{% icon :idle, prefix: 'status-md', class: 'status-icon' %}</span>
</button>
<button tooltip="error" class="mr-5">
  <span class="status status-error status-md">{% icon :error, prefix: 'status-md', class: 'status-icon' %}</span>
</button>
<button tooltip="fail" class="mr-5">
  <span class="status status-fail status-md">{% icon :fail, prefix: 'status-md', class: 'status-icon' %}</span>
</button>

```erb
{%- for status in page.statuses %}
<span class="status status-md status-{{ status }}">
  <%= icon :{{ status }}, prefix: 'status-md', class: 'status-icon' %>
</span>
{% endfor -%}
```

---

### Large Status Icons `.status-lg`
Useful when next to standard text where where it's important to show the status of a particular object.
{: .section-description }

<button tooltip="skipped" class="mr-5">
  <span class="status status-skipped status-lg">{% icon :skipped, prefix: 'status-lg', class: 'status-icon' %}</span>
</button>
<button tooltip="waiting" class="mr-5">
  <span class="status status-waiting status-lg">{% icon 'waiting', prefix: 'status-lg', class: 'status-icon' %}</span>
</button>
<button tooltip="running" class="mr-5">
  <span class="status status-running status-lg">{% icon :running, prefix: 'status-lg', class: 'status-icon' %}</span>
</button>
<button tooltip="success" class="mr-5">
  <span class="status status-success status-lg">{% icon :success, prefix: 'status-lg', class: 'status-icon' %}</span>
</button>
<button tooltip="idle" class="mr-5">
  <span class="status status-idle status-lg">{% icon :idle, prefix: 'status-lg', class: 'status-icon' %}</span>
</button>
<button tooltip="error" class="mr-5">
  <span class="status status-error status-lg">{% icon :error, prefix: 'status-lg', class: 'status-icon' %}</span>
</button>
<button tooltip="fail" class="mr-5">
  <span class="status status-fail status-lg">{% icon :fail, prefix: 'status-lg', class: 'status-icon' %}</span>
</button>

```erb
{%- for status in page.statuses %}
<span class="status status-lg status-{{ status }}">
  <%= icon :{{ status }}, prefix: 'status-lg', class: 'status-icon' %>
</span>
{% endfor -%}
```

---

### X-Large Status Icons `.status-xl`
Useful when next to standard text where where it's important to show the status of a particular object.
{: .section-description }

<button tooltip="skipped" class="mr-5">
  <span class="status status-skipped status-xl">{% icon :skipped, prefix: 'status-xl', class: 'status-icon' %}</span>
</button>
<button tooltip="waiting" class="mr-5">
  <span class="status status-waiting status-xl">{% icon 'waiting', prefix: 'status-xl', class: 'status-icon' %}</span>
</button>
<button tooltip="running" class="mr-5">
  <span class="status status-running status-xl">{% icon :running, prefix: 'status-xl', class: 'status-icon' %}</span>
</button>
<button tooltip="success" class="mr-5">
  <span class="status status-success status-xl">{% icon :success, prefix: 'status-xl', class: 'status-icon' %}</span>
</button>
<button tooltip="idle" class="mr-5">
  <span class="status status-idle status-xl">{% icon :idle, prefix: 'status-xl', class: 'status-icon' %}</span>
</button>
<button tooltip="error" class="mr-5">
  <span class="status status-error status-xl">{% icon :error, prefix: 'status-xl', class: 'status-icon' %}</span>
</button>
<button tooltip="fail">
  <span class="status status-fail status-xl">{% icon :fail, prefix: 'status-xl', class: 'status-icon' %}</span>
</button>

```erb
{%- for status in page.statuses %}
<span class="status status-xl status-{{ status }}">
  <%= icon :{{ status }}, prefix: 'status-xl', class: 'status-icon' %>
</span>
{% endfor -%}
```

---

### Utility CSS
```css
{% sass_output -%}
```

---

{% include css-stats.html %}