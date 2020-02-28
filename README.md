# Slider With Labels
![Preview - slider with different markers](/extras/preview.jpg)


# Description
Allows for a continuous slider with an option for markers or labels

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
There should be three parameters included. The first represents the minimum value of the range, the second represents the maximum value of the range and the third what kind of markers you want or if you dont want markers at all - see previews above. For example to create a slider range from 0 to 100, you can use this apprearance depending on markers needed.  
      `custom-slider(A="0", B="100", C="none")`  
      `custom-slider(A="0", B="100", C="pips")`  
      `custom-slider(A="0", B="100", C="labels")`  

# More Resources
-__Test form__
You can find a form definition in this repo here: extras/sample_form. This form will help you create a sample form to test the functionality of the plugin.

-__Developer documentation__    
The plugin uses [Slider Pips](https://simeydotme.github.io/jQuery-ui-Slider-Pips/#styling-circles) which you can use for further customization  
More instructions for developing and using field plug-ins can be found here: https://github.com/surveycto/Field-plug-in-resources
