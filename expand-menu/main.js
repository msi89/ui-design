window.addEventListener("click", function(e) {
    document.querySelectorAll('.menu_item a').forEach((atg)=>{   
        if (atg.contains(e.target)){
            atg.classList.add("active");
            if(atg.getAttribute('data-expand')=="true") {
                atg.classList.toggle("collapsed");
                var panel = atg.nextElementSibling;
                if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                }
            }
        }else{
            atg.classList.remove("active"); 
        }
      });
});

