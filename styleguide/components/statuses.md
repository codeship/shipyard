---
title: Shipyard Statuses
sass_file: shipyard/components/_statuses
statuses: [skipped, waiting, running, succeeded, idle, errored, failed]
---

{% include page-heading.html page=page %}

---

### Status Dots
Status dots are used whenever space is limited, but it's still important to show the health.
{: .section-description }

{% for status in page.statuses -%}
  <button class="btn btn-secondary btn-xs btn-rounded margin-right-xxs">
    <span class="status status-{{ status }}"></span>
    <span class="text-sm medium ml-3 text-{{ status }}">{{ status }}</span>
  </button>
{% endfor %}

```html
{%- for status in page.statuses %}
<span class="status status-{{ status }}"></span>
<span class="text-{{ status }}">{{ status }}</span>
{% endfor -%}
```

---

{% include css-stats.html %}
