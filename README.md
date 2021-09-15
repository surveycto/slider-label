# Slider with labels
![Preview - slider with different markers](/extras/preview.jpg)


# Description
Allows for a slider with an option for markers or labels.

[![Download now](extras/download-button.png)](https://github.com/surveycto/slider-label/raw/master/slider-label.fieldplugin.zip)

# Features
* Display a slider with markers
* Allow for varying step size
* Allow for displaying the value

# Data Format
The field value will be the last value indicated on the slider. This will be an integer for an [integer field](https://docs.surveycto.com/02-designing-forms/01-core-concepts/03f.field-types-integer.html) or a decimal for a [decimal field](https://docs.surveycto.com/02-designing-forms/01-core-concepts/03g.field-types-decimal.html).

# Default SurveyCTO feature support

Feature / Property |	Support
------------------ |  ---------
Supported field type(s) |	integer, decimal
Default values	| Yes
Constraint message	| Uses default behavior
Required message | Uses default behavior
Read only	| Yes (shows the current value, if present)
media:image	| Yes
media:audio	| Yes
media:video	| Yes

# How to use

1. Download the test form [extras/sample-form](https://github.com/SurveyCTO-field-plug-ins/slider-label/blob/master/extras/sample_form/slider_label_sample.xlsx) from this repo and upload it to your SurveyCTO server.
1. Download the [slider-label.fieldplugin.zip](https://github.com/surveycto/slider-label/raw/master/slider-label.fieldplugin.zip) file from this repo, and attach it to the test form on your SurveyCTO server.
1. Make sure to provide the correct parameters (see below).

# Parameters
The plugin can take up to 5 parameters:

1. `min` - The lowest value in the range of permitted values.
2. `max` - The greatest value in the range of permitted values.
3. `markers` - can take three values.
  -none - slider will have no markers.
  -yes - slider will have markers at set intervals (determined by the step parameter).
  -labels - slider will have labels and markers.
4. `step` - The step attribute is a number that specifies the granularity that the value must adhere to. The default is 1 for integer and 0.1 for decimals.
5. `display_value` (optional) - use this to display the current value of the slider below the slider.

Examples usage is as follows:

`custom-slider-label(min="0", max="100", markers="none")`  
`custom-slider-label(min="0", max="100", markers="yes")`  
`custom-slider-label(min="0", max="100", markers="labels")`  
`custom-slider-label(min="0", max="1", markers="labels", step=0.1)`  
`custom-slider-label(min="0", max="10", markers="labels", step=1, display_value="yes")`  

# More resources
### Sample form
You can find a form definition in this repo here: [extras/sample_form](https://github.com/surveycto/slider-label/raw/master/extras/example-form/Example%20form%20-%20slider-label.xlsx). This form will help you create a sample form to test the functionality of the field plug-in.

### Developer documentation   
* **Source resources** <br>
This field plug-in uses [Slider Pips](https://simeydotme.github.io/jQuery-ui-Slider-Pips/#styling-circles) which you can use for further customization.
* **Developer documentation for field plug-ins** <br>
More instructions for developing and using field plug-ins. https://github.com/surveycto/Field-plug-in-resources
