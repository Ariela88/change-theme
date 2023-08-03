function printValue(){
    const div = document.getElementById('text-div')
    console.log(div.innerHTML)
    
}



// --------------------per usare questa funzione devo aggiungere la classe al body in HTML--------------------------




function changeTheme(){

    if (document.body.className === 'light-theme') {

        document.body.className = 'red-theme'

    }else {
        document.body.className = 'light-theme'
        
    }


}

//--------------------------------------------------------------------------------------------------

// in html aggiungo 2 button uno per ogni colore del tema 

function changeTheme2(){

        const styleLink = document.getElementById('main-style')

        if(styleLink.href.includes('dark')){

            styleLink.href = './style.css'
        }else{
            styleLink.href = './dark-style.css'
        }
    
    
    }

    function changeTheme3(){

        const mainContainer = document.querySelector('.main');
        console.log(mainContainer)
        mainContainer.classList.toggle('dark')

    
    
    }