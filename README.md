# Slider with labels
![Preview - slider with different markers](/extras/preview.jpg)


# Description
Allows for a slider with an option for markers or labels

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
To use this plug-in as-is, just download the [slider-label.fieldplugin.zip](https://github.com/SurveyCTO-field-plug-ins/slider-label/blob/master/slider-label.fieldplugin.zip) file from this repo, and attach it to your form.

To create your own field plug-in using this as a template, follow these steps:

1. Fork this repo

2. Make changes to the files in the `source` directory.  

    -__Note:__ be sure to update the `manifest.json` file as well.

3. Zip the updated contents of the `source` directory.

4. Rename the .zip file to *yourpluginname*.fieldplugin.zip (replace *yourpluginname* with the name you want to use for your plug-in).

5. You may then attach your new .fieldplugin.zip file to your form as normal.

# Parameters
There should be five parameters included.
1. min - The lowest value in the range of permitted values
2. max - The greatest value in the range of permitted values
3. markers - can take three values
  -none - slider will have no markers
  -yes - slider will have markers at set intervals (determined by the step parameter)
  -labels - slider will have labels and markers.
4. step - The step attribute is a number that specifies the granularity that the value must adhere to. The default is 1 for integer and 0.1 for decimals
5. display_value (optional) - use this to display the current value of the slider below the slider.

Examples would be...    
      `custom-slider(min="0", max="100", markers="none")`  
      `custom-slider(min="0", max="100", markers="yes")`  
      `custom-slider(min="0", max="100", markers="labels")`  
      `custom-slider(min="0", max="1", markers="labels", step=0.1)`  
      `custom-slider(min="0", max="10", markers="labels", step=1, display_value="yes")`  

# More resources
-__Test form__
You can find a form definition in this repo here: [extras/sample_form](https://github.com/SurveyCTO-field-plug-ins/slider-label/blob/master/extras/sample_form/slider_label_sample.xlsx). This form will help you create a sample form to test the functionality of the plugin.

-__Developer documentation__    
The plugin uses [Slider Pips](https://simeydotme.github.io/jQuery-ui-Slider-Pips/#styling-circles) which you can use for further customization  
More instructions for developing and using field plug-ins can be found here: https://github.com/surveycto/Field-plug-in-resources
