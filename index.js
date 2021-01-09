$(document).ready(function() {

    // Fade in Project Cards one after another
    $('.card').each(function(i) {
        setTimeout(() => {
            $(this).css("visibility", "visible").hide().fadeIn(1000);
        }, i * 250)
    })

    // Run theme changer on each click of the toggle switch
    $("#theme-btn").click(() => {
        $('#theme-text').text() === 'Dark' ? lightTheme() : darkTheme()
    })
    
})


/* Light Theme CSS */

/*  
    #navHeader, .card { background-color: #9bd1bc !important; }

    #page, .navbar-brand, .card { color: rgb(77, 48, 86) !important; }

    body, .child-page { background-color: #c9c6bd !important; }

    .card a { color: rgb(50, 25, 25); }  
*/

function lightTheme() {
    
    //Change the visual text to Light
    $("#theme-text").text("Light") 

    /*
        for keeping previous styling:  function(i,s) { return (s || '') + "color: red"; } 
            where (s || '') means "copy all current styling"; not necessary for themes, needed reset each time.
        else use .css() to circumvent resets of styling [necessary for Project Cards class .card already having styling]
    */
    $(".card").css({"background-color": "#9bd1bc", "color": "rgb(77, 48, 86)"})
    $(".card a").attr('style', function(i,s) { return "color: rgb(50, 25, 25) !important"})
    $("#navHeader").attr('style', function(i,s) { return "background-color: #9bd1bc !important"})

    $("#page, .navbar-brand").each(function(){ 
        $(this).attr('style', function(i,s) { return "color: rgb(77, 48, 86) !important"})
    }); 

    $("body, .child-page").each(function(){ 
        $(this).attr('style', function(i,s) { return "background-color: #c9c6bd !important"})
    }); 
}


/*  Dark Theme  */
/*     
    #navHeader { background-color: #1f2833 !important; }

    #page, .navbar-brand { color: #42ddd3 !important; }

    body, .child-page{ background-color: #2c3531 !important; }

    .card {
        background-color: #8df0fba8;
        color: rgb(90, 11, 126);
    }

    .card a { color: rgb(120, 42, 155); } 
*/

function darkTheme() {
    $("#theme-text").text("Dark")
    
    $("#page, .navbar-brand").each(function(){ 
        $(this).attr('style', function(i,s) { return "color: #42ddd3"})
    }); 
    $("body, .child-page").each(function(){ 
        $(this).attr('style', function(i,s) { return "background-color: #2c3531 !important"})
    }); 
    
    $(".card").css({"background-color": "#8df0fba8", "color": " rgb(90, 11, 126)"})
    $(".card a").attr('style', function(i,s) { return "color: rgb(50, 25, 25) !important"})
    $("#navHeader").attr('style', function(i,s) { return "background-color: #1f2833 !important"})
}