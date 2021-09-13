/* global $, fieldProperties, setAnswer, getPluginParameter, clearAnswer, getMetaData, setMetaData */

$('.ui-slider-handle').draggable()

// Declare some variables to use
var firstView = false
var lastView = false
var restView = false
var step = getPluginParameter('step')

var currentValue = fieldProperties.CURRENT_ANSWER

// Get parameter values and set the max and min based on these
var enteredMin = getPluginParameter('min')
var enteredMax = getPluginParameter('max')
var enteredView = getPluginParameter('markers')
var displayValue = getPluginParameter('display_value')

if (step == null) {
  step = 1
}

enteredMin = parseInt(enteredMin)
enteredMax = parseInt(enteredMax)
step = Number(step)

if (enteredView === 'yes') {
  firstView = 'pip'
  lastView = 'pip'
  restView = 'pip'
} else if (enteredView === 'labels') {
  firstView = 'label'
  lastView = 'label'
  restView = 'label'
} else if (enteredView === 'none') {
  firstView = false
  lastView = false
  restView = false
}

if (step != null) {
  step = getPluginParameter('step')
}

$('.slider')
  .slider({
    min: enteredMin,
    max: enteredMax,
    step: step
  })
  .slider('pips', {
    first: firstView,
    last: lastView,
    rest: restView
  })

$('.slider').on('slidechange', function (e, ui) {
  // Use this if you want to display the changing value of the slider on the screen - check the template.html too
  if (displayValue != null) {
    $('#slider-value').html($('.slider').slider('value'))
    console.log($('.slider').slider('value'))
  }
  setAnswer(Number($('.slider').slider('value')))
})

if (currentValue != null) {
  Number($('.slider').slider('value', currentValue))
}

// Define what happens when the user attempts to clear the response
/* function clearAnswer() {
    $( "#slider-value" ).html(  $(".slider").slider("value") );
} */

// If the field is not marked readonly, then focus on the field
function setFocus () {
  if (!fieldProperties.READONLY) {
    $('.slider').focus()
  }
}
