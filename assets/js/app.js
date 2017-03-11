$(document).ready(function() {
    var $searchQuery = $('#search-term');
    var $numberRecords = $('#number-records');
    var $startYear = $('#start-year');
    var $endYear = $('#end-year');

    var searchBtn = $('#search-btn');
    var clearBtn = $('#clear-btn');





    /* TODO 

    	
    	foreach result append results field
		sanitize year input

    */
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    
    url += '?' + $.param({
        'api-key': "9707b10b5ab44dada00194c572da1017",
        'q': $searchQuery.value,
        'begin_date': $startYear.value,
        'end_date': $endYear.value
    });
    

    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(result) {
        console.log(result);
    });







});