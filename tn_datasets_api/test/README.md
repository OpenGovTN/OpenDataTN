Prequisties:
-----------

* [nodejs] (http://nodejs.org/)
* [npm] (http://npmjs.org/): now it comes with node installer (at least for mac)
* [vows] (http://vowsjs.org/)

Install:
-------

run the install command on the current folder:
    
    $ npm install

add ./node_modules/.bin to your PATH

Run:
---

run individual tests, for example:

    $ vows metadata-test.js

or run all the tests:

    $ npm test

this is equivalent to:

    $ vows *-test.js
