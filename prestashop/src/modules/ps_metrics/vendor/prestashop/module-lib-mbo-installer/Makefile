DOCKER_INTERNAL ?= 8
DOCKER = $(shell docker ps 2> /dev/null)

check-docker:
ifndef DOCKER
    $(error "DOCKER is unavailable on your system")
endif

phpunit: check-docker
	docker pull prestashop/docker-internal-images:${DOCKER_INTERNAL}
	@docker run --rm \
		--name phpunit \
		-e PS_DOMAIN=localhost \
		-e PS_ENABLE_SSL=0 \
		-e PS_DEV_MODE=1 \
		-e XDEBUG_MODE=coverage \
		-e XDEBUG_ENABLED=1 \
		-v ${PWD}:/var/www/html/test-lib \
		-w /var/www/html/test-lib \
		prestashop/docker-internal-images:${DOCKER_INTERNAL} \
		sh -c " \
			service mariadb start && \
			service apache2 start && \
			_PS_ROOT_DIR_=/var/www/html/ vendor/bin/phpunit \
		"
	@echo phpunit passed
