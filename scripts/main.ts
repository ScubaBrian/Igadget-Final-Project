# The main file executed by Tritium. The start of all other files.


match(inferred_content_type()) {
  with(/html/) {

    //protect_xmlns()  #Removed to work on Moovweb 5.3. Comment in if on 4.7 to 5.1 

    # Force UTF-8 encoding. If you'd like to auto-detect the encoding,
    # simply remove the "UTF-8" argument.  e.g. html(){ ... }
    html("UTF-8") {
      @import "html.ts"
    }

    //restore_xmlns()  #Removed to work on Moovweb 5.3. Comment in if on 4.7 to 5.1 

    //restore_dollar_sign() #Removed to work on Moovweb 5.3. Comment in if on 4.7 to 5.1 
  }
  
  else() {
    log("Passing through " + $content_type + " unmodified.")
  }
}
