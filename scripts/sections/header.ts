$("./body") {
  $(".//div[@id='Header']") {
    attribute("data-ur-set", "toggler")
    $("./div[@id='Logo']") {
       move_here("//div[@id='TopMenu']/ul/li[@class='First']")
       move_here("//div[@id='TopMenu']/ul/li[@class='CartLink']")
         insert("div", class: "mw_header_bottom") {
         insert("div", class: "mw_search")
         insert("div", class: "mw_menu_btn sprites-menu", data-ur-toggler-component: "button")
       }
       
    }

    $(".//div[@class='mw_search']") {
      move_here("//div[@id='SearchForm']") {
        remove("./p")
        $("./form") {
          remove("./label")
          $("./input[@type='text']") {
            attribute("placeholder", "Search...")
          }
          $("./input[@type='image']") {
            wrap("div", class: "mw_search_btn buttons-search")
          }
        }
      }
    }      
    
    

    $("..//div[@class='mw_menu_btn']") {
      attribute("data-ur-toggler-component", "button")
    }

    move_here("../div[@id='Menu']", "bottom") {
      attribute("data-ur-toggler-component", "content")
      move_here("../../div[@id='Wrapper']/div[@class='Left']/div[@id='SideCategoryList']", "bottom")
    }

    $(".//div[@id='Menu']/ul/li/a/span") {
      insert_after("span", class: "mw_indicator sprites-menu_go")
    }

    $$("div.SideCategoryListClassic ul.category-list li a") {
      insert("span", class: "mw_indicator sprites-menu_go")
    }

    remove("./br") 
  }
    remove(".//div[@id='AjaxLoading']")
    remove(".//div[@id='TopMenu']")
    remove(".//div[@id='Menu']/ul/li[3]")
    remove(".//div[@id='LayoutColumn1']")
    remove(".//div[@id='SideNewsletterBox']")
    remove(".//span[@class='FeedLink FloatRight']//ancestor::h2")

        $(".//div[@id='Wrapper']") {

        $(".//div[@id='LayoutColumn2']") {
         attribute("data-ur-set", "toggler")  
         }  
        
        $$("h2") { 
          wrap("div", class: "toggle_button")         
         attribute("data-ur-set-component", "button") 
        } 
        
        $("//ul[@class='ProductList']") {          
          attribute("data-ur-set-component", "content") 
      //    attribute("data-ur-carousel-component", "scroll_container")
      //    wrap("div", data-ur-set: "carousel", data-ur-autoscroll: "enabled") 
      //  } 
      //  $("//li[@class='Odd']") {
      //    attribute("data-ur-carousel-component", "item")
      //  }
      //   $("//li[@class='Even']") {
      //    attribute("data-ur-carousel-component", "item")
        }
     } 
   }
    
   
     
    
  


