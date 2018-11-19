# Shipyard

A light-weight, powerful, front-end framework for faster web development and useful tools for Ruby on Rails and Jekyll enthusiasts.

## Installation 

Add this line to your application's Gemfile:

```ruby
gem 'shipyard-framework'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install shipyard-framework

Then add this line to your application's CSS file(s):

```css
@import "shipyard"
```

If you're using Jekyll, make sure you add the following the code in your `_config.yml` file:
```yml
plugins:
  - shipyard-framework
```

## Running Builds on Codeship Pro
1. Install [Homebrew](https://brew.sh/)
2. Run `brew bundle`
3. Run `jet steps`

## Running Builds on Jenkins
1. Install [Homebrew](https://brew.sh/)
2. Run `brew bundle`
3. Run `jenkins`
4. Open [Jenkins](http://localhost:8080/)

## Running Jekyll Locally via Docker
1. Install [Docker for Mac](https://download.docker.com/mac/stable/Docker.dmg)
2. Run `rake shipyard:run`

## Status
[![Gem Version](https://badge.fury.io/rb/shipyard-framework.svg)](https://badge.fury.io/rb/shipyard-framework)
[![Codeship Status for codeship/shipyard](https://app.codeship.com/projects/30419df0-80ff-0135-f7fb-06994b6b032d/status?branch=master)](https://app.codeship.com/projects/246808)

## Development Workflow
Shipyard uses [Codeship Basic](https://codeship.com/features/basic) to automate the testing and deployment workflows. If you would like to make a contribution to this project, all tests will need to pass and an administrator will need to approve the changes before they can be merged into master.

## Bugs & Feature Requests

Have a bug or a feature request? Please first read [the issue guidelines](https://github.com/codeship/shipyard/wiki/issues) and search for [existing and closed issues](https://github.com/codeship/shipyard/issues?utf8=%E2%9C%93&q=is%3Aissue). If your problem or idea is not addressed yet, please [open a new issue](https://github.com/codeship/shipyard/issues/new).

## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
