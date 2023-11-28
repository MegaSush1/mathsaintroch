/*
   _____                __  _            _      
  / ____|              / _|(_)          (_)     
 | |      ___   _ __  | |_  _   __ _     _  ___ 
 | |     / _ \ | '_ \ |  _|| | / _` |   | |/ __|
 | |____| (_) || | | || |  | || (_| | _ | |\__ \
  \_____|\___/ |_| |_||_|  |_| \__, |(_)| ||___/
                                __/ |  _/ |     
                               |___/  |__/      
*/
var Math4TT = [
				[`Chapitre 1`,"chapitre1"],
				[`Chapitre 2`,"chapitre2"],
				[`Chapitre 3`,"chapitre3"],
				[`Chapitre 4`,"chapitre4"]
]
var Math5TT = [
				[`Statistique`,"statistique"],
				[`Trigonométrie`,"trigonometrie"],
				[`Suites`,"suites"],
				[`limites`,"limites"],
				[`Dérivées`,"derivees"]
]
var Math6TT = [
				["Les fonctions réciproques","fonctionsreciproques"],
				["Les fonctions exponentielles et logarithmes","fonctionsexponentiellesetlogarithmes"],
				["Vecteurs 3D","vecteurs3D"],
				["Géométrie dans l'espace","geometriedanslespace"],
				["La cominatire","combinatoire"],
				["Les probalités","probabilites"],
				["Les lois des probalités","loisdesprobabilites"]
]

/*-----------------------------*/



var menuMath4TT = ""
for (let i=0 ; i < Math4TT.length; i++){
	menuMath4TT += `<li><a href="/mathsaintroch/c/4TT/`+Math4TT[i][1]+`">`+Math4TT[i][0]+`</a></li>`;
}
var menuMath5TT = ""
for (let i=0 ; i < Math5TT.length; i++){
	menuMath5TT += `<li><a href="/mathsaintroch/c/5TT/`+Math5TT[i][1]+`">`+Math5TT[i][0]+`</a></li>`;
}
var menuMath6TT = ""
for (let i=0 ; i < Math6TT.length; i++){
	menuMath6TT += `<li><a href="/mathsaintroch/c/6TT/`+Math6TT[i][1]+`">`+Math6TT[i][0]+`</a></li>`;
}
if (document.getElementById("m4") != null && document.getElementById("m5") && document.getElementById("m6")){
	document.getElementById("m4").innerHTML = menuMath4TT
	document.getElementById("m5").innerHTML = menuMath5TT
	document.getElementById("m6").innerHTML = menuMath6TT
}

document.querySelector(".navbar li:nth-child(2) ul").innerHTML = menuMath4TT
document.querySelector(".navbar li:nth-child(3) ul").innerHTML = menuMath5TT
document.querySelector(".navbar li:nth-child(4) ul").innerHTML = menuMath6TT
