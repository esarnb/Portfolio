$(document).ready(function() {
    console.log("JQuery")
    
    fadeInContent()
    createProjects()

})

function fadeInContent() {
    
    $(".fadeIn").hide();
    // $(document).on("click", ".fadeInC", function(e) {
    //     $(this).hide();
    // })
    $(".fadeIn").each(function(index) {
        $(this).delay(200*index).show(1300);
    });
}

function createProjects() {
    
    $.getJSON('projects.json', function(data){
        let container = $("#proj-cards-container");
        
        $.each(data.projects, function(i, x){
            container.append(
`
<div class="ui card cards-light fadeInC ">
    <div class="image  animate__animated animate__fadeInUpBig ">
        <img src="${x.img}">
    </div>
    <div class="content  animate__animated animate__flipInY">
        <a class="header">${x.title}</a>
    
    <div class="description  animate__animated animate__flipInX">
        ${x.desc}
    </div>
    </div>
    <div class="extra content">
        <a href="${x.repo}" target="_blank" class="card-abtn"> <button class="card-btn"> repo </button> </a>  
        <a href="${x.live}" target="_blank" class="card-abtn"> <button class="card-btn"> live </button> </a>
    </div>
</div>
`
            )
        });
    }).catch((rejected) => console.log(rejected))

}