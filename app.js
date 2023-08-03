function printValue(){
    const div = document.getElementById('text-div')
    console.log(div.innerHTML)
    
}




function changeTheme(){

    if (document.body.className === 'light-theme') {

        document.body.className = 'red-theme'

    }else if (document.body.className === 'red-theme') {

        document.body.className = 'dark-theme'
        
    } else if(document.body.className === 'dark-theme') {
        document.body.className = 'light-theme'
        
    }


}