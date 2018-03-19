---
title: Accordions
description: Useful when you want to open and close large blocks of content in a more elegant way.
sass_file: shipyard/components/_accordion
sizes:
  -
    name: xs
    value: 500px
  -
    name: sm
    value: 750px
  -
    name: md
    value: 1000px
  -
    name: lg
    value: 1500px
  -
    name: xl
    value: 3000px
---

{% include page-heading.html page=page %}

---

<div class="box-secondary mb-30">
  <div class="box p-10 sm:p-15 md:p-20 lg:p-30 box-link pt-20 pb-20" accordion="#accordion-example">
    Click this box to see an example of the accordion transitions.
  </div>
  <div id="accordion-example" class="accordion accordion-xs accordion-closed p-10 sm:p-15 md:p-20 lg:p-30 rounded-bottom">
    <p>Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
    <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod. Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit amet fermentum.</p>
    <p>Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.</p>
    <p>Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis.</p>
    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum.</p>
  </div>
</div>

```css
{% sass_output -%}
```

---

{% include css-stats.html %}
