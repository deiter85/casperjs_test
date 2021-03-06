var x = require('casper').selectXPath;

casper.test.begin('Campus Abbvie UK - Test21 - Homepage', 13, function suite(test) {   
	
    casper.start();

    casper.thenOpen('/uk', function() {}); 

    casper.then(function() {
   	    test.assertExists(x('//*[@id="block-views-view-news-block-1"]'), 'Find an element matching: NEWS FRAME');
    });
    
    casper.then(function(){		
 		test.assertExists(x('//*[@id="block-views-blog-block-last-posts"]'), 'Find an element matching: BLOG FRAME');
 	});

    casper.then(function(){     
        test.assertExists(x('//*[@id="block-abbvie-best-rated-courses-abbvie-best-rated-courses-home"]'), 'Find an element matching: BEST RATED COURSES FRAME');
    });

 	casper.then(function(){
 		test.assertExists(x('//*[@id="block-views-area-news-block-1"]'), 'Find an element matching: AREA NEWS FRAME');
 	});
    
    casper.then(function(){
 		test.assertExists(x('//*[@id="search-block-form"]'), 'Find an element matching: SEARCH FROM');
 	});
    
    casper.then(function(){
 		test.assertExists(x('//*[@id="block-views-courses-block-1"]'), 'Find an element matching: RECOMMENDED FRAME');
 	});
    
    casper.then(function(){
 		test.assertExists(x('//*[@id="block-views-usuario-block"]'), 'Find an element matching: USER INFORMATION FRAME');
 	});
    
    casper.then(function(){
 		test.assertExists(x('//*[@id="views_slideshow_cycle_teaser_section_courses-block_1"]'), 'Find an element matching: RECOMMENDED ITEM');
 	});

    casper.then(function(){
        test.assertExists(x('//*[@id="block-customblocks-image-wiki"]'), 'Find an element matching: IMAGE LINK WIKI');
    });

    casper.then(function(){
        test.assertExists(x('//*[@id="block-customblocks-image-suggestions"]'), 'Find an element matching: IMAGE SUGGESTIONS FRAME');
    });

    casper.then(function(){
        test.assertExists(x('//*[@id="block-tagclouds-3"]'), 'Find an element matching: TAG FRAME');
    });
    
    casper.then(function(){
        test.assertExists(x('//*[@class="site-logo"]'), 'Find an element matching: LOGO');
    });

    casper.then(function(){
        test.assertExists(x('//*[@id="footer"]'), 'Find an element matching: FOOTER');
    });
  	
    casper.run(function() {
   		test.done(); 
  	}); 

});