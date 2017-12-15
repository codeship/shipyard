module Jekyll
  module HumanSizeFilter
    def number_to_human_size(num, css='text-lightest')
      case
      when num >= 1000 then %(#{(num / 1000.0).round(1)} <span class="#{css}">kb</span>)
      else %(#{num} <span class="#{css}">B</span>)
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::HumanSizeFilter)
