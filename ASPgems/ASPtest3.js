var x = require('casper').selectXPath;

casper.test.begin('Comprobar pagina ASPgems - Test3 - Blog', 8, function suite(test) {    
  	casper.start();
    casper.thenOpen('/', function() {
    	  casper.click("a[href='/blog']"); //hacer click en blog
  	});
  	casper.then(function(){		
 	  	  test.assertUrlMatch('https://aspgems.com/blog', 'Direccion URL correcta'); //comprobar la direccion URL
 	  });
  	casper.then(function(){
 	  	  test.assertExists(x('//*[@class="block-content content"]'), 'Se encuentra el titulo'); //comprobar el titulo
  	});
  	casper.then(function(){
 	  	  test.assertExists(x('//*[@class="subtitle"]'), 'Se encuentra el subtitulo'); //comprobar el subtitulo
 	  });
  	casper.then(function(){
 	  	  test.assertExists(x('//*[@id="block-system-main"]'), 'Se encuentra la lista de post'); //comprobar lista de post
 	  });
  	casper.then(function(){
 	  	  test.assertExists(x('//*[@id="block-views-tags-block"]'), 'Se encuentra la lista de etiquetas'); //comprobar lista de etiquetas
 	  });
  	casper.then(function(){
 	  	  test.assertExists(x('//*[@id="block-mailchimp-signup-sign-up"]'), 'Se encuentra el cuadro recibit novedades'); //comprobar cuadro recibir novedades
 	  });
  	casper.then(function(){
 	  	  test.assertExists(x('//*[@id="block-views-posts-block-4"]'), 'Se encuentra la lista de ultimos post'); //comprobar lista ultimos post
 	  });
  	casper.then(function(){	  	 	  	
 	  	  test.assertExists(x('//*[@id="block-customblocks-block-flipboard"]'), 'Se encuentra el cuadro nuestra revista'); //comprobar cuadro nuestra revista
	  });
  	casper.run(function() {
    	  casper.echo("Test finalizado"); //mensaje
    	  test.done();
  	});
});