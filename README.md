# Stream One: Front End Project

## About

This project has been re-deployed to this repository. For earlier attempts/work, please see the original deployment at this location:

https://github.com/bransfieldjack/StreamOneProject-master

This is a portfolio site for a well known artist from Cork City, Chris O'Shea. Chris is the owner of Pebble Lyrics, a locally based art company specialising in unique, custom, hand-made pebble pictures. 
All of the materials are sourced locally and from renewable materials where possible. 
The purpose of the site is to showcase Chris' work. 
For this site, we agreed that the single scrolling page layout would be most approriate. 
This approach allowed for a more structured flow of information being recived from the site by the user. 
The single scrolling site is also great for mobile use, however excessive scrolling was one problem I encountered. 
To mitigate this, I have added seperate HTML pages where necessary. (Contact form & Portfolio etc.)

The final,completed project can be viewed here:

https://bransfieldjack.github.io/

## Technology Used

 * Sublimetext Text Editor
 * Cloud 9 IDE
 * HTML5
 * CSS
 * Bootstrap v4.1.3
 * jQuery v3.3.1

## Other Sources

Third party sources used in this project:

 - https://www.w3schools.com/
 - https://startbootstrap.com/template-categories/all/
 - Prior knowledge of testing with Selenium (Current role)

## Testing

### Automated Testing

Automated testing for this project was carried out using Selenium Web driver in microsoft visual studio with C#. 
Unit testing was used to carry out form validation as well as verifying that the site can be opened using the respective web drivers, and that navigation links on the site can be access. 

The results of the unit tests flagged a an issues with the navigation bar on every page on the site. 
During an earlier commit, the 'stylish-portfolio.min.js' file had been renamed to 'stylish-portfolio.js'. 
This was causing the navbar to become completely unresponsive in production (github pages) but that was not the case in staging, as it worked as normal in Cloud 9 IDE. 

![](https://s3-ap-southeast-2.amazonaws.com/stream-one-project/unit_testing_navbar_issue.png)

### Manual Testing (Web Application Testing):

Linking/pages:

 - Checked all outgoing (page to page) and internal links (form submission button).
 - Checked all "jumping" links on the index.html page. The page scrolls as expected. 
 - Confirmed that no orphan pages exist as part of this project. (Un-used pages left over from the development process)
 - Tested form submission link and form validation. The form submission button should redirect to a locally installed email application - confirmed that is the case. 
	
Form Testing:

 - Confirmed that form validation is working as expected on the contact.html page. Users cannot submit a form without a valid email address. 
	
Cookies Testing:

 - Disabled cookies and confirmed that the site behaves as per normal. 
 - No observable effect on application security after disabling cookies during or outside of a session. 

HTML Validation:

 - Validated all HTML code using: https://validator.w3.org/ (Fixed minor errors/warnings)

Database Testing

 - Not applicable.

Ease of Learning:

 - The scrolling nature of the index.html page is intuitive. 

Navigation:

 - The site is relatively easy to navigate. The Navbar exists on every page and irrelevant links are prohibited where required. 
 - I believe the site to be subjectively satisfying. It fulfills its purpose well and is visually pleasing. The site is not overladen with unecessary content. 

Compatability:

 - Cross browser compatability testing has been conducted using Chrome, Firefox, Edge and Opera. 
 - Mobile compatability testing has been undertaken to ensure that the site works well on mobile devices. Issues with the modal "close" button have been resolved via this method. 

## Deployment

