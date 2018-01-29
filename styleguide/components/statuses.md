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
    <button class="btn btn-secondary btn-xs btn-rounded margin-right-xxs">
      <span class="status status-xs status-{{ status }}"></span>
      <span class="text-sm medium ml-2 text-{{ status }}">{{ status | capitalize }}</span>
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
  <button class="btn btn-secondary btn-sm btn-rounded margin-right-xxs">
    <span class="status status-{{ status }} status-sm"></span>
    <span class="text-md medium ml-3 text-{{ status }}">{{ status | capitalize }}</span>
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

<button tooltip="skipped">
  <span class="status status-skipped status-md">{% icon :skipped, class: 'status-icon' %}</span>
</button>
<button tooltip="waiting">
  <span class="status status-waiting status-md">{% icon :waiting, class: 'status-icon' %}</span>
</button>
<button tooltip="running">
  <span class="status status-running status-md">{% icon :running, class: 'status-icon' %}</span>
</button>
<button tooltip="success">
  <span class="status status-success status-md">{% icon :success, class: 'status-icon' %}</span>
</button>
<button tooltip="idle">
  <span class="status status-idle status-md">{% icon :idle, class: 'status-icon' %}</span>
</button>
<button tooltip="error">
  <span class="status status-error status-md">{% icon :error, class: 'status-icon' %}</span>
</button>
<button tooltip="fail">
  <span class="status status-fail status-md">{% icon :fail, class: 'status-icon' %}</span>
</button>

```erb
{%- for status in page.statuses %}
<span class="status status-md status-{{ status }}">
  <%= icon :{{ status }}, class: 'status-icon' %>
</span>
{% endfor -%}
```

---

### Status Large Icons `.status-lg`
Useful when next to standard text where where it's important to show the status of a particular object.
{: .section-description }

<button tooltip="skipped">
  <span class="status status-skipped status-lg">{% icon :skipped, class: 'status-icon' %}</span>
</button>
<button tooltip="waiting">
  <span class="status status-waiting status-lg">{% icon :waiting, class: 'status-icon' %}</span>
</button>
<button tooltip="running">
  <span class="status status-running status-lg">{% icon :running, class: 'status-icon' %}</span>
</button>
<button tooltip="success">
  <span class="status status-success status-lg">{% icon :success, class: 'status-icon' %}</span>
</button>
<button tooltip="idle">
  <span class="status status-idle status-lg">{% icon :idle, class: 'status-icon' %}</span>
</button>
<button tooltip="error">
  <span class="status status-error status-lg">{% icon :error, class: 'status-icon' %}</span>
</button>
<button tooltip="fail">
  <span class="status status-fail status-lg">{% icon :fail, class: 'status-icon' %}</span>
</button>

```erb
{%- for status in page.statuses %}
<span class="status status-lg status-{{ status }}">
  <%= icon :{{ status }}, class: 'status-icon' %>
</span>
{% endfor -%}
```

---

### Status X-Large Icons `.status-xl`
Useful when next to standard text where where it's important to show the status of a particular object.
{: .section-description }

<button tooltip="skipped">
  <span class="status status-skipped status-xl">{% icon :skipped, class: 'status-icon' %}</span>
</button>
<button tooltip="waiting">
  <span class="status status-waiting status-xl">{% icon :waiting, class: 'status-icon' %}</span>
</button>
<button tooltip="running">
  <span class="status status-running status-xl">{% icon :running, class: 'status-icon' %}</span>
</button>
<button tooltip="success">
  <span class="status status-success status-xl">{% icon :success, class: 'status-icon' %}</span>
</button>
<button tooltip="idle">
  <span class="status status-idle status-xl">{% icon :idle, class: 'status-icon' %}</span>
</button>
<button tooltip="error">
  <span class="status status-error status-xl">{% icon :error, class: 'status-icon' %}</span>
</button>
<button tooltip="fail">
  <span class="status status-fail status-xl">{% icon :fail, class: 'status-icon' %}</span>
</button>

```erb
{%- for status in page.statuses %}
<span class="status status-xl status-{{ status }}">
  <%= icon :{{ status }}, class: 'status-icon' %>
</span>
{% endfor -%}
```

---

{% include css-stats.html %}
