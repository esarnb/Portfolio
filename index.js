
$(document).ready(function() {
    console.log("JQuery")
    
    $.getJSON('projects.json', function(data){
        let container = $("#proj-cards-container");
        
        $.each(data.projects, function(i, x){
            container.append(
`
<div class="ui card cards-light">
    <div class="image">
        <img src="${x.img}">
    </div>
    <div class="content">
        <a class="header">${x.title}</a>
    
    <div class="description">
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
})
