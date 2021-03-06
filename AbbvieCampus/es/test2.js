var x = require('casper').selectXPath;

casper.test.begin('Campus Abbvie ES - Test2 - Catalogo y Aula', 8, function suite(test) {

    casper.start();

    casper.thenOpen('/es', function() {});

    casper.then(function(){
        casper.click('a[href="/es/catalogue"]');
        this.echo('Clicked in Catalogo');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITULO');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="views-exposed-form-courses-page"]'), 'Find an element matching: CUADRO DEL FORMULARIO');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="view-content"]'), 'Find an element matching: LISTA DE CURSOS');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="pager"]'), 'Find an element matching: PAGINAS');
    });

    casper.then(function(){
        casper.click('a[href="/es/list-of-classrooms"]');
        this.echo('Clicked in Aula');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITULO');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="view-header"]'), 'Find an element matching: TEXTO');
    });

    casper.then(function() {
        test.assertExists(x('//form[@id="views-exposed-form-classrooms-page"]'), 'Find an element matching: FORMULARIO BUSQUEDA AULA');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="view-content"]'), 'Find an element matching: LISTA DE AULAS');
    });

    casper.run(function() {
        test.done();
    });

});