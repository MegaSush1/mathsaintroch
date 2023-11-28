document.querySelectorAll(".customMenu").forEach(function(customMenu){
	customMenu.querySelectorAll(".menuchoose li").forEach(function(menubtn){
		var display = menubtn.getAttribute("data-for")
		var displayid = "#"+display
		var displaymenuli = customMenu.querySelectorAll(".menudisplay ul")
		var li = document.querySelector(displayid)
		
		var bg_colour = Math.floor(Math.random() * 16777215).toString(16);
		bg_colour = "#" + ("000000" + bg_colour).slice(-6);
		menubtn.style.setProperty('--_card-color', bg_colour);
		li.style.setProperty('--_color-bg', bg_colour)
		
		function displaymenu(){
			
			displaymenuli.forEach(function(el){el.classList.remove("display")})
			li.classList.add("display")
		}
		
		menubtn.addEventListener('click', displaymenu)
		
	})
})