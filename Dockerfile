FROM jekyll/builder:stable

# one time install/init of dependencies
COPY Rakefile Gemfile* /srv/jekyll/
RUN cd /srv/jekyll && \
  jekyll build
