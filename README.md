###setup
You will need to install `karma`, `karma-junit-reporter` and `karma-html-reporter` with this command:

    npm install
    
###run test
There are three way to run the tests:

1. directly run jasmine with firefox: open `test/SpecRunnerFirefox.html` with firefox
2. directly run jasmine with chrome: open `test/SpecRunnerChrome.html` with chrome
3. run test with karma: 
	* for single run(mostly used in project build): `./node_modules/.bin/karma start karma.conf.js --single-run`
	* for server run(mostly used in common debug): `./node_modules/.bin/karma start karma.conf.js`