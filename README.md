# Shipyard

A light-weight, powerful, front-end framework for faster web development and useful tools for Ruby on Rails and Jekyll enthusiasts.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'shipyard-framework'
```

And then execute:

```bash
$ bundle
```

Or install it yourself as:

```bash
$ gem install shipyard-framework
```

The add this line to your application's CSS file(s):

```css
@import "shipyard"
```

If you're using Jekyll, make sure you add the following the code in your `_config.yml` file:
```yml
plugins:
  - shipyard-framework
```

## Status
[![Gem Version](https://badge.fury.io/rb/shipyard-framework.svg)](https://badge.fury.io/rb/shipyard-framework)
[![Codeship Status for codeship/shipyard](https://app.codeship.com/projects/30419df0-80ff-0135-f7fb-06994b6b032d/status?branch=master)](https://app.codeship.com/projects/246808)

## Development

After checking out the repo, run `bin/setup` to install dependencies. Then, run `rake spec` to run the tests. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Bugs & Feature Requests

Have a bug or a feature request? Please first read [the issue guidelines](https://github.com/codeship/shipyard/wiki/issues) and search for (existing and closed issues)[https://github.com/codeship/shipyard/issues?utf8=%E2%9C%93&q=is%3Aissue]. If your problem or idea is not addressed yet, please [open a new issue](https://github.com/codeship/shipyard/issues/new).

## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
