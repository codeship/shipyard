Vue.component('icon', {
  template: `
    <svg :class="iconClass" :viewBox="viewBox" preserveAspectRatio="xMinYMin meet" v-html="innerHtml"></svg>
  `,

  props: {
    name: String,
    size: String, // {width}x{height} (e.g. 4x8, 8x8, 16x16)
    type: {
      default: '',
      type: String
    },
    html: String
  },

  computed: {
    iconClass () {
      let cssClasses = [];
      cssClasses.push('icon');
      cssClasses.push(`icon-${this.name}`);
      if (this.type.length > 0) {
        this.type.trim().split(' ').forEach((type) => {
          cssClasses.push(`icon-${type}`);
        });
      }
      return cssClasses;
    },

    viewBox () {
      return `0 0 ${this.size.replace(/x/, ' ')}`;
    },

    href () {
      return `/assets/icons.svg#${this.name}`;
    },

    innerHtml () {
      if (this.html && this.name == 'queued') {
        return this.svgInnerHtml;
      } else {
        return `<use xlink:href="${this.href}"></use>`;
      }
    },

    svgInnerHtml () {
      if (this.html) var html = this.html.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
      if (html) return html[1];
    }
  }
});
