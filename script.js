
let words = ['skitfan', 'ringrost', 'mango', 'lekplats',]
const felVal = document.getElementById('misstag')
let misstag = -1;
const maxMisstag = 5;
const gissat = [];
let wordStatus = null;
let svar = '';

//bild
document.querySelector('figure').classList.add('scaffold')
document.querySelector('figure').classList.add('head')
document.querySelector('figure').classList.add('body')
document.querySelector('figure').classList.add('arms')
document.querySelector('figure').classList.add('legs')

// väljer ett ord ur arrayen
let valtOrd = words [Math.floor(Math.random() * words.length)]


//gör knappar av alla bokstäver(gjorde ett inputfält först, men detta såg mycket smidigare ut)
function knappar(){
    let knapparHTML = 'abcdefghijklmnopqrstuvwxyzåäö'.split('').map(letter =>
        `
        <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="handleGuess('`+ letter +`') "
        >
        ` + letter + `
        </button>
        
        `).join(``);
        document.getElementById('keyboard').innerHTML = knapparHTML;
}

//splitar det valda ordet och lägger det i wordStatus
function guessedWord (){
    wordStatus = valtOrd.split('').map(letter=>(gissat.indexOf(letter) >= 0 ? letter : " _ ")).join(``);
    document.getElementById('pickedWord').innerHTML = wordStatus;
    console.log(valtOrd)
    console.log(wordStatus)
 
    
}
// puttar ut bokstäver samt skriver ut antal felval
function handleGuess(chosenLetter){
    gissat.indexOf(chosenLetter) === -1 ? gissat.push(chosenLetter): null;
    
    if (valtOrd.indexOf(chosenLetter) >= 0){
        guessedWord();
        gamewon()
    } else if (valtOrd.indexOf(chosenLetter) === -1){
        misstag = misstag +1
        felVal.innerHTML = misstag
        if (misstag === 1){              //En del av gubben delas ut per felgissning
            document.getElementById('scaffold').style.display = 'block';

        }
        else if (misstag === 2){
            document.getElementById('head').style.display = 'block';
        }
         else if (misstag === 3){
            document.getElementById('body').style.display = 'block';
        }
        else if (misstag === 4){
            document.getElementById('arms').style.display = 'block';
        }
       
        else if (misstag >= 5) {
            document.getElementById('keyboard').innerHTML = "you lost!!"
            document.getElementById('legs').style.display = 'block';
        }
        
    } 

   
}

function gamewon(){
    if (valtOrd === wordStatus){
        document.getElementById('keyboard').innerHTML = "you won!!"
        
    }
}



function reset(){
   history.go(0)
 }




handleGuess();
guessedWord();
knappar();
