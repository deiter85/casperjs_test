var x = require('casper').selectXPath;

casper.test.begin('Campus Abbvie ES - Test6 - Programa de Puntos/Informacion y Programa de Puntos/Canjear Puntos', 20, function suite(test) {   
	
    casper.start();

    casper.thenOpen('/es', function() {});

    casper.then(function(){
        casper.click('a[href="/es/point-program"][class=sf-depth-2]');
        this.echo('Clicked in Programa de puntos/Informacion');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITULO');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="block-system-main"]'), 'Find an element matching: TEXTO');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="items"]'), 'Find an element matching: ITEMS');
    });

    casper.then(function(){
        casper.click('a[href="redeem-your-user-points"]');
        this.echo('Clicked in Redeem your user points en Programa de puntos/Informacion');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/redeem-your-user-points');
    });

    casper.then(function(){
        casper.click('a[href="/es/redeem-your-user-points"]');
        this.echo('Clicked in Programa de puntos/Canjear puntos');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITULO');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="view-header"]'), 'Find an element matching: TEXTO');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="view-content"]'), 'Find an element matching: CUADRO PRODUCTOS');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="numpoints"]'), 'Find an element matching: CUADRO PUNTOS');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="numberandlabel"]'), 'Find an element matching: RECUADRO PUNTOS');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="item-list"]'), 'Find an element matching: LISTA PRODUCTOS');
    });

    casper.then(function(){
        casper.click('input[type="submit"][id="edit-submit--4"]');
        this.echo('Clicked in Canjear');
    });

    casper.wait(50, function() {});

    casper.then(function() {
        test.assertTitle('Tramitar compra | AbbVie');
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/checkout/1');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITULO');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="commerce-checkout-form-checkout"]'), 'Find an element matching: FORMULARIO');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="edit-cart-contents"]'), 'Find an element matching: CUADRO CONTENIDO DE CESTA');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="edit-customer-profile-billing"]'), 'Find an element matching: CUADRO INFORMACION DE ENVIO');
    });

    casper.then(function(){
        casper.click('input[type="submit"][id="edit-cancel"]');
        this.echo('Clicked in Cancelar');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/es/');
    });

    casper.run(function() {
        test.done();
    });

});