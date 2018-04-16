---
title: Shipyard Statuses
sass_file: shipyard/components/_statuses
statuses: [skipped, waiting, running, success, idle, error, fail]
---

{% include page-heading.html page=page %}

---

### X-Small Status Icons `.status-xs`
Useful in tight spaces where it's still important to show status, but not important enough to compete for attention with other elements on the page.
{: .section-description }

<div class="mb-25">
  <button tooltip="skipped" class="btn btn-secondary btn-xs rounded-pill mr-5">
    <span class="status status-skipped status-xs">{% icon :skipped, prefix: 'status-xs', class: 'status-icon' %}</span>
    <span class="text-sm medium ml-5 text-skipped">Skipped</span>
  </button>
  <button tooltip="waiting" class="btn btn-secondary btn-xs rounded-pill mr-5">
    <span class="status status-waiting status-xs">{% icon 'waiting', prefix: 'status-xs', class: 'status-icon' %}</span>
    <span class="text-sm medium ml-5 text-waiting">Waiting</span>
  </button>
  <button tooltip="running" class="btn btn-secondary btn-xs rounded-pill mr-5">
    <span class="status status-running status-xs">{% icon :running, prefix: 'status-xs', class: 'status-icon' %}</span>
    <span class="text-sm medium ml-5 text-running">Running</span>
  </button>
  <button tooltip="success" class="btn btn-secondary btn-xs rounded-pill mr-5">
    <span class="status status-success status-xs">{% icon :success, prefix: 'status-xs', class: 'status-icon' %}</span>
    <span class="text-sm medium ml-5 text-success">Success</span>
  </button>
  <button tooltip="idle" class="btn btn-secondary btn-xs rounded-pill mr-5">
    <span class="status status-idle status-xs">{% icon :idle, prefix: 'status-xs', class: 'status-icon' %}</span>
    <span class="text-sm medium ml-5 text-idle">Idle</span>
  </button>
  <button tooltip="error" class="btn btn-secondary btn-xs rounded-pill mr-5">
    <span class="status status-error status-xs">{% icon :error_xs, prefix: 'status-xs', class: 'status-icon' %}</span>
    <span class="text-sm medium ml-5 text-error">Error</span>
  </button>
  <button tooltip="fail" class="btn btn-secondary btn-xs rounded-pill mr-5">
    <span class="status status-fail status-xs">{% icon :fail, prefix: 'status-xs', class: 'status-icon' %}</span>
    <span class="text-sm medium ml-5 text-fail">Fail</span>
  </button>
</div>

```erb
{%- for status in page.statuses %}
<!-- Status: {{ status | capitalize }} -->
<span class="status status-xs status-{{ status }}">
  <%= icon :{{ status | replace: 'error', 'error_xs' }}, prefix: 'status-xs', class: 'status-icon' %>
</span>
<span class="text-{{ status }}">{{ status | capitalize }}</span>
{% endfor -%}
```

---

### Small Status Icons `.status-sm`
Useful when next to standard text where where it's important to show the status of a particular object.
{: .section-description }

<button tooltip="skipped" class="btn btn-secondary btn-sm rounded-pill mr-5">
  <span class="status status-skipped status-sm">{% icon :skipped, prefix: 'status-sm', class: 'status-icon' %}</span>
  <span class="text-md medium ml-5 text-skipped">Skipped</span>
</button>
<button tooltip="waiting" class="btn btn-secondary btn-sm rounded-pill mr-5">
  <span class="status status-waiting status-sm">{% icon 'waiting', prefix: 'status-sm', class: 'status-icon' %}</span>
  <span class="text-md medium ml-5 text-waiting">Waiting</span>
</button>
<button tooltip="running" class="btn btn-secondary btn-sm rounded-pill mr-5">
  <span class="status status-running status-sm">{% icon :running, prefix: 'status-sm', class: 'status-icon' %}</span>
  <span class="text-md medium ml-5 text-running">Running</span>
</button>
<button tooltip="success" class="btn btn-secondary btn-sm rounded-pill mr-5">
  <span class="status status-success status-sm">{% icon :success, prefix: 'status-sm', class: 'status-icon' %}</span>
  <span class="text-md medium ml-5 text-success">Success</span>
</button>
<button tooltip="idle" class="btn btn-secondary btn-sm rounded-pill mr-5">
  <span class="status status-idle status-sm">{% icon :idle, prefix: 'status-sm', class: 'status-icon' %}</span>
  <span class="text-md medium ml-5 text-idle">Idle</span>
</button>
<button tooltip="error" class="btn btn-secondary btn-sm rounded-pill mr-5">
  <span class="status status-error status-sm">{% icon :error_xs, prefix: 'status-sm', class: 'status-icon' %}</span>
  <span class="text-md medium ml-5 text-error">Error</span>
</button>
<button tooltip="fail" class="btn btn-secondary btn-sm rounded-pill mr-5">
  <span class="status status-fail status-sm">{% icon :fail, prefix: 'status-sm', class: 'status-icon' %}</span>
  <span class="text-md medium ml-5 text-fail">Fail</span>
</button>

```erb
{%- for status in page.statuses %}
<!-- Status: {{ status | capitalize }} -->
<span class="status status-sm status-{{ status }}">
  <%= icon :{{ status | replace: 'error', 'error_xs' }}, prefix: 'status-sm', class: 'status-icon' %>
</span>
<span class="text-{{ status }}">{{ status | capitalize }}</span>
{% endfor -%}
```

---

### Medium Status Icons `.status-md`
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

### Medium, Inverse Status Icons `.status-inverse.status-md`
Useful when next to standard text where where it's important to show the status of a particular object.
{: .section-description }

<div class="col-container m-0 align-center mb-30">
  <div class="status-skipped-bg p-20 pl-0 pr-0 col rounded rounded-left" tooltip="skipped">
    <span class="status status-inverse status-skipped status-md">
      {% icon :skipped, prefix: 'status-md', class: 'status-icon' %}
    </span>
  </div>
  <div class="status-waiting-bg p-20 pl-0 pr-0 col" tooltip="waiting">
    <span class="status status-inverse status-waiting status-md">
      {% icon 'waiting', prefix: 'status-md', class: 'status-icon' %}
    </span>
  </div>
  <div class="status-running-bg p-20 pl-0 pr-0 col" tooltip="running">
    <span class="status status-inverse status-running status-md">
      {% icon :running, prefix: 'status-md', class: 'status-icon' %}
    </span>
  </div>
  <div class="status-success-bg p-20 pl-0 pr-0 col" tooltip="success">
    <span class="status status-inverse status-success status-md">
      {% icon :success, prefix: 'status-md', class: 'status-icon' %}
    </span>
  </div>
  <div class="status-idle-bg p-20 pl-0 pr-0 col" tooltip="idle">
    <span class="status status-inverse status-idle status-md">
      {% icon :idle, prefix: 'status-md', class: 'status-icon' %}
    </span>
  </div>
  <div class="status-error-bg p-20 pl-0 pr-0 col" tooltip="error">
    <span class="status status-inverse status-error status-md">
      {% icon :error, prefix: 'status-md', class: 'status-icon' %}
    </span>
  </div>
  <div class="status-fail-bg p-20 pl-0 pr-0 col rounded rounded-right" tooltip="fail">
    <span class="status status-inverse status-fail status-md">
      {% icon :fail, prefix: 'status-md', class: 'status-icon' %}
    </span>
  </div>
</div>

```erb
{%- for status in page.statuses %}
<span class="status status-inverse status-md status-{{ status }}">
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

### Large, Inverse Status Icons `.status-inverse.status-lg`
Useful when next to standard text where where it's important to show the status of a particular object.
{: .section-description }

<div class="col-container m-0 align-center mb-30">
  <div class="status-skipped-bg p-20 pl-0 pr-0 col rounded rounded-left" tooltip="skipped">
    <span class="status status-inverse status-skipped status-lg">
      {% icon :skipped, prefix: 'status-lg', class: 'status-icon' %}
    </span>
  </div>
  <div class="status-waiting-bg p-20 pl-0 pr-0 col" tooltip="waiting">
    <span class="status status-inverse status-waiting status-lg">
      {% icon 'waiting', prefix: 'status-lg', class: 'status-icon' %}
    </span>
  </div>
  <div class="status-running-bg p-20 pl-0 pr-0 col" tooltip="running">
    <span class="status status-inverse status-running status-lg">
      {% icon :running, prefix: 'status-lg', class: 'status-icon' %}
    </span>
  </div>
  <div class="status-success-bg p-20 pl-0 pr-0 col" tooltip="success">
    <span class="status status-inverse status-success status-lg">
      {% icon :success, prefix: 'status-lg', class: 'status-icon' %}
    </span>
  </div>
  <div class="status-idle-bg p-20 pl-0 pr-0 col" tooltip="idle">
    <span class="status status-inverse status-idle status-lg">
      {% icon :idle, prefix: 'status-lg', class: 'status-icon' %}
    </span>
  </div>
  <div class="status-error-bg p-20 pl-0 pr-0 col" tooltip="error">
    <span class="status status-inverse status-error status-lg">
      {% icon :error, prefix: 'status-lg', class: 'status-icon' %}
    </span>
  </div>
  <div class="status-fail-bg p-20 pl-0 pr-0 col rounded rounded-right" tooltip="fail">
    <span class="status status-inverse status-fail status-lg">
      {% icon :fail, prefix: 'status-lg', class: 'status-icon' %}
    </span>
  </div>
</div>

```erb
{%- for status in page.statuses %}
<span class="status status-inverse status-lg status-{{ status }}">
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

### X-Large, Inverse Status Icons `.status-inverse.status-xl`
Useful when next to standard text where where it's important to show the status of a particular object.
{: .section-description }

<div class="col-container m-0 align-center mb-30">
  <div class="status-skipped-bg p-10 sm:p-20 pl-0 pr-0 col rounded rounded-left" tooltip="skipped">
    <span class="status status-inverse status-skipped status-xl">
      {% icon :skipped, prefix: 'status-xl', class: 'status-icon' %}
    </span>
  </div>
  <div class="status-waiting-bg p-10 sm:p-20 pl-0 pr-0 col" tooltip="waiting">
    <span class="status status-inverse status-waiting status-xl">
      {% icon 'waiting', prefix: 'status-xl', class: 'status-icon' %}
    </span>
  </div>
  <div class="status-running-bg p-10 sm:p-20 pl-0 pr-0 col" tooltip="running">
    <span class="status status-inverse status-running status-xl">
      {% icon :running, prefix: 'status-xl', class: 'status-icon' %}
    </span>
  </div>
  <div class="status-success-bg p-10 sm:p-20 pl-0 pr-0 col" tooltip="success">
    <span class="status status-inverse status-success status-xl">
      {% icon :success, prefix: 'status-xl', class: 'status-icon' %}
    </span>
  </div>
  <div class="status-idle-bg p-10 sm:p-20 pl-0 pr-0 col" tooltip="idle">
    <span class="status status-inverse status-idle status-xl">
      {% icon :idle, prefix: 'status-xl', class: 'status-icon' %}
    </span>
  </div>
  <div class="status-error-bg p-10 sm:p-20 pl-0 pr-0 col" tooltip="error">
    <span class="status status-inverse status-error status-xl">
      {% icon :error, prefix: 'status-xl', class: 'status-icon' %}
    </span>
  </div>
  <div class="status-fail-bg p-10 sm:p-20 pl-0 pr-0 col rounded rounded-right" tooltip="fail">
    <span class="status status-inverse status-fail status-xl">
      {% icon :fail, prefix: 'status-xl', class: 'status-icon' %}
    </span>
  </div>
</div>

```erb
{%- for status in page.statuses %}
<span class="status status-inverse status-xl status-{{ status }}">
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
