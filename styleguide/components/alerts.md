---
title: Shipyard Alerts
description: Alerts should be used to grab a user's attention before proceeding to the next action. They are commonly found at the very top of the page directly above the content.
---

{% include page-heading.html page=page %}

---

### Dismissible
Used to display notes, tips, and other non-critical information.
{: .section-description }

{% alert :dismissible %}
  Ten other people are also viewing tickets for <a href="#">this flight</a>.
  Use the code <code class="code-inline">Travel_Light_2017</code> before you book your flight.
{% endalert %}

---

### Timed Alerts
<p class="text-light margin-bottom-sm">Useful when you want to display an alert for a pretedermined amount of time.</p>

{% alert :success, :dismissible, id: 'timed-alert-5s', class: 'alert-closed', data: { duration: 5 } %}
  Ten other people are also viewing tickets for <a href="#">this flight</a>.
  Use the code <code class="code-inline">Travel_Light_2017</code> before you book your flight.
  <div class="alert-timer alert-timer-on"></div>
{% endalert %}

{% alert :success, :dismissible, id: 'timed-alert-10s', class: 'alert-closed', data: { duration: 10 } %}
  Ten other people are also viewing tickets for <a href="#">this flight</a>.
  Use the code <code class="code-inline">Travel_Light_2017</code> before you book your flight.
  <div class="alert-timer alert-timer-on"></div>
{% endalert %}

{% alert :success, :dismissible, id: 'timed-alert-15s', class: 'alert-closed', data: { duration: 15 } %}
  Ten other people are also viewing tickets for <a href="#">this flight</a>.
  Use the code <code class="code-inline">Travel_Light_2017</code> before you book your flight.
  <div class="alert-timer alert-timer-on"></div>
{% endalert %}

<div class="box-secondary box-padding align-center">
  <button class="btn btn-cta margin-right-xs" alert-trigger="#timed-alert-5s">5s</button>
  <button class="btn btn-cta margin-right-xs" alert-trigger="#timed-alert-10s">10s</button>
  <button class="btn btn-cta" alert-trigger="#timed-alert-15s">15s</button>
</div>

---

### Default `.alert`
Used to display notes, tips, and other non-critical information.
{: .section-description }

{% alert %}
  Ten other people are also viewing tickets for <a href="#">this flight</a>.
  Use the code <code class="code-inline">Travel_Light_2017</code> before you book your flight.
  {% btn Call to Action, :sm, class: 'alert-cta' %}
{% endalert %}

---

### Info `.alert-info`
Useful when drawing attention to non-critical information or actions we want the user to take.
{: .section-description }

{% alert :info %}
  Ten other people are also viewing tickets for <a href="#">this flight</a>.
  Use the code <code class="code-inline">Travel_Light_2017</code> before you book your flight.
  {% btn Call to Action, :sm, class: 'alert-cta' %}
{% endalert %}

---

### Success `.alert-success`
Useful when drawing attention to interactions that have produced successful results.
{: .section-description }

{% alert :success %}
  Pack your bags! You'll be on the next flight to Hawaii.
  Use the code <code class="code-inline">Travel_Light_2017</code> on your next flight. In the meantime you can <a href="#">invite a friend</a> to this flight.
  {% btn Call to Action, :sm, class: 'alert-cta' %}
{% endalert %}

---

### Warning `.alert-warning`
Useful when drawing attention to critical, time-sensitive information &mdash; even if nothing has gone wrong.
{: .section-description }

{% alert :warning %}
  There are only 2 seats left on this flight! We recommend to <a href="#">book your tickets</a> as soon as possible.
  Use the code <code class="code-inline">Travel_Light_2017</code> before you book your flight.
  {% btn Call to Action, :sm, class: 'alert-cta' %}
{% endalert %}

---

### Error `.alert-error`
Useful when drawing attention to something that has gone critically wrong.
{: .section-description }

{% alert :error %}
  This flight is now sold out. Let's get you on the <a href="#">next flight to Kauai</a>.
  We hope the code <code class="code-inline">Travel_Light_2017</code> will be useful for your next flight.
  {% btn Call to Action, :sm, class: 'alert-cta' %}
{% endalert %}
