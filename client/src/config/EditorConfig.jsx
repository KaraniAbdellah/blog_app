const EditorConfig = {
  uploader: {
    insertImageAsBase64URI: true, // Drag and drop images as Base64
  },
  placeholder: "Start typing here...", // Placeholder text
  spellcheck: true, // Enable spellchecking
  toolbarSticky: true, // Make toolbar sticky
  minHeight: 200, // Set minimum height
  buttons: [
    "bold",
    "italic",
    "underline",
    "strikethrough",
    "|",
    "ul",
    "ol",
    "|",
    "image",
    "link",
    "|",
    "undo",
    "redo",
  ], // Custom toolbar buttons
  allowResizeX: false, // Disable horizontal resizing
  allowResizeY: true, // Enable vertical resizing
};

export default EditorConfig;