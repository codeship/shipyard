module Jekyll
  class SassOutputGenerator < Generator
    def generate(site)
      site.config['sass_output'] = load_sass_files
      # Dir['../assets/stylesheets/**/*.sass'].each do |file|
      #   @sass = %(@import "shipyard/core"\n)
      #   @sass += File.read("../assets/stylesheets/shipyard/utilities/_opacity.sass")
      #   @engine = Sass::Engine.new(@sass, syntax: :sass, style: :compressed)
      #   @output = @engine.render
      #   site.config['sass_output'] = load_sass_files
      # end
    end

    private

    def load_sass_files
      Dir['../assets/stylesheets/shipyard/utilities/**/*.sass'].sort.map do |file|
        puts file
        sass = %(@import "shipyard/core"\n)
        sass += File.read(file)
        {
          file: file,
          sass: sass,
          css: Sass::Engine.new(sass, syntax: :sass, style: :compressed).render
        }
      end
    end
  end
end
