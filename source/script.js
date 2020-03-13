$('.ui-slider-handle').draggable();
// Declare some variables to use
var first_view = false;
var last_view = false;
var rest_view = false;

//collect parameters entered in Form Definition
var parameters = fieldProperties.PARAMETERS;

//get parameter values and set the max and min based on these
var entered_min = Number(parameters[0].value);
var entered_max = Number(parameters[1].value);
var entered_view = parameters[2].value;

if(entered_view === "yes"){
    first_view = "pip";
    last_view = "pip";
    rest_view = "pip"
}
else if (entered_view === "labels"){
    first_view = "label";
    last_view = "label";
    rest_view = "label"
}
else if (entered_view ===  "none"){
    first_view = false;
    last_view = false;
    rest_view = false
}

$(".slider")
    .slider({
        min: entered_min,
        max: entered_max
    })
    .slider("pips", {
        first: first_view,
        last: last_view,
        rest: rest_view
    });

    $(".slider").on("slidechange", function( e, ui ) {
        /*use this if you want to display the changing value of the slider on the screen - check the template.html too
        $( "#slider-value" ).html(  $(".slider").slider("value") )*/
        setAnswer( $(".slider").slider("value"));
});

//Define what happens when the user attempts to clear the response
/*function clearAnswer() {
    $( "#slider-value" ).html(  $(".slider").slider("value") );
} */

//If the field is not marked readonly, then focus on the field
function setFocus() {
    if(!fieldProperties.READONLY){
        $(".slider").focus();
    }
}
