/* Initialise a variable called modal where the 
modal is retrieved/stored using JQuery. */

var modal = document.getElementById('Modal');
        
/* Retreive the image from the class tag in my HTML 
and insert it into a variable in the modal. 
Includes styling of the modal, and code to pass 
the image from the modal to my javascript. 
modal.style.display activates/shows the modal 
and the newSrc variable stores the image passed. */

var image = $('.galleryImage');
var modalImage = $("#modalWindow");

$('.galleryImage').click(function(){
modal.style.display = "block";
var newSrc = this.src;
modalImage.attr('src', newSrc);
});
        
/* Retrieves the span element - 'close' button from the 
modal by using its class name. Originally I had tried to 
make this work by retrieving the images ID from the img tag. 
This allowed for one img to be displayed in the modal. 
Using the class name allows for multiple images.*/
var span = document.getElementsByClassName("close")[0];
        
/* This actions the modal close button to close the modal once clicked. */
span.onclick = function() {
modal.style.display = "none";
}