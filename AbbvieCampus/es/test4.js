var editor_allow = ["/es/node/add/plan-de-formaci-n-anual",
					"/es/node/add/classroom",
					"/es/node/add/help",
					"/es/node/add/blog-article",
					"/es/node/add/digital-certification",
					"/es/node/add/contact",
					"/es/node/add/course-request",
					"/es/node/add/course",
					"/es/node/add/link",
					"/es/node/add/faqs",
					"/es/node/add/forum",
					"/es/node/add/news",
					"/es/node/add/schedule-course",
					"/es/node/add/help-video",
					"/es/node/add/add-product",
                    "/es/node/add/product"];
var indice = 0;

casper.test.begin('Campus Abbvie ES - Test4 - Nodos add', 16, function suite(test) {   
  
  casper.start();

  casper.thenOpen('/es', function() {});
  
  for (i = 0; i < editor_allow.length; i++) {     
    casper.thenOpen(editor_allow[i], function() {
      	this.echo('⌚ Opened ' + editor_allow[indice++]);
      	test.assertHttpStatus(200);
    });
  }
  
  casper.run(function() {
  		test.done();
  });

});