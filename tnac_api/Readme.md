Introduction
------------
This is the API endpoint that serves the Tunisian Contitutional Assembly Election Results at api.opendatatn.org

How to setup your own development endpoint
------------------------------------------
### Prerequisites
* Local install of CouchDB - Get it here [Win 32bits](http://bit.ly/couchbase_win_32bits) [Win 64bits](http://bit.ly/couchbase_win_64bits) [Linux RPM/DEB](http://bit.ly/couchbase_generic) 
* Kanso install : [Nodejs](http://nodejs.org/) [Kanso Instructions](http://bit.ly/kanso_tools)
* Highly recommended to familiarize yourself with CouchDB and the concept of couchapps
* Done!

### The fun part

* Grab a copy of this repo

	git clone git@github.com:dadicool/OpenDataTN.git

* Go into tnac_api and run :

	kanso install

* Make sure that your couchdb is running by accessing the [Futon](http://localhost:5984/_utils) admin tool

* Push the tn_datasets app to the Database by running :

	kanso push http://localhost:5984/tnac

* Upload the sample metadataset into the database

	kanso upload data/tnac.json http://localhost:5984/tnac

* Time to hit this URL : [http://localhost:5984/tnac/_design/tnac_api/_rewrite/](http://localhost:5984/tnac/_design/tn_api/_rewrite/)

* That's the root of your own endpoint!

How to make changes to the endpoint
-----------------------------------
* Fork the repo or create your own branch
* Make a change to the the lib/app.js file and push it to the databse with kanso. 
* Submit a pull request!
