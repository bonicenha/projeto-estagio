function scrollLoc(elem){
    var thisValue = elem.innerHTML;
    console.log(thisValue);

    if (thisValue === 'Sobre'){
        document.getElementById('sobre-davi').style.scrollBehavior = "smooth";
        document.getElementById('sobre-davi').scrollIntoView({behavior: "smooth", block: "center"});
    }else if (thisValue === 'Serviços'){
        document.getElementById('servicos').style.scrollBehavior = "smooth";
        document.getElementById('servicos').scrollIntoView({behavior: "smooth", block: "center"});
    }else if (thisValue === 'Localização'){
        document.getElementById('localizacao').style.scrollBehavior = "smooth";
        document.getElementById('localizacao').scrollIntoView({behavior: "smooth", block: "start"});
    }else if (thisValue === 'Início'){
        document.getElementById('inicio').style.scrollBehavior = "smooth";
        document.getElementById('inicio').scrollIntoView({behavior: "smooth", block: "start"});
    }
    }

    // ......... //

    window.addEventListener("scroll", function(){
        let logo = this.document.getElementById("logotipo");
        let header = document.getElementById("header");
        let logodiv = this.document.getElementById("logo")
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        // header.style.backgroundColor =  "rgba(102,102,102,0.4, transparent";
        header.style.backgroundImage =  'linear-gradient(to bottom, rgba(52,52,52,0.2) 10%,rgba(52,52,52,0.3) 50%,rgba(52,52,52,0.4) 90%)';
        // logo.style.height= "100px";
        header.style.backdropFilter= "blur(6px)";
        // logodiv.style.paddingTop= "0";

        if (window.scrollY<=100){
            header.style.backgroundImage =  "";
            // logo.style.height= "100px";
            header.style.backdropFilter= "blur(0px)"
            // logodiv.style.paddingTop= "1rem";
        }
     });