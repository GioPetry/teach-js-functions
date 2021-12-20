let fumetti = document.getElementsByClassName("comic");

for (let index = 0; index < fumetti.length; index++) {
    
    fumetti[index].addEventListener( "click", function(){
    
        messaggio = this.innerHTML
        alert("Mi piace leggere " + messaggio )
        this.classList.add("red")
    } ) 
    
}

