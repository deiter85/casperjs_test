var editor_allow = ["/uk/node/add/plan-de-formaci-n-anual",
					"/uk/node/add/classroom",
					"/uk/node/add/help",
					"/uk/node/add/blog-article",
					"/uk/node/add/digital-certification",
					"/uk/node/add/contact",
					"/uk/node/add/course-request",
					"/uk/node/add/course",
					"/uk/node/add/link",
					"/uk/node/add/faqs",
					"/uk/node/add/forum",
					"/uk/node/add/news",
					"/uk/node/add/schedule-course",
					"/uk/node/add/help-video",
					"/uk/node/add/add-product",
                    "/uk/node/add/product"];
var indice = 0;

casper.test.begin('Campus Abbvie UK - Test22 - Nodes add', 16, function suite(test) {   
  
  casper.start();

  casper.thenOpen('/uk', function() {});
  
  for (i = 0; i < editor_allow.length; i++) {     
    casper.thenOpen(editor_allow[i], function() {
      	this.echo('⌚ Opened the ' + editor_allow[indice++]);
      	test.assertHttpStatus(200);
    });
  }
  
  casper.run(function() {
  		test.done();
  });

});