# codecademy_js_mixed_messages

## The plan
Using this space as a project plan as well:
The plan is to create a function that takes 3 themes as an argument, and selects 3 random nouns according to those themes.

The nouns are then placed into an Ad-Lib type structure, and the end phrase is returned.

## Example:
+ theme 1 === "people"
+ theme 2 === "places"
+ theme 3 === "food"

###Selected words (selected randomly using wordList[math.floor(math.random) * wordList.length])
+ word 1 === "Jerry Seinfeld"
+ word 2 === "Albuquerque"
+ word 3 === "eggs"

###Phrase structure:
`I just saw ${word1} in ${word2} eating ${word3}!`

###Returned result:
"I just saw Jerry Seinfeld in Albuquerque eating eggs!"

Initial prototype will have this result, but long term, will add new theme word lists and phrase structures to make more varied results.

### Components

#### Data Objects
+ JSON formatted list of people
+ JSON formatted list of places
+ JSON formatted list of foods

#### Functions
+ helper function: select random word from theme list
+ master function: select words using helper function, then return statement with selected words
 
## Long Term Goals
+ connect this phrase generator to OpenAI's Dall-E API to make an AI image out of the generated phrase