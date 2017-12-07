module Jekyll
  module ComponentCssClassFilter
    def component_css_class(element, breakpoint, modifier=nil)
      [element, breakpoint, modifier].reject(&:blank?).join('-')
    end
  end
end

Liquid::Template.register_filter(Jekyll::ComponentCssClassFilter)
