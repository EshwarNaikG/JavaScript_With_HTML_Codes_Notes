// What is JavaScript?
/* JavaScript is a programming language that is used for converting
 static web pages to interactive and dynamic web pages. 
 
 JavaScript is an interpreted programming language that runs on the client-side
 (browser) of the web. 
*/

// Console log example
/* Console.log is used to print messages in the browser console. */
console.log("Welcome to JavaScript!");

// Alert example
/* Alert is used to show a popup message in the browser. */
alert("This is an alert message!");

// JavaScript can be included in HTML using three ways:
// 1. Inline JavaScript
// 2. Internal JavaScript
// 3. External JavaScript


// 1. Inline JavaScript
/* Inline JavaScript is written directly within an HTML element's
 attribute using the "on" event handlers. */
function showInlineAlert() 
{
    alert("This is an inline JavaScript alert!");
}   

// 2. Internal JavaScript
/* Internal JavaScript is written within the <script> tags
 in the head or body section of the HTML document. */
function showInternalAlert() 
{
    alert("This is an internal JavaScript alert!");
}

// 3. External JavaScript
/* External JavaScript is written in a separate .js file
 and linked to the HTML document using the <script> tag with the src attribute. */
// Example: <script src="external.js"></script>

// Note: The actual external.js file contains the code for external JavaScript.
