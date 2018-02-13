FROM ruby:2.5

MAINTAINER dev@codeship.com

# Jenkins Utils
RUN apt-get update -y && apt-get install openjdk-8-jdk -y

# Shipyard Gems
COPY Gemfile* /tmp/
COPY shipyard.gemspec /tmp/
COPY lib/shipyard-framework/version.rb /tmp/lib/shipyard-framework/
WORKDIR /tmp
RUN gem install bundler --pre --no-ri --no-rdoc && bundle install --jobs 20 --retry 5

# Shipyard Documentation
WORKDIR /
COPY styleguide/Gemfile* /tmp/styleguide/
WORKDIR /tmp/styleguide
RUN gem install bundler --pre --no-ri --no-rdoc && bundle install --jobs 20 --retry 5
WORKDIR /

# Copy Everything Else Needed for CI
COPY ./app ./app
COPY ./assets ./assets
COPY ./ci ./ci
COPY ./lib ./lib
COPY ./spec ./spec
COPY ./styleguide ./styleguide
