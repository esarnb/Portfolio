
$(document).ready(function() {
    console.log("JQuery")
    
    $.getJSON('projects.json', function(data){
        $.each(data.projects, function(i, x){
            console.log(x);
        });
    }).catch((rejected) => console.log(rejected))
})
