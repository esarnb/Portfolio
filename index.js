$(document).ready(function() {
    $('.card').each(function(i) {
        setTimeout(() => {
            $(this).css("visibility", "visible").hide().fadeIn(1000);
        }, i * 250)
    })

    // $("#proj-tab").onClick(() => {
    //     $('.card').each(function(i) {
    //         setTimeout(() => {
    //             $(this).css("visibility", "visible").hide().fadeIn(1000);
    //         }, i * 250)
    //     })
    // })

})