FROM ruby:2.5

MAINTAINER dev@codeship.com

COPY . ./
RUN gem install bundler --pre --no-ri --no-rdoc && bundle install --jobs 20 --retry 5

WORKDIR ./styleguide
RUN gem install bundler --pre --no-ri --no-rdoc && bundle install --jobs 20 --retry 5
WORKDIR ..

CMD ["bundle", "exec"]
