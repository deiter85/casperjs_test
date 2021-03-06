var x = require('casper').selectXPath;

casper.test.begin('Campus Abbvie UK - Test24 - Rewards/Information and Rewards/My points', 20, function suite(test) {   
	
    casper.start();

    casper.thenOpen('/uk', function() {});

    casper.then(function(){
        casper.click('a[href="/uk/point-program"][class=sf-depth-2]');
        this.echo('Clicked in Rewards/Information');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITLE');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="block-system-main"]'), 'Find an element matching: TEXT');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="items"]'), 'Find an element matching: ITEMS');
    });

    casper.then(function(){
        casper.click('a[href="redeem-your-user-points"]');
        this.echo('Clicked in Redeem your user points from Rewards/Information');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/redeem-your-user-points');
    });

    casper.then(function(){
        casper.click('a[href="/uk/redeem-your-user-points"]');
        this.echo('Clicked in Rewards/My points');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITLE');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="view-header"]'), 'Find an element matching: TEXT');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="view-content"]'), 'Find an element matching: PRODUCTS FRAME');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="numpoints"]'), 'Find an element matching: POINTS FRANE');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="numberandlabel"]'), 'Find an element matching: POINTS BOX');
    });

    casper.then(function() {
        test.assertExists(x('//*[@class="item-list"]'), 'Find an element matching: LIST OF PRODUCTS');
    });

    casper.then(function(){
        casper.click('input[type="submit"][id="edit-submit--2"]');
        this.echo('Clicked in Redeem');
    });

    casper.wait(50, function() {});

    casper.then(function() {
        test.assertTitle('Checkout | AbbVie');
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/checkout/2');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="page-title"]'), 'Find an element matching: TITLE');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="commerce-checkout-form-checkout"]'), 'Find an element matching: FORM');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="edit-cart-contents"]'), 'Find an element matching: SHOPPING CART CONTENTS FRAME');
    });

    casper.then(function() {
        test.assertExists(x('//*[@id="edit-customer-profile-billing"]'), 'Find an element matching: BILLING INFORMATION');
    });

    casper.then(function(){
        casper.click('input[type="submit"][id="edit-cancel"]');
        this.echo('Clicked in Cancel');
    });

    casper.then(function() {
        test.assertHttpStatus(200);
        test.assertUrlMatch('https://abbviecampus.com/uk/');
    });

    casper.run(function() {
        test.done();
    });

});