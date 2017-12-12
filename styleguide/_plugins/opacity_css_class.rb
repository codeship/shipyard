module Jekyll
  module OpacityCssClassFilter
    def opacity_css_class(value, decimal='')
      css = ''
      css += decimal if value > 0
      css += value == 5 ? "0#{value}" : "#{value}"
      css
    end
  end
end

Liquid::Template.register_filter(Jekyll::OpacityCssClassFilter)
