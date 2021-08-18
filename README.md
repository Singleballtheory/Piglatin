Describe: pigLatin();
Test: "It will recognize when the first letter is a vowel."
Code: pigLatin("a");
Expected Output: "true"

Test: "It will recognize when the word starts with a consonant."
Code: pigLatin("b");
Expected Output: "true"

Test: "It will loop through the word until it finds a vowel and return the consonants."
Code: pigLatin("string");
Expected Output: "str"

Test: "It will add 'way' to the end a word that begins with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Test: It moves all consonants leading up to the first vowel to the end of the word.
Code: pigLatin("code");
Expected Output: "odec"

Test: moves all consonants to end of word and adds "ay"
code: pigLatin("code");
Expected Output: "odecay"

Test: moves consonants from words that begin with "qu" to end of word and add "ay"
code: pigLatin("quick");
Expected Output: "ickquay"

Test: Only moves first consonant to end of word if second and third consonants are "qu" and adds "ay" to end
code: pigLatin("squeal");
Expected Output: "quealsay"

Test: "It will apply pig latin rules to all words in a sentence."
Code: pigLatin("I will meet you at the event");
Expected Output: "Iway illway eetmay ouyay atway ethay eventway"

squeal

se7en

e7ensay

seven?

even?sa