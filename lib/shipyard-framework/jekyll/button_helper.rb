module Jekyll
  class Button < Liquid::Tag
    def initialize(tag_name, params, options)
      super
      @params = params.split(',')
      @text = @params[0]
      @types = @params[1].to_s.tr(':','').tr('_','-').split(' ')
      @options = eval("{#{@params[2]}}") unless @params[2].nil?
    end

    def render(context)
      @options ||= {}

      # Extend tag class attribute
      css_classes = []
      css_classes << 'btn'
      @types.each do |type|
        css_classes << "btn-#{type}"
      end
      @options[:class] = "#{css_classes.join(' ')} #{@options[:class]}".strip

      # Figure out the tag name
      tag_name = @options.include?(:href) ? :a : :button

      # Save tag attributes
      attributes = ''
      @options.each do |key, value|
        attributes += %( #{key}="#{value}")
      end

      <<-MARKUP.strip
        <#{tag_name}#{attributes}>#{@text}</#{tag_name}>
      MARKUP
    end
  end
end
