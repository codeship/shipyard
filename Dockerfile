FROM ruby:2.5

MAINTAINER dev@codeship.com

# RUN apt-get update -y && apt-get install openjdk-8-jdk -y

COPY . ./
RUN gem install bundler --pre --no-ri --no-rdoc && bundle install --jobs 20 --retry 5

WORKDIR ./styleguide
RUN gem install bundler --pre --no-ri --no-rdoc && bundle install --jobs 20 --retry 5
WORKDIR ..

CMD ["bundle", "exec"]
