var x = require('casper').selectXPath;

casper.test.begin('Campus Abbvie ES - Test7 - Formacion Anual, Contactos y FAQs',9, function suite(test) {   
	
    casper.start();

    casper.thenOpen('/es', function() {});

    casper.then(function(){
        casper.click('a[href="/es/annual-training"]');
        this.echo('Clicked in Formacion anual');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITULO');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="view-content ui-accordion ui-widget ui-helper-reset"]'), 'Find an element matching: LISTA DOCUMENTOS');
    });

    casper.then(function(){
        casper.click('a[href="/es/contacts"]');
        this.echo('Clicked in Contactos');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITULO');
    });

    casper.then(function() {
        test.assertExists(x('//div[@id="block-system-main"]/div/div[@class="view-header"]'), 'Find an element matching: TEXTO');
    });

    casper.then(function() {
        test.assertExists(x('//div[@id="block-system-main"]/div/div[@class="view-content"]/div[@class="item-list"]'), 'Find an element matching: CUADRO CONTACTOS');
    });

    casper.then(function() {
        test.assertExists(x('//div[@class="view-footer"]'), 'Find an element matching: CUADRO AREA CONTACTOS');
    });

    casper.then(function(){
        casper.click('a[href="/es/faqs"]');
        this.echo('Clicked in FAQs');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITULO');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="view-header"]'), 'Find an element matching: TEXTO');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="view-content ui-accordion ui-widget ui-helper-reset"]'), 'Find an element matching: LISTA PREGUNTAS FRECUENTES');
    });

    casper.run(function() {
        test.done();
    });

});