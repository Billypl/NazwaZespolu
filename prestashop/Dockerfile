FROM prestashop/prestashop:1.7.8.11

RUN rm -rf /var/www/html/*
COPY src /var/www/html
COPY apache-config/000-default.conf /etc/apache2/sites-available/000-default.conf
COPY apache-config/ssl /etc/ssl/certs
RUN chmod -R a+rw /var/www/html/

RUN apt-get update && apt-get install -y \
    libmemcached-dev \
    zlib1g-dev \
    && pecl install memcached \
    && docker-php-ext-enable memcached
