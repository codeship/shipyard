module Jekyll
  module ColorCssClassFilter
    def color_css_class(color, shade=nil)
      if shade
        "#{color}-#{shade}".downcase.chomp '-base'
      else
        "#{color}".downcase
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::ColorCssClassFilter)
