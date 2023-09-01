const showLink = document.getElementById('show');
const hideLink = document.getElementById('hide');
const texteDiv = document.getElementById('texte');
showLink.addEventListener( 'click', ()=>{
    texteDiv.style.display = "block"
}
)
hideLink.addEventListener( 'click', ()=> {
    texteDiv.style.display = "none"
})