module Jekyll
  module ComponentCssClassFilter
    def component_css_class(element, breakpoint, modifier=nil)
      has_breakpoint = ['sm', 'md', 'lg', 'xl'].include? breakpoint
      modifier ||= breakpoint unless has_breakpoint
      css = []
      css << "#{breakpoint}:" if has_breakpoint
      css << element
      css << "-#{modifier}" if modifier
      css.join
    end
  end
end

Liquid::Template.register_filter(Jekyll::ComponentCssClassFilter)
