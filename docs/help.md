grunt-help
    runs your program with --help (or given parameters) to generate help doc

	npm install grunt-help --save-dev
	grunt.initConfig({
	help: {
		options: {
			destination: "docs/help.md"
		},
		all: {}
	}
	grunt help // saved output of `node index.js --help into docs/help.md
