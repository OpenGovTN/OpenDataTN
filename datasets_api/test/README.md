Prequisties:
-----------

* [nodejs|http://nodejs.org/]
* [npm|http://npmjs.org/]: now it comes with node installer (at least for mac)
* [vows|http://vowsjs.org/]


Install:
-------

run the install command on the current folder:
    $ npm install

Run:
___

run individual tests, for example:
    $ vows circonscription-test.js

or run all the tests:
    $ np test
this is equivalent to:
    $ vows *-test.js
