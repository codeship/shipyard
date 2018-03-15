---
title: Shipyard Code Component
sass_file: shipyard/components/_code
---

{% include page-heading.html page=page %}

---

## Inline Code Example `.code-inline`
<p class="mt-15 mb-15 text-normal">Vestibulum id ligula porta felis <code class="code-inline">euismod semper</code>. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia <code class="code-inline">bibendum nulla sed</code> consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. <code class="code-inline">Nullam id</code> dolor id nibh ultricies vehicula ut id elit. <code class="code-inline">Cras mattis consectetur</code> purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

---

## Code Block Example `.code-block`
<pre class="code-block mt-15"><code>class Shipyard
  def foo
  end

  def bar
  end
end</code></pre>

<hr />

<h2 class="mb-15">Code Alert Examples</h2>
{% alert :info %}
  Ten other people are also viewing tickets for this flight.
  Use the code <code class="code-inline">Travel_Light_2017</code> before you book your flight.
{% endalert %}

{% alert :success %}
  Pack your bags! You'll be on the next flight to Hawaii.
  Use the code <code class="code-inline">Travel_Light_2017</code> on your next flight.
{% endalert %}

{% alert :warning %}
  There are only 2 seats left on this flight! We recommend to book your tickets as soon as possible.
  Use the code <code class="code-inline">Travel_Light_2017</code> before you book your flight.
{% endalert %}

{% alert :error %}
  This flight is now sold out. Let's get you on the next flight to Kauai.
  We hope the code <code class="code-inline">Travel_Light_2017</code> will be useful for your next flight.
{% endalert %}

<hr />

{% include css-stats.html %}
