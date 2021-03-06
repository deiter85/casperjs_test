var x = require('casper').selectXPath;

casper.test.begin('Campus Abbvie ES - Test10 - Mis puntos, Mi cuenta y Sugerencias' , 14, function suite(test) {   
    
    casper.start();

    casper.thenOpen('/es', function() {});

    casper.then(function(){
        casper.click('a[href="https://abbviecampus.com/es/userpoints-view"]');
        this.echo('Clicked in Mis puntos');
    });

    casper.then(function() {
        test.assertTitle('User Points | AbbVie');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITULO');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="block-system-main"]'), 'Find an element matching: TEXTO');
    });

    casper.then(function(){
        casper.click('a[href="https://abbviecampus.com/es/user"]');
        this.echo('Clicked in Mi cuenta');
    });

    casper.then(function() {
        test.assertTitle('casper_test | AbbVie');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITULO');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="group-left"]/div/div[@class="field-items"]'), 'Find an element matching: IMAGEN USUARIO');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="group-right"]'), 'Find an element matching: DATOS USUARIO');
    });

    casper.then(function(){
        casper.click('a[href="/es/myuserpoints"]');
        this.echo('Clicked in Ver transacciones de puntos');
    });

    casper.then(function() {
        test.assertTitle('Puntos para casper_test | AbbVie');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITULO');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="userpoints-myuserpoints-list sticky-enabled tableheader-processed sticky-table"]'), 'Find an element matching: TABLA PUNTOS');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="userpoints-myuserpoints-total sticky-enabled tableheader-processed sticky-table"]'), 'Find an element matching: TABLA TOTAL PUNTOS');
    });

    casper.then(function(){
        casper.click('a[href="/es/suggestions"]');
        this.echo('Clicked in Sugerencias');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITULO');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="pre-instructions"]'), 'Find an element matching: TEXTO');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="suggestions-entityform-edit-form"]'), 'Find an element matching: FORMULARIO');
    });

    casper.run(function() {
        test.done();
    });

});