function genererContenu() {
  // Obtenir l'élément avec l'id démo et lui ajouter des éléments h2 et p
  let N = document.getElementById("qty").value

  let demo = document.getElementById("demo")

  let titre = document.getElementById("titre").value

  let texte = document.getElementById("contenu").value

  for(let i = 0; i < N; i++){
    demo.innerHTML += 
      `<h2>${titre + (i + 1)}</h2>
      <p>${texte + (i + 1)}</p>`
  }
}
  
function changerStyle() {
  // Obtenir les éléments p qui sont sous le div demo et changer la couleur spécifiée dans l'input
  let demo = document.getElementById("demo")

  let paragraghes = demo.getElementsByTagName("p")

  let couleur = document.getElementById("couleur").value

  for(let i = 0; i < paragraghes.length; i++){
      paragraghes[i].style.color = couleur
  }
}
  
function changerClassBoutons() {
  // Obtenir les éléments boutons et changer leur className pour celui qui est spécifié dans l'input

  let bouton = document.getElementsByTagName("button")

  let inputBtnClass = document.getElementById("btnClass").value

  for(i = 0; i < bouton.length; i++){
        bouton[i].className = inputBtnClass
  }



}