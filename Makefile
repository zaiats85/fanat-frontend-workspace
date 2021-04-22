# ------------------------------------------------------

PACKAGE_MANAGER := yarn

ANGULAR_CLI_PATH := node_modules/.bin/ng
WEBPACK_PATH := node_modules/.bin/webpack
NODE_PATH := node

MAX_MEMORY_SIZE := 4096

DIR := $(shell pwd)
PROJECTS := $(shell cat build-order.json | jq -r '. | join(" ")')

FRONTEND_PROJECT := fanat-frontend
REFERENCE_PROJECT :=

DOCKER_IMAGE_PREFIX :=

SYNC_PROJECT := ""
ENV_FILE := ""

# ------------------------------------------------------

.PHONY: all/build
all/build: $(foreach p, $(PROJECTS), $(p)/build)

.PHONY: all/test
all/test: $(foreach p, $(PROJECTS), $(p)/test)

.PHONY: all/lint
all/lint: $(foreach p, $(PROJECTS), $(p)/lint)

serve:
	@$(NODE_PATH) --max-old-space-size=$(MAX_MEMORY_SIZE) $(ANGULAR_CLI_PATH) serve $(FRONTEND_PROJECT)
