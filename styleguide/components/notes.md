---
title: Shipyard Notes
description: Notes should be used to grab a user's attention along side of other content.
---

{% include page-heading.html page=page %}

---

### Default `.note`
<p class="text-light margin-bottom-sm">Used to display notes, tips, and other non-critical information.</p>

{% note %}
  Ten other people are also viewing tickets for <a href="#">this flight</a>.
  Use the code <code class="code-inline">Travel_Light_2017</code> before you book your flight.
  {% btn Call to Action, :sm, class: 'note-cta' %}
{% endnote %}

---

### Info `.note-info`
<p class="text-light margin-bottom-sm">Useful when drawing attention to non-critical information or actions we want the user to take.</p>

{% note :info %}
  Ten other people are also viewing tickets for <a href="#">this flight</a>.
  Use the code <code class="code-inline">Travel_Light_2017</code> before you book your flight.
  {% btn Call to Action, :sm, class: 'note-cta' %}
{% endnote %}

---

### Success `.note-success`
<p class="text-light margin-bottom-sm">Useful when drawing attention to interactions that have produced successful results.</p>

{% note :success %}
  <p markdown="1">
    Pack your bags! You'll be on the next flight to Hawaii.
    Use the code `Travel_Light_2017` on your next flight. In the meantime you can [invite a friend](#) to this flight.
  </p>
  {% btn Call to Action, :sm, class: 'note-cta' %}
{% endnote %}

---

### Warning `.note-warning`
<p class="text-light margin-bottom-sm">Useful when drawing attention to critical information.</p>

{% note :warning %}
  <p markdown="1">
    There are only 2 seats left on this flight! We recommend to [book your tickets](#) as soon as possible.
    Use the code `Travel_Light_2017` before you book your flight.
  </p>
  {% btn Call to Action, :sm, class: 'note-cta' %}
{% endnote %}
