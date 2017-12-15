require 'sassc'
require 'zlib'

module Jekyll
  class SassOutputGenerator < Generator
    def generate(site)
      @shipyard_size = 0
      @stylesheets_path = '../assets/stylesheets/'
      sass = load_sass_files
      site.config['sass_output'] = sass
      site.data.merge!(sass_output: sass)
    end

    private

    def load_sass_files
      Dir["#{@stylesheets_path}**/*.sass"].sort.map do |file|
        sass = %(@import "shipyard/core"\n)
        sass += File.read(file)
        compact_css = render(sass, :compact)
        compressed_css = render(sass, :compressed)
        gzip_size = Zlib::Deflate.deflate(compressed_css).bytesize

        # Gather all the selectors
        selectors = compressed_css
          .gsub(/({[^{}]*})/, ",\n") # Remove declarations
          .gsub(/@media[^{]*{([^}]*)}/, "\\1") # Remove media queries
          .gsub(/@keyframes[^{]*{[^}]*}/, '') # Remove keyframes
          .gsub(/,([^\n])/, ",\n\\1") # Add new lines

        @shipyard_size = gzip_size if file.include?('_shipyard.sass')
        {
          'file' => file.gsub(@stylesheets_path, ''),
          'sass' => sass,
          'compact_css' => compact_css,
          'compressed_css' => compressed_css,
          'selectors' => selectors.scan(/,/).size,
          'declarations' => compressed_css.scan(/({[^{}]*})/).size,
          'media_queries' => compressed_css.scan(/@media/).size,
          'gzip_size' => gzip_size,
          'percentage' => (gzip_size.to_f / @shipyard_size.to_f * 100.0).round(1)
        }
      end
    end

    def render(sass, style)
      SassC::Engine.new(
        sass,
        syntax: :sass,
        style: style,
        load_paths: [Shipyard::stylesheets_path]
      ).render
    end
  end
end
