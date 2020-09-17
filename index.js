// Required HTML Elements
const markdownArea = document.querySelector('#markdown');
const previewArea = document.querySelector('#preview');
let result = '';

// Call MarkdownIT
// Modify this to accept the highlight function so MarkdownIt knows how to highlight my code.
const md = window.markdownit({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) { }
    }

    return ''; // use external default escaping
  }
})
hljs.initHighlightingOnLoad();
// console.log(md);
// console.log(hljs);

function handleChange() {
  // Retrieve markdown and render html
  let text = markdownArea.value;
  result = md.render(text);
  console.log(text)
  console.log(result)
  // Send converted markdown to the Preview
  previewArea.innerHTML = result;
}

// Event Listeners
markdownArea.addEventListener('input', handleChange);
