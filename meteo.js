<script type="text/javascript">
     
        function showCity(){
 	 // 1. Récupérer la valeur courante du menu 
  	// Pour ça on va faire :
  	let nomVilleSelectionnee = document.getElementById("ville").value;
	
	document.getElementById("affichage").innerHTML = nomVilleSelectionnee;
 
	
 	 // 2. Récupérer la liste de toutes les div correspondant à une div de météo 
 	 // Pour ça on va faire :
  	let cities = document.getElementsByClassName("city");

  	// 3. Parcourir la liste des div et cacher celles qui ne sont pas sélectionnées.
  	// TODO : definir l : la taille max de votre tableau cities
  	for (let i=0; i<4; i++) {
   	 if (cities[i].id == nomVilleSelectionnee) {
     
       	cities[i].style.display = "";
    	} else {
    	
       	cities[i].style.display = "none";
   
    	}
  	}
	}
</script>
