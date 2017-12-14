# jquery-to-do-list

This is a simple to do list app built with jQuery. The main aim of this project was to become more familiar with the jQuery library.

The app has a decent level of styling. It is responsive, so works cleanly across devices of all shapes and sizes. The site uses a Google Font, Roboto, as well Font Awesome icons to improve the look and feel. Also, the background is created using CSS gradients and the box-shadow property is used to create a more polished appearance. The adding and removal of to do items is aided by CCS animation. 

The site incorporates hover effects such as displaying the bin icon when a user wishes to delete an item. Once clicked, it will will remove the parent li element. This required a delegation event. I used event.stopPropagation() in the event listener to prevent the event ‘bubbling’ up the DOM tree further than required. 

Some animation of the app is achieved through jQuery fading and sliding functionality. There is also a cross-out feature, which is achieved using the jQuery toggleClass() function. If a user clicks on the text of an item, it will manipulate the class, so that it has a strike through the item. A user can toggle this on and off.  

New items can be added by typing them into the input box and hitting the enter key. This is keypress events as well utilising the jQuery append method. The input form can be hidden by clicking the plus symbol. 
