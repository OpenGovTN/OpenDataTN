[![Build Status](https://secure.travis-ci.org/dadicool/OpenDataTN.png)](http://travis-ci.org/dadicool/OpenDataTN)


Introduction
------------
This API makes available various public data sets under the OpenGovTN initiative.

The initial data set has been collected from the ISIE website which made the Tunisian Constritutional Assembly election results available to the public

API : MetaData Endpoint
-----------------------
### DataSet endpoints available
* GET /api
  * Options :
    * ?limit=N : return the first N entries
  * Return : JSON representation of the Dataset endpoints available. 
  * Example : GET /api

    [{"dataset":"tnac","description":"Tunisian Constituant Assembly Elections"}]

### DataSet description
* GET /api/dataset
  * Return : JSON representation of the Dataset endpoint. 
  * Example : GET /api/tnac

    [{"dataset":"tnac","description":"Tunisian Constituant Assembly Elections"}]

API : DataSet Endpoint
-----------------------

* DataSet Name : DATASET = tnac
* Version : VERSION = v1

### API Versions for a DataSet
* GET /DATASET
  * Options :
    * ?limit=N : return the first N entries
  * Return : JSON representation of the API versions available. 
  * Example : GET /tnac

    [["v1",["circonscription","delegation","centre","bureau"]]]

### Endpoints for an API version
* GET /DATASET/VERSION
  * Options :
    * ?limit=N : return the first N entries
  * Return : JSON representation of the REST resources available in the specified API version. 
  * Example : GET /tnac/v1

    ["circonscription","delegation","centre","bureau"]

### Circonscription
* GET /DATASET/VERSION/circonscription
  * Options :
    * ?limit=N : return the first N entries
  * Return : JSON representation of the list of circonscriptions. 
  * Example : GET /tnac/v1/circonscription?limit=2

    [{"code" : "111" , "name" : "تونس 1"}, {"code" : "112", "name" : ""}]

* GET /DATASET/VERSION/circonscription/X
  * X : code of a circonscription
  * Options :
    * ?limit=N : return the first N entries
  * Return : JSON representation of the list of delegations for circonscription X
  * Example : GET /tnac/v1/circonscription/140?limit=3

    [{"code":"51","name":"منوبة"},{"code":"52","name":null},{"code":"53","name":null}]

### Delegation
* GET /DATASET/VERSION/delegation/X/Y
  * X : code of a circonscription
  * Y : code of a delegation
  * Options :
    * ?limit=N : return the first N entries
  * Return : JSON representation of the list of centre for circonscription X and delegation Y
  * Example : GET /tnac/v1/delegation/140/52?limit=2

    [{"code":"001","name":"م إبتدائية رياض 1 دوار هيشر"},{"code":"002","name":null}]

### Centre
* GET /DATASET/VERSION/centre/X/Y/Z
  * X : code of a circonscription
  * Y : code of a delegation
  * Z : code of a centre
  * Options :
    * ?limit=N : return the first N entries
  * Return : JSON representation of the list of bureau for circonscription X, delegation Y and centre Z
  * Example : GET /tnac/v1/centre/140/52/001?limit=2

    [{"code":"01","name":"قاعة 1"},{"code":"02","name":null}]

### Bureau
* GET /DATASET/VERSION/bureau/X/Y/Z/T
  * X : code of a circonscription
  * Y : code of a delegation
  * Z : code of a centre
  * T : code of a bureau
  * Return : JSON representation of the result for bureau T in circonscription X, delegation Y and centre Z
  * Example : GET /tnac/v1/bureau/140/52/001/01

    {"delegation":{"code":"52"},"circonscription":{"code":"140"},"bureau_vote":{"name":"قاعة 1","code":"01"},"centre_vote":{"name":"م إبتدائية رياض 1 دوار هيشر","code":"001"},"resultat":{"listes":[{"num":38,"pourcentage":0,"vote":0,"name":"قائمة حزب الوسط الاجتماعي"},{"num":1,"pourcentage":0.6700000166893005,"vote":5,"name":"قائمة الأمانة و العدالة"},{"num":39,"pourcentage":0,"vote":0,"name":"قائمة الشبابية للأصالة و التجديد و العدالة الاجتماعية"},{"num":2,"pourcentage":0.6700000166893005,"vote":5,"name":"قائمة حزب العدل و التنمية"},{"num":40,"pourcentage":0,"vote":0,"name":"قائمة الجميع"},{"num":3,"pourcentage":0.4000000059604645,"vote":3,"name":"قائمة حزب التحالف من أجل تونس"},{"num":41,"pourcentage":0.4000000059604645,"vote":3,"name":"قائمة حزب تونس الخضراء"},{"num":4,"pourcentage":0.2700000107288361,"vote":2,"name":"قائمة الاتحاد الشعبي الجمهوري"},{"num":42,"pourcentage":0,"vote":0,"name":"قائمة حزب الوفاق الجمهوري"},{"num":5,"pourcentage":0.8100000023841858,"vote":6,"name":"قائمة حزب العمال الشيوعي التونسي (البديل الثوري)"},{"num":43,"pourcentage":0.8100000023841858,"vote":6,"name":"قائمة حزب العدالة الاجتماعي الديمقراطي (ناخو حقي)"},{"num":6,"pourcentage":0.1299999952316284,"vote":1,"name":"قائمة الحزب الليبرالي المغاربي"},{"num":44,"pourcentage":0.1299999952316284,"vote":1,"name":"قائمة حزب الخضر للتقدم (الخضر)"},{"num":7,"pourcentage":0.2700000107288361,"vote":2,"name":"قائمة حزب الانفتاح والوفاء"},{"num":45,"pourcentage":1.210000038146973,"vote":9,"name":"قائمة حزب العمل الوطني الديمقراطي"},{"num":8,"pourcentage":0,"vote":0,"name":"قائمة الحركة الإصلاحية التونسية"},{"num":46,"pourcentage":0.1299999952316284,"vote":1,"name":"قائمة حزب الاستقلال"},{"num":9,"pourcentage":0,"vote":0,"name":"قائمة الحزب الشعبي للحرية و التقدم"},{"num":47,"pourcentage":0.2700000107288361,"vote":2,"name":"قائمة فجر تونس الحرة"},{"num":10,"pourcentage":0,"vote":0,"name":"قائمة حزب النضال التقدمي"},{"num":48,"pourcentage":0.9399999976158142,"vote":7,"name":"قائمة حزب المبادرة"},{"num":11,"pourcentage":0.1299999952316284,"vote":1,"name":"قائمة حزب الثقافة و العمل"},{"num":49,"pourcentage":0.1299999952316284,"vote":1,"name":"قائمة حركة البعث"},{"num":12,"pourcentage":0,"vote":0,"name":"قائمة حزب اليسار الحديث"},{"num":50,"pourcentage":0.1299999952316284,"vote":1,"name":"قائمة  حركة الديمقراطيين الإشتراكيين"},{"num":13,"pourcentage":1.210000038146973,"vote":9,"name":"قائمة  التآلف الجمهوري"},{"num":51,"pourcentage":0.1299999952316284,"vote":1,"name":"قائمة حزب الإصلاح و التنمية"},{"num":14,"pourcentage":0.1299999952316284,"vote":1,"name":"قائمة الائتلاف التحرري"},{"num":52,"pourcentage":48.04999923706055,"vote":357,"name":"قائمة حزب حركة النهضة"},{"num":15,"pourcentage":0.2700000107288361,"vote":2,"name":"قائمة  من أجل جبهة وطنية تونسية"},{"num":53,"pourcentage":0,"vote":0,"name":"قائمة حرية ديمقراطية تنمية"},{"num":16,"pourcentage":1.620000004768372,"vote":12,"name":"قائمة  القطب الديمقراطي الحداثي"},{"num":54,"pourcentage":0.4000000059604645,"vote":3,"name":"قائمة المعركة اليوم والمستقبل غدا"},{"num":17,"pourcentage":0.2700000107288361,"vote":2,"name":"قائمة حزب تونس الكرامة"},{"num":55,"pourcentage":0,"vote":0,"name":"قائمة الأمل"},{"num":18,"pourcentage":0.1299999952316284,"vote":1,"name":"قائمة  التفاؤل لمستقبل واعد"},{"num":56,"pourcentage":1.480000019073486,"vote":11,"name":"قائمة حزب آفاق تونس"},{"num":19,"pourcentage":0.2700000107288361,"vote":2,"name":"قائمة الشعب أراد الحياة"},{"num":57,"pourcentage":0.1299999952316284,"vote":1,"name":"قائمة حزب الحرية و التنمية"},{"num":20,"pourcentage":3.230000019073486,"vote":24,"name":"قائمة  العريضة الشعبية للحرية و العدالة و التنمية"},{"num":58,"pourcentage":1.210000038146973,"vote":9,"name":"قائمة حركة الديمقراطية و التنمية"},{"num":21,"pourcentage":0.4000000059604645,"vote":3,"name":"قائمة  الاتحاد الديمقراطي الوحدوي"},{"num":59,"pourcentage":0.5400000214576721,"vote":4,"name":"قائمة أنا أيضا مواطن"},{"num":22,"pourcentage":0.2700000107288361,"vote":2,"name":"قائمة حزب العمل التونسي"},{"num":60,"pourcentage":0.4000000059604645,"vote":3,"name":"قائمة شباب الحرية"},{"num":23,"pourcentage":0,"vote":0,"name":"قائمة من أجل غد أفضل لجهاتنا"},{"num":61,"pourcentage":0.2700000107288361,"vote":2,"name":"قائمة حزب التحالف الوطني للسلم و النماء"},{"num":24,"pourcentage":0.4000000059604645,"vote":3,"name":"قائمة الاتحاد الوطني الحر"},{"num":62,"pourcentage":9.829999923706055,"vote":73,"name":"قائمة حزب المؤتمر من أجل الجمهورية"},{"num":25,"pourcentage":0.4000000059604645,"vote":3,"name":"قائمة تونس الجديدة"},{"num":63,"pourcentage":0.2700000107288361,"vote":2,"name":"قائمة حركة الوحدة الشعبية"},{"num":26,"pourcentage":0.1299999952316284,"vote":1,"name":"قائمة حركة الديمقراطيين الاشتراكيين (المؤتمر التاسع)"},{"num":64,"pourcentage":3.630000114440918,"vote":27,"name":"قائمة الحزب الديمقراطي التقدمي"},{"num":27,"pourcentage":0,"vote":0,"name":"قائمة الوفاء"},{"num":65,"pourcentage":0.1299999952316284,"vote":1,"name":"قائمة مفتاح العمل و الإصلاح و الإنجاز"},{"num":28,"pourcentage":0.1299999952316284,"vote":1,"name":"قائمة العزة و الكرامة"},{"num":66,"pourcentage":0.5400000214576721,"vote":4,"name":"قائمة الائتلاف الديمقراطي المستقل - طريق السلامة -"},{"num":29,"pourcentage":0.1299999952316284,"vote":1,"name":"قائمة  الحكمة"},{"num":67,"pourcentage":5.25,"vote":39,"name":"قائمة حزب التكتل"},{"num":30,"pourcentage":0,"vote":0,"name":"قائمة حزب المسار التونسي"},{"num":68,"pourcentage":0.4000000059604645,"vote":3,"name":"قائمة حزب الأمانة"},{"num":31,"pourcentage":0.1299999952316284,"vote":1,"name":"قائمة حركة مواطنة"},{"num":69,"pourcentage":0.1299999952316284,"vote":1,"name":"قائمة حركة الشباب التونسي"},{"num":32,"pourcentage":0,"vote":0,"name":"قائمة حزب الوحدة الشعبية"},{"num":70,"pourcentage":0.1299999952316284,"vote":1,"name":"قائمة الشعب ينتصر"},{"num":33,"pourcentage":6.730000019073486,"vote":50,"name":"قائمة الحزب الدستوري الجديد"},{"num":71,"pourcentage":1.080000042915344,"vote":8,"name":"قائمة حركة الشعب الوحدوية التقدمية"},{"num":34,"pourcentage":0.1299999952316284,"vote":1,"name":"قائمة حركة الوطنيين الديمقراطيين"},{"num":72,"pourcentage":0,"vote":0,"name":"قائمة  شباب التأسيس"},{"num":35,"pourcentage":0.8100000023841858,"vote":6,"name":"قائمة حركة الفضيلة"},{"num":73,"pourcentage":0.2700000107288361,"vote":2,"name":"قائمة الوعد الصادق"},{"num":36,"pourcentage":0.5400000214576721,"vote":4,"name":"قائمة حركة الشعب"},{"num":37,"pourcentage":0.8100000023841858,"vote":6,"name":"قائمة حزب المجد"}],"bulletins":{"endommage":4,"dans_urne":820,"correct":743,"non_utilise":266,"delivre":1090,"blancs":55,"annule":22},"electeurs":{"votant":820,"enregistre":895}}}


API Development
---------------
We use [Kanso](http://kan.so/) as an easy tool to manage the CouchDB databases associated with the various API endpoints.

Each of the API metadata or data endpoints is going to consist of a Kanso (couch)app and reside in a separate directory.

Kanso is pretty straightforward and allows for collaboration around couch design documents. It allows simplifies reuse in views/show/list functions which helps maintainability

For detailed instructions of how to setup your own dev environment for one of the API endpoints, please go into the corresponding directory.

Testing
-------
In order to run the full test suite:

    $ npm install
    $ npm test
