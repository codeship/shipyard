module Jekyll
  module ComponentCssClassFilter
    def component_css_class(element, breakpoint, modifier=nil)
      # puts "-----------"
      # puts element
      # puts breakpoint
      # puts modifier
      # puts "-----------"
      css = []
      css << "#{breakpoint}:" if breakpoint
      css << element
      css << "-#{modifier}" if modifier
      css.join
    end
  end
end

Liquid::Template.register_filter(Jekyll::ComponentCssClassFilter)
