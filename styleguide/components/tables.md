---
title: Shipyard Tables
description: Tables are useful for tabular data and can be used simple by applying the `.table` class to any table you're working on.
---

{% include page-heading.html page=page %}

---

<table class="table">
  <thead>
    <th>Flight #</th>
    <th>Airline</th>
    <th>Departure</th>
    <th>Arrival</th>
    <th>Notes</th>
  </thead>
  <tbody>
    {% for i in (1..15) %}
      <tr>
        <td>FR1890</td>
        <td>AirFrance</td>
        <td>8:00pm @ BOS</td>
        <td>10:30am @ CDG</td>
        <td>On Time</td>
      </tr>
    {% endfor %}
  </tbody>
</table>
