window.addEventListener('DOMContentLoaded', ()=>{
    const textArea = document.getElementById('input-text');

    const wordCount = document.getElementById('word-count');

    const characterCount = document.getElementById('character-count');

    const uniqueWord = document.getElementById('unique-words');

  textArea.addEventListener('input', ()=>{
    const textValue =textArea.value.trim();

    const words = textValue === ''? 0 : textValue.split(/\s+/).length;

    const characters = textValue.length;

    const uniqueWords = new Set(textValue.match(/\b\w+\b/g)).size;

    wordCount.innerHTML = 'Word count: ' + words;

    characterCount.innerHTML = 'Character count (including spaces):' + characters;
 
    uniqueWord.innerHTML = 'Unique words:' + uniqueWords


    

    
  });


});

