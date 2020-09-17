// Set editor
const editor = ace.edit('editor');
editor.setTheme('ace/theme/twilight');
editor.session.setMode('ace/mode/markdown');

const previewArea = document.querySelector('#preview');
let result = '';

// Call MarkdownIT
const md = window.markdownit();

function handleChange() {
  // Retrieve markdown and render html
  let text = editor.getValue();
  result = md.render(text);

  // Send converted markdown to the Preview
  previewArea.innerHTML = result;
}

// Event Listeners
editor.session.on('change', handleChange);
