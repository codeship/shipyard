require 'sassc'
require 'zlib'

module Jekyll
  class SassOutputGenerator < Generator
    def generate(site)
      site.config['sass_output'] = load_sass_files
    end

    private

    def load_sass_files
      Dir['../assets/stylesheets/shipyard/**/*.sass'].sort.map do |file|
        sass = %(@import "shipyard/core"\n)
        sass += File.read(file)
        compact_css = render(sass, :compact)
        compressed_css = render(sass, :compressed)
        {
          file: file,
          sass: sass,
          compact_css: compact_css,
          compressed_css: compressed_css,
          gzip_size: Zlib::Deflate.deflate(compressed_css).bytesize,
          declarations: compressed_css.scan(/[.][a-zA-Z\-][a-zA-Z0-9\-]*{/).size,
          selectors: compressed_css.scan(/[.][a-zA-Z\-][a-zA-Z0-9\-]*/).size
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
