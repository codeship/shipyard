---
title: Shipyard Stats
---

<table class="table">
  <thead>
    <tr>
      <th>CSS File</th>
      <th>Selectors</th>
      <th>Declarations</th>
      <th>Size</th>
    </tr>
  </thead>
  {% for sass in site.sass_output -%}
    <tr>
      {% for hash in sass -%}
        {% if hash[0] == 'file' -%}
          <td>{{ hash[1] }}</td>
        {% endif -%}

        {% if hash[0] == 'selectors' -%}
          <td>{{ hash[1] }}</td>
        {% endif -%}

        {% if hash[0] == 'declarations' -%}
          <td>{{ hash[1] }}</td>
        {% endif -%}

        {% if hash[0] == 'gzip_size' -%}
          <td>{{ hash[1] }} bytes</td>
        {% endif %}
      {% endfor -%}
    </tr>
  {% endfor -%}
</table>
