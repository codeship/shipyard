---
title: Shipyard Components
---

{% include page-heading.html page=page %}

---

<ul class="col-container">
  {% for component in site.data.components %}
    <li class="mb-10 mb-x1-15 mb-x2-30 col col-100 col-x1-33 col-x2-25">
      <a href="{{ site.baseurl }}/components/{{ component | replace: ' ', '-' | downcase }}" class="box-link box-padding align-center text-md text-x1-lg text-x2-xl">
        {{ component }}
      </a>
    </li>
  {% endfor %}
</ul>
