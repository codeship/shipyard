---
title: Shipyard Components
---

{% include page-heading.html page=page %}

---

<ul class="col-container">
  {% for component in site.data.components %}
    <li class="mb-10 sm:mb-15 md:mb-30 col col-100 sm:col-33 md:col-25">
      <a href="{{ site.baseurl }}/components/{{ component | replace: ' ', '-' | downcase }}" class="box-link box-padding align-center text-md sm:text-lg md:text-xl">
        {{ component }}
      </a>
    </li>
  {% endfor %}
</ul>
