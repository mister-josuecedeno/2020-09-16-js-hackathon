// Required HTML Elements
const markdownArea = document.querySelector('#markdown');
const previewArea = document.querySelector('#preview');
let result = '';

// Call MarkdownIT
const md = window.markdownit();
hljs.initHighlightingOnLoad();
// console.log(md);
// console.log(hljs);

function handleChange() {
  // Retrieve markdown and render html
  let text = markdownArea.textContent;
  result = md.render(text);

  // Send converted markdown to the Preview
  previewArea.innerHTML = result;
}

// Event Listeners
markdownArea.addEventListener('input', handleChange);
