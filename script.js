function changerPolice() {
    console.log("Dans fonction changerPolice()");
    var paras = document.getElementsByTagName("p");

    for (var i = 0; i < paras.length; i++) {
        var para = paras [i];
        para.style.fontFamily = 'Monaco';
    }
}


function changerOrdre() {
    var paras = document.getElementsByTagName("p");

    //enregistrer les texts de chacun des paragraphes dans des variables
    var para1 = paras[0];
    var text1 = para1.innerText;

    var para2 = paras[1];
    var text2 = para2.innerText;

    var para3 = paras[2];
    var text3 = para3.innerText;

    //changer des texts de positions dans le array
    para1.innerText = text2;
    para2.innerText = text3;
    para3.innerText = text1;

}

function toggleTitre() {
    var titre = document.getElementById("titre1");

    //verifier si le titre est invisible
    if(titre.style.display == "none"){
        //faire apparaitre le titre
        titre.style.display = "initial";
    }else{
        //sinon, le rendre invisible
        titre.style.display = "none";
    }
}

function changerCouleur() {
    var titre = document.getElementById("titre1");
    
    if(titre.style.color == "red"){
        titre.style.color = "black";
    }else {
        titre.style.color = "red";
    }
}


function ajouterPara() {
    var image = document.getElementById("image");

    //creer un paragraphe
    var para = document.createElement("p");
    para.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    //inserer le paragraphe apres l'element parent qui est le <img>
    image.parentNode.appendChild(para);
}
