module Jekyll
  class ShipyardVariables < Generator
    def generate(site)
      site.config['env'] = ENV['JEKYLL_ENV'] || 'development'
    end
  end
end
