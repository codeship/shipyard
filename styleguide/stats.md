---
title: Shipyard Stats
---

<table class="table">
  <thead>
    <tr>
      <th>CSS File</th>
      <th>Selectors</th>
      <th>Declarations</th>
      <th>Media Queries</th>
      <th>Size</th>
      <th>%</th>
    </tr>
  </thead>
  {% for sass in site.sass_output -%}
    <tr>
      {% for hash in sass -%}
        {% if hash[0] == 'file' -%}
          <td>
            <a href="https://github.com/codeship/shipyard/blob/master/assets/stylesheets/{{ hash[1] }}" target="_blank" class="bold blue-dark">
              {{ hash[1] }}
            </a>
          </td>
        {% endif -%}

        {% if hash[0] == 'selectors' -%}
          <td>{{ hash[1] }}</td>
        {% endif -%}

        {% if hash[0] == 'declarations' -%}
          <td>{{ hash[1] }}</td>
        {% endif -%}

        {% if hash[0] == 'media_queries' -%}
          <td>{{ hash[1] }}</td>
        {% endif -%}

        {% if hash[0] == 'gzip_size' -%}
          <td>{{ hash[1] | number_to_human_size }}</td>
        {% endif %}

        {% if hash[0] == 'percentage' -%}
          <td>{{ hash[1] }}%</td>
        {% endif %}
      {% endfor -%}
    </tr>
  {% endfor -%}
</table>
