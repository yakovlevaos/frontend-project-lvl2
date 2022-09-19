install:
	npm ci

make lint:
	npx eslint .

make lint fix:
	npx eslint --fix .
