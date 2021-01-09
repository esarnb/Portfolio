$(document).ready(function() {
    $('.card').each(function(i) {
        setTimeout(() => {
            $(this).css("visibility", "visible").hide().fadeIn(1000);
        }, i * 250)
    })


    $("#theme-btn").click(() => {
        console.log($("#theme-text").text());

        // Fetch all classes of a certain div
        //document.getElementById('divId').className.split(/\s+/);
        // var classList = $('#theme-text').attr('class').split(/\s+/);
        
        // Switch between dark and light based on current theme-text content.
        $('#theme-text').text() === 'Dark' ? lightTheme() : darkTheme()
    })
    
})
/* Light Theme   */

/*  
    #navHeader, .card {
        background-color: #9bd1bc !important;
    }

    #page, .navbar-brand, .card {
        color: rgb(77, 48, 86) !important;
    }

    body, .child-page{
        background-color: #c9c6bd !important;
    }

    .card a {
        color: rgb(50, 25, 25);
    }  
*/

function lightTheme() {
    $("#theme-text").text("Light")//.attr("class", "Light")

    $("#navHeader, .card").each(function(){ 
        $(this).attr('style', function(i,s) { return /*(s || '') + */ "background-color: #9bd1bc !important"})
    }); 
    $("#page, .navbar-brand, .card").each(function(){ 
        $(this).attr('style', function(i,s) { return /*(s || '') + */ "color: rgb(77, 48, 86) !important"})
    }); 
    $("body, .child-page").each(function(){ 
        $(this).attr('style', function(i,s) { return /*(s || '') + */ "background-color: #c9c6bd !important"})
    }); 
    $(".card a").attr('style', function(i,s) { return /*(s || '') + */ "color: rgb(50, 25, 25) !important"})

    // $("#navHeader, .card").each(function(){ 
    //     $(this).css({"background-color": "#9bd1bc !important"})
    // }); 
    // $("#page, .navbar-brand, .card").each(function(){ 
    //     $(this).css({"color": "rgb(77, 48, 86) !important"})
    // }); 
    // $("body, .child-page").each(function(){ 
    //     $(this).css({"background-color": "#c9c6bd !important"})
    // }); 
    // $(".card a").css({"color": "rgb(50, 25, 25) !important"})
}



/*  Dark Theme  */
/*     
    #navHeader {
        background-color: #1f2833 !important;
    }

    #page, .navbar-brand {
        color: #42ddd3 !important;
    }

    body, .child-page{
        background-color: #2c3531 !important;
    }

    .card {
        background-color: #8df0fba8;
        color: rgb(90, 11, 126);
    }

    .card a {
        color: rgb(120, 42, 155);
    } 
*/

function darkTheme() {
    $("#theme-text").text("Dark")//.attr("class", "Dark")


    $("#navHeader").attr('style', function(i,s) { return /*(s || '') + */ "background-color: #1f2833 !important"})
    $("#page, .navbar-brand").each(function(){ 
        $(this).attr('style', function(i,s) { return /*(s || '') + */ "color: #42ddd3"})
    }); 
    $("body, .child-page").each(function(){ 
        $(this).attr('style', function(i,s) { return /*(s || '') + */ "background-color: #2c3531 !important"})
    }); 
    $(".card").attr('style', function(i,s) { return /*(s || '') + */ "color: rgb(90, 11, 126) !important; background-color: #8df0fba8 !important"})
    $(".card a").attr('style', function(i,s) { return /*(s || '') + */ "color: rgb(50, 25, 25) !important"})

    // $("#navHeader").css({"background-color": "#1f2833 !important"})
    // $("#page, .navbar-brand").each(function(){ 
    //     $(this).css({"color": "#42ddd3"})
    // }); 
    // $("body, .child-page").each(function(){ 
    //     $(this).css({"background-color": "#2c3531 !important"})
    // }); 
    // $(".card").css({"color": " rgb(90, 11, 126) !important", "background-color": "#8df0fba8 !important"})
    // $(".card a").css({"color": "rgb(50, 25, 25) !important"})
}