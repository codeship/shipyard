module Shipyard
  module HtmlBuilderHelper
    def content_tag(name, content_or_attributes, attributes = {})
      if content_or_attributes.is_a?(Hash)
        content, attributes = nil, content_or_attributes
      else
        content = content_or_attributes
      end

      attributes = attributes.map { |k,v| %Q(#{k}="#{v}") }

      if content.nil?
        "<#{[name, attributes].flatten.compact.join(' ')}/>"
      else
        "<#{[name, attributes].flatten.compact.join(' ')}>#{content}</#{name}>"
      end
    end
  end
end
