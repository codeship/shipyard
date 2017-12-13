require 'sass'

module Jekyll
  class SassOutputGenerator < Generator
    def generate(site)
      site.config['sass_output'] = load_sass_files
    end

    private

    def load_sass_files
      Dir['../assets/stylesheets/shipyard/utilities/**/*.sass'].sort.map do |file|
        sass = %(@import "shipyard/core"\n)
        sass += File.read(file)
        css = Sass::Engine.new(sass, syntax: :sass, style: :compressed).render
        {
          file: file,
          sass: sass,
          css: css,
          declarations: css.scan(/{/).size,
          selectors: css.scan(/[.][a-zA-Z\-][a-zA-Z0-9\-]*/).size
        }
      end
    end
  end
end
