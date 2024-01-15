// Spelling Bee Game!

// Defining my main global variables

let spellingWord;

let correctWords;

let incorrectWords;

let score = 0;

let currentLevel = 0;

let gameOver = false;

// My arrays of words for each level of the game
const gameLevels = [
['smart', 'dump', 'merge', 'order', 'list', 'craft', 'alone', 'goat', 'cat', 'bump', 'yellow', 'slap', 'ship', 'array', 'code', 'trip', 'pasta', 'smell', 'shirt', 'hello', 'flip', 'cow', 'move', 'book', 'lose', 'spell', 'water', 'candle', 'home', 'yummy', 'cube', 'circle', 'room', 'scarf', 'ocean', 'teach', 'liver', 'thank', 'story', 'people', 'coming', 'foul', 'chief', 'sauce', 'calm', 'salad', 'slide', 'also', 'foam', 'power', 'place', 'oil', 'pretty', 'china', 'camera', 'shoe', 'swim', 'idea', 'feet', 'large', 'frame', 'rapid', 'booth', 'track', 'crust', 'bag', 'page', 'bush', 'leaf', 'wood', 'stick', 'grass', 'flower', 'cap', 'tea', 'blue', 'black', 'white', 'sweet', 'dark','light', 'ink','hard', 'soft', 'wild', 'brand', 'band', 'slip', 'slap', 'slime', 'catch','eat', 'drink','table','string','fish','pink','spice','gold','silver','door','page','pants','shirt','watch','metal','under','above','wave','cut','born','horn','morning','night','straw','box','sand','beer','bird','bug','cube','heart','gym','glass','cute','ugly','pretty','smile','stool','tab','pain','must','jelly','drill','hike','son','good','bad','mask','cell','flap','poor','cold','hot','try','clock','foam','cheese','bread','spike','shoe','prize','goal'],

['balm', 'compartment', 'prospector', 'gouge', 'gourd', 'support', 'canceled', 'rhythm', 'exterminate', 'quarrelling', 'chaos', 'orchestra', 'originated', 'geography', 'sapphire', 'fatigue', 'recruit', 'chaperone', 'charade', 'chivalry', 'mahcinery', 'peasant', 'perimeter', 'persuade', 'thermometer', 'camouflage', 'limousine', 'gargoyle', 'inept', 'voucher', 'meteor', 'gymnasium', 'behavior', 'acoustics', 'dilemma', 'mayhem', 'successor', 'grotesque', 'accelerate', 'scholar', 'canopy', 'scuba', 'cavity', 'sneer', 'dire', 'decimal', 'cubicle', 'league', 'physical', 'apparel', 'welding', 'genuine', 'avenue', 'groom', 'exude', 'potato', 'moose', 'wafer', 'sofa', 'kangaroo', 'mischief', 'cabbage', 'mastiff', 'mince', 'uncle', 'island', 'missile', 'tongue', 'banana', 'venemous', 'troll', 'timber', 'sword', 'erode', 'jersey', 'puzzle', 'extinct', 'heroic', 'dilemma', 'pamper', 'pleasant', 'bias', 'trumpet', 'golden', 'erase', 'veteran', 'shamrock', 'magician', 'squirm', 'slogan', 'cucumber', 'janitor', 'pedigree', 'cowlick', 'raisin', 'penguin', 'lactose', 'vault', 'snippet', 'quart', 'mantra', 'badger', 'marathon', 'failure', 'tolerable', 'target', 'imagined', 'ordinary', 'crouched', 'blurted', 'whiskers', 'mango', 'knot'],

['susceptible', 'quadrilateral', 'anecdote', 'erroneous', 'pneumonia', 'penitentiary', 'schizophrenic', 'pseudonym', 'magnanimous', 'dossier', 'ablone', 'obstinate', 'ancillary', 'aficionado', 'avenge', 'abscission', 'babushka', 'bayou', 'baroque', 'bourgeois', 'calisthenics', 'cantankerous', 'celerity', 'crevasse', 'commemorate', 'curmudgeon', 'dachshund', 'effervescent', 'extemporaneous', 'fallacious', 'flocculent', 'fuchsia', 'glockenspiel', 'guillotine', 'hallelujah', 'hemorrhage', 'homogenize', 'hysterical', 'imperceptible', 'juxtaposition', 'knave', 'laryngitis', 'luau', 'masquerade', 'memento', 'mosque', 'mystique', 'nuptial', 'oscillate', 'opthalmology', 'pantomime', 'paraphernalia', 'palette', 'queue', 'quintessence', 'quaff', 'rabble', 'schizophrenia', 'sensuous', 'sequoia', 'siphon', 'subpeona', 'transcend', 'trestle', 'tyranize', 'ulcer', 'unkempt', 'vehemence', 'viscount', 'wren', 'wreak', 'zeppelin', 'zucchini', 'hubris', 'logarithmic', 'debilitate', 'divvy', 'uvula', 'retinol', 'fajitas', 'efface', 'antithesis', 'algae', 'smithereens', 'mordant', 'cauterize', 'merino', 'assure', 'menial', 'hypochondira', 'raucous', 'revenant', 'anonymity', 'dystopia', 'crux', 'salivate', 'quirky', 'anchorage', 'syringe'],

['frugivore', 'telamon', 'janthina', 'toorie', 'cataphora', 'nahcolite', 'giallolino', 'crokinole', 'yabbies', 'cirri', 'anent', 'gabarit', 'cioppino', 'nocive', 'deliquesce', 'selah', 'efflux', 'gallivat', 'kapparah', 'cathect', 'bismillah', 'battue', 'ivermectin', 'catjang', 'neem', 'hordeolum', 'medulla', 'aughts', 'hominim', 'carnitine', 'triduum', 'wapiti', 'galena', 'luftmensch', 'deathin', 'zowie', 'dvandva', 'aggrandizement', 'coulrophobia', 'ubiquinone', 'ciliopathy', 'logothete', 'grobian', 'kyphoplasty', 'rooseveltite', 'deceleron', 'effleurage', 'demulcent', 'emolus', 'nidicolous', 'oxyacetylene', 'hellebore', 'pillor', 'deleterious', 'maillot', 'hinoki', 'pointelle', 'tinnient', 'pochoir', 'goanna', 'icosahedron', 'fortissimo', 'portmanteau', 'mortadella', 'eleemosynary', 'ossicle', 'alpargata', 'disembogue', 'luculent', 'xerogel', 'vizierial', 'ardoise', 'stretto', 'neophyte', 'comanchero', 'nimiety', 'lokelani', 'basilica', 'rinceau', 'bhangra', 'analgesia', 'risorgimento', 'ferruginous', 'foudroyant', 'sesquipedalian', 'funori', 'tussock', 'linnet', 'puerilely', 'plangency', 'fjeld', 'duello', 'tmesis', 'katakana', 'bouffant', 'griot', 'pongee', 'acoel', 'furuncle', 'becquerel', 'darnel', 'zazen'],
]

levelText = document.getElementById('level')


// Grabbing the generate word button element
generateNewWord = document.getElementById('generate')

// Add event listener function

// function runLevelOne() {
// if(score < 10) {
generateNewWord.addEventListener('click',function() {
    // generateNewWord.addEventListener('click', levelHandler)
    const levelArray = gameLevels[currentLevel]
    randomNumber = Math.floor(Math.random()*(levelArray.length +1))
    spellingWord = levelArray[randomNumber]

// Getting the computer the speak each word verbally for the listener to hear
    let pronounce = new SpeechSynthesisUtterance()
    pronounce.text = spellingWord
    speechSynthesis.speak(pronounce)
    })
    // } 
// }  

// Targeting my pronounce word button which will repeat the spelling word as many times as the user wants
hearWordAgain = document.getElementById('hear-again')

// Using the same speech event listener as for the generate new word button
hearWordAgain.addEventListener('click', function(){
    let pronounce = new SpeechSynthesisUtterance()
    pronounce.text = spellingWord
    speechSynthesis.speak(pronounce)
})

// Grabbing some more elements that I'm going to need
submitButton = document.getElementById('submit')
inputBox = document.getElementById('input')
correctWordsList = document.getElementById('correct-list')
incorrectWordsList = document.getElementById('incorrect-list')
scoreValue = document.getElementById('score')
alertMessages = document.getElementById('alerts')

// Event Listener for my submit button
submitButton.addEventListener('click', function(){     
    if(inputBox.value.toLowerCase() === spellingWord){
        alertMessages.innerHTML = 'Correct!' 
        score ++
        if(score % 10 === 0) {
            currentLevel = Math.min(currentLevel + 1, gameLevels.length - 1)
        } 
        scoreValue.innerHTML = "Score: "+ score // adding 1 to the score for each correct word
        correctWordsList.innerHTML = spellingWord

    } else {
        alertMessages.innerHTML = `Incorrect! The correct spelling was ${spellingWord}.`  
        incorrectWordsList.innerHTML = spellingWord
    }
// Making sure to clear the input box after each guess
    inputBox.value = ''

// Clearing the 'correct' or 'incorrect' alert message after 3 seconds
    setTimeout(function(){
        alertMessages.innerHTML = ''
    }, 3000)

})

