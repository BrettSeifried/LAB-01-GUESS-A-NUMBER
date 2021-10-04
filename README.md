# Alchemy Bootstrap Template

## Making a plan

### Guess a Number App
## Guess a Number
* Input
    * Guess
* User message (<p>)

# HTML Elemenets
* input for guess (static (HTML is only))
* button (static)
* user message (dynamic)
* h1 w/ the title of app (static)

# State
* User Guess
* random Number / target number
* number of Guesses
* User message (dervied)

## translated
### HTML Elements(view)
* header-- static
* user input -- static
* button --static
* user message -- dynamic and hcange based ont he user guess

### State
* userGuess -- will hold the vlaue of the input field
* randomNum -- will be generated at the start of every game
* numGuesses -- numnber of guesses -- incremened every time the user clicks the button OR starts at 3 and decrements
* userMessage
    - 'You're correct!': -- userGuess === randomNum
    - 'Guess too high': userGuess > randomNum
    - 'Guess too low': userGuess < randomNum
    - 'Invalid guess': numGuesses === 4
    - 'No more guesses': if input is >20 or not a number (srtetch!) 

### PsuedoCode for Events
```javascript
// What Events am I listening for? 
// on button click do the following:
//  decrement or increment the guess count
//  get the value of the user guess from the input
//      CONVERT THE INPUT TO A NUMBER
//   compare the user guess to the random Number
//  if(userGuess === randomNum) -- display you won!
//  else if  (numGuess === 4 ) -- display you lost, ouf of guesses
//  else if (userGuess > randomNum) -- display guess too high
//  else if (userGuess < randomNum) -- display Guess too Low
```

(bolded steps are mandatory, unbolded are for more advanced projects)

1) **Make a drawing of your app. Simple "wireframes"**
2) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
3) **For each HTML element ask: Why do I need this?**
4) Ask which of out HTML elements are hard coded, and which are dynamically generated?
5) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
6) Is there some state we need to initialize?
7) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
8) **Think about how to validate each of your steps**
9) Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
10) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
11) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**


## To Run Cypress Tests
* `npm install`
* `npm test`
* Cypress will open -- you should then click "run <#> integration spec(s)"
    ![](cypress.png)
* Make sure all tests pass