var num =1

while(prenom=true)
{
    var prenom = prompt("saisissez le prenom N°" + num + "\n ou Clic sur Annuler pour arreter la saisie");
    num++;
        
    if(prenom==""){
        alert("Vous avez cliqué sur Annuler");
        break;
    }
            
    else{
            console.log("Voici le prénom que vous avez saisi:" + num  + ":" + prenom);
            
    }    
        
}
        alert("Vérifiez en Console (F12), ce que vous venez de saisir...")