$("./body") {
  insert("footer", "Powered by Moovweb", class: "mw-footer") { 
  inner(){
		replace("Powered by Moovweb", "Customized by Brian Goers")
	}  
	move_to("..//div[@id='Footer']", "bottom") 
  }
}



	
	
 




	
