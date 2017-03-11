$(document).ready(function() {
    var $searchQuery = $('#search-term');
    var $numberRecords = $('#number-records');
    var $startYear = $('#start-year');
    var $endYear = $('#end-year');
    var $resultsDiv = $('#resultsDiv');
    var searchBtn = $('#search-btn');
    var clearBtn = $('#clear-btn');

    clearBtn.on('click', function(){
    	$searchQuery.empty();
    	$numberRecords.empty();
    	$startYear.empty();
    	$endYear.empty();
    	$resultsDiv.empty();
    })



    /* TODO 

    	
    	foreach result append results field
		

    */

    
    $startYear.value = $startYear.value + "0101";
	$endYear.value = $endYear.value + "0101";





    searchBtn.on('click', function() {
    	
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

        url += '?' + $.param({
            'api-key': "9707b10b5ab44dada00194c572da1017",
        	'q': $searchQuery.value,
         	'begin_date': $startYear.value,
         	'end_date': $endYear.value,
         	'page': 0
        });


        $.ajax({
            url: url,
            method: 'GET',
        }).done(function(response) {
            
            results = response.response.docs;
            


            $.each(results, function(i){
            	


            });

        });
    });



});
