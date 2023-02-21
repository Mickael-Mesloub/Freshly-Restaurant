window.addEventListener('DOMContentLoaded', () => {
    
    
    // ********** CAROUSEL **********
    
    
    console.log("JQuery OK");
    
    $(".carousel").slick({ 
        slidesToShow : 1,
        autoplay : false,
        autoplaySpeed : 1000,
        speed: 500,
        pauseOnHover: true,
        dots: true,
        arrows: true
        
    });
    
    const activePage = window.location.pathname;
    
    document.querySelectorAll("body > nav > a").forEach(link =>{
        
        if(link.href.includes(`${activePage}`)){
            
            link.classList.add("active");
            
        }
    
    });
    
    
    // ********** MENUS **********

    
    // ********** INITIALISATION **********
    
    
    const btnall = document.querySelector(".btnall");
    const btnmeat = document.querySelector(".btnmeat");
    const btnfish = document.querySelector(".btnfish");
    const btnvegan = document.querySelector(".btnvegan");
    
    
    // ********** CODE **********
    
    
    btnall.addEventListener("click", function() { displayAll(true); });
    btnmeat.addEventListener("click", () => { switchMenu("meat") });
    btnfish.addEventListener("click", function() { switchMenu("fish"); });
    btnvegan.addEventListener("click", function() { switchMenu("vegan"); });
    
    
    
    // ********** FONCTIONS **********
    

    function displayAll(display=false) {
        
        const dish = document.getElementsByClassName("dish");
        
        for(const i of dish) {
            
            i.classList.toggle("hidden", !display);
            
        }
    }
    
    function showClass(classe) {
        
        const classList = document.getElementsByClassName(classe);
        
            for(const i of classList) {
                
                i.classList.remove("hidden");
            }
    }
    
    function switchMenu(classe) {
        
        displayAll();
        showClass(classe);
        
    }
        
});

