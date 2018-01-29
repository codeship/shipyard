---
title: Shipyard Components
components: [Boxes, Buttons, Empty States, Alerts, Notes, Forms, Statuses, Radio Buttons, Checkboxes, Icons, Modals, Tooltips, Code, Tables, Horizontal Rules]
---

{% include page-heading.html page=page %}

---

<ul class="col-container">
  {% for component in page.components %}
    <li class="margin-bottom-xs margin-bottom-x1-sm margin-bottom-x2-lg col col-100 col-x1-33 col-x2-25">
      <a href="{{ site.baseurl }}/components/{{ component | replace: ' ', '-' | downcase }}" class="box-link box-padding align-center text-md text-x1-lg text-x2-xl">
        {{ component }}
      </a>
    </li>
  {% endfor %}
</ul>
