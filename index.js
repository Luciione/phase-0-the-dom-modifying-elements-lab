// Write your code here!
  // Remove the DOM node 'main#main'
const mainNode = document.querySelector('main#main');
if (mainNode) {
  mainNode.remove();
}

// Create a new <h1> element with id 'victory' and text content
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'YOUR-NAME is the champion';

// Append the new <h1> element to the document body
document.body.appendChild(newHeader);
