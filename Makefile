TESTS = test/router/* \
	test/io/*

lt:
	@./node_modules/.bin/eslint src test

lint:
	@./node_modules/.bin/eslint src test --fix

tt: lt
	@./node_modules/.bin/babel-node \
		./node_modules/.bin/_mocha \
		$(TESTS) \
		--bail

tt-cov:
	@./node_modules/.bin/babel-node \
		./node_modules/.bin/babel-istanbul cover \
		./node_modules/.bin/_mocha \
		-- -u exports \
		$(TESTS) \
		--bail

tt-travis: lt
	@./node_modules/.bin/babel-node \
		./node_modules/.bin/babel-istanbul cover \
		./node_modules/.bin/_mocha \
		--report lcovonly \
		-- -u exports \
		$(TESTS) \
		--bail
