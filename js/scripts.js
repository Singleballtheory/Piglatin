


function pigLatin(text) {
  const vowels = ["a", "e", "i", "o", "u"]
  let vowelDetector = false
  let pigText = text.toLowerCase().split(" ");

    for (let i = 0; i < pigText.length; i++) {
      vowels.forEach(function(vowel) {
      if (pigText[i][0] === vowel) {
        vowelDetector = true;
        console.log("hello")
      }
    });
  }
    return vowelDetector;
  };

// pigText[i][0]
// vowels.forEach(function(vowel) {


  // $(document).ready(function() {
  //   const values = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
  //   const suits = [" Spades", " Hearts", " Diamonds", " Clubs"];
  //   let card = [];
  //   suits.forEach(function(suit){
  //     values.forEach(function(value){
  //       card.push(value+' of '+suit);
  //   });
  // });
  //   card.forEach(function(element) {
  //     $("#cards").append("<li id=\"card\">"+element+"</li>");
  //   });
  // });



// const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
// const vowels = ["a", "e", "i", "o", "u"]