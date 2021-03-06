var x = require('casper').selectXPath;

casper.test.begin('Comprobar pagina ASPgems UK - Test37 - Services', 5, function suite(test) { 
  casper.start();
  casper.thenOpen('/en', function() {
    casper.click("a[href='/en/services']"); //hacer click en presupuesto
  });
  casper.then(function(){   
    test.assertUrlMatch('https://aspgems.com/en/services', 'Direccion URL correcta'); //comprobar la direccion URL
  });
  casper.then(function(){ 
    test.assertExists(x('//*[@class="block-content content"]'), 'Se encuentra el titulo'); //comprobar el titulo
  });
  casper.then(function(){ 
    test.assertExists(x('//*[@class="subtitle"]'), 'Se encuentra el subtitulo'); //comprobar el subtitulo
  });
  casper.then(function(){ 
    test.assertExists(x('//div[@id="content"]/div/div/div[@class="view-filters"]'), 'Se encuentra el cuadro de eleccion entre servicios profesionales o formacion'); //comprobar cuadro de eleccion entre servicios profesionales o formacion
  });
  casper.then(function(){ 
    test.assertExists(x('//div[@id="content"]/div/div/div[@class="view-content"]'), 'Se encuentra la lista de servicios profesionales'); //comprobar lista de servicios profesionales
  });
  casper.then(function(){ 
    casper.click('input[name="field_service_type_value"][value="2"]'); //hacer click en formacion
  });
  casper.wait(1000, function() {});
  casper.run(function() {
    casper.echo("Test finalizado"); //mensaje
    test.done();
  });
});