
let fumetti = document.getElementsByClassName( 'comic' );

fumetti.addEventListener

document.addEventListener

for ( let index = 0; index < fumetti.length; index++ ) {
    
    fumetti[index].addEventListener( "click", function(){

        this.classList.toggle( 'red' )

        alert( "Ti piace leggere " + this.innerHTML )
    } )
    
}


function confrontaNumero(){
    let base = 10;
    let numero = prompt( "Inserisci un numero" )
    let s = ''
    if ( numero < base ) {
        return 'Il numero è minore di ' + base
    } else if ( numero > base ){
        return 'Il numero è maggiore di ' + base
    } else {
        return 'Il numero è uguale a ' + base
    }
}

let s = confrontaNumero()
console.log(s)


function checkPallinaNera(){
    let palline = [ 'B', 'B', 'N', 'B', 'B' ];
    for (let index = 0; index < palline.length; index++) {
        if ( palline[index] == 'N' ){
            return true
        }
    }
    return false
}