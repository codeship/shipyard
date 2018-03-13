module Jekyll
  module ComponentCssClassFilter
    def component_css_class(element, breakpoint, modifier=nil)
      css = []
      css << "#{breakpoint}:" if breakpoint && !modifier.nil?
      css << element
      css << "-#{modifier}" if modifier
      css << "-#{breakpoint}" if modifier.nil?
      css.join
    end
  end
end

Liquid::Template.register_filter(Jekyll::ComponentCssClassFilter)
