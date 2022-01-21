function start() {

	$("#menuInicial").hide();
	$("#fundoDoJogo").append("<div id='placar'></div>");
	$("#fundoDoJogo").append("<div id='jogador' class='anima1'></div>");
	$("#fundoDoJogo").append("<div id='inimigo1' class='anima2'></div>");
	$("#fundoDoJogo").append("<div id='inimigo2'></div>");
	$("#fundoDoJogo").append("<div id='amigo' class='anima3'></div>");

    var somDisparo = document.getElementById("somDisparo");
    var somExplosao = document.getElementById("somExplosao");
    var musica = document.getElementById("musica");
    var somGameover = document.getElementById("somGameover");
    var somPerdido = document.getElementById("somPerdido");
    var somResgate = document.getElementById("somResgate");

    const velInimigo1 = 5;
    const velInimigo2 = 2;
    var podeAtirar = true;
    var fimDoJogo = false;
    var pontos = 0;
    var salvos = 0;
    var perdidos = 0;
    var energiaAtual = 3;
    const TECLA = {
        W: 87,
        S: 83,
        D: 68,
        };
    var jogo = {};
    jogo.pressionou = []; 

    musica.addEventListener("ended", function(){ musica.currentTime = 0; musica.play(); }, false);
    musica.play();

    $(document).keydown(function(e){
        jogo.pressionou[e.which] = true;
    });
    
    $(document).keyup(function(e){
        jogo.pressionou[e.which] = false;
    });

    function moveFundo() {
        esquerda = parseInt($("#fundoDoJogo").css("background-position"));
        $("#fundoDoJogo").css("background-position",esquerda-1);
    }

    function moveJogador() {
        if (jogo.pressionou[TECLA.W]) {
            let topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top",topo-10);
            if (topo<=0) {
                $("#jogador").css("top",topo+10);
            }
        }
        
        if (jogo.pressionou[TECLA.S]) {
            let topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top",topo+10);
            if (topo>=434) {	
                $("#jogador").css("top",topo-10);
            }	
        }
        
        if (jogo.pressionou[TECLA.D]) {
            disparo();
        }
    }

    function moveInimigo1() {
        let posicaoY = parseInt($("#inimigo1").css("top"));
        let posicaoX = parseInt($("#inimigo1").css("left"));
        $("#inimigo1").css("left",posicaoX-velInimigo1);
        $("#inimigo1").css("top",posicaoY);
            
        if (posicaoX <= 0) {
            reposicionaInimigo1();
        }
    }

    function moveInimigo2() {
        let posicaoX = parseInt($("#inimigo2").css("left"));
        $("#inimigo2").css("left",posicaoX-velInimigo2);

        if (posicaoX <= 0) {
            $("#inimigo2").css("left",775);
        }
    }

    function moveAmigo() {
        let posicaoX = parseInt($("#amigo").css("left"));
        $("#amigo").css("left",posicaoX+2);

        if (posicaoX >= 915) {
            $("#amigo").css("left",10);
        }
    }

    function disparo() {
	
        if (podeAtirar === true) {
            somDisparo.play();
            podeAtirar = false;
            let topo = parseInt($("#jogador").css("top"));
            let posicaoX = parseInt($("#jogador").css("left"));
            let tiroX = posicaoX + 190;
            let topoTiro = topo + 37;
            $("#fundoDoJogo").append("<div id='disparo'></div");
            $("#disparo").css("top",topoTiro);
            $("#disparo").css("left",tiroX);
            var tempoDisparo = window.setInterval(executaDisparo, 30);
        }
     
        function executaDisparo() {
            let posicaoX = parseInt($("#disparo").css("left"));
            $("#disparo").css("left",posicaoX+15); 
                if (posicaoX > 900) {      
                    window.clearInterval(tempoDisparo);
                    tempoDisparo = null;
                    $("#disparo").remove();
                    podeAtirar = true;      
                }
        }
    }

    function colisao() {
        let colisao1 = ($("#jogador").collision($("#inimigo1")));
        let colisao2 = ($("#jogador").collision($("#inimigo2")));
        let colisao3 = ($("#disparo").collision($("#inimigo1")));
        let colisao4 = ($("#disparo").collision($("#inimigo2")));
        let colisao5 = ($("#inimigo2").collision($("#amigo")));
        let colisao6 = ($("#jogador").collision($("#amigo")));
        
        if (colisao1.length > 0) {
            let inimigo1X = parseInt($("#inimigo1").css("left"));
            let inimigo1Y = parseInt($("#inimigo1").css("top"));
            somExplosao.play();
            reposicionaInimigo1();
            explosao1(inimigo1X,inimigo1Y);
            energiaAtual--;
        }

        if (colisao2.length > 0) {
            let inimigo2X = parseInt($("#inimigo2").css("left"));
            let inimigo2Y = parseInt($("#inimigo2").css("top"));
            somExplosao.play();
            reposicionaInimigo2();
            $("#inimigo2").remove();
            explosao2(inimigo2X,inimigo2Y);
            energiaAtual--;      
        }

        if (colisao3.length > 0) {
            let inimigo1X = parseInt($("#inimigo1").css("left"));
            let inimigo1Y = parseInt($("#inimigo1").css("top"));
            somExplosao.play();
            reposicionaInimigo1();
            explosao1(inimigo1X,inimigo1Y);
            $("#disparo").css("left",950);
            pontos = pontos + 100;
        }

        if (colisao4.length > 0) {
            let inimigo2X = parseInt($("#inimigo2").css("left"));
            let inimigo2Y = parseInt($("#inimigo2").css("top"));
            somExplosao.play();
            reposicionaInimigo2();
            $("#inimigo2").remove();
            explosao2(inimigo2X,inimigo2Y);
            $("#disparo").css("left",950);
            pontos = pontos + 50;
        }

        if (colisao5.length > 0) {
            amigoX = parseInt($("#amigo").css("left"));
            amigoY = parseInt($("#amigo").css("top"));
            somPerdido.play();
            reposicionaAmigo();
            $("#amigo").remove();
            explosao3(amigoX,amigoY);
            perdidos++;
        }

        if (colisao6.length > 0) {
            somResgate.play();
            reposicionaAmigo();
            $("#amigo").remove();
            salvos++;
        }

    }

    function explosao1(inimigo1X,inimigo1Y) {
        $("#fundoDoJogo").append("<div id='explosao1'></div");
        let div = $("#explosao1");
        div.css("top", inimigo1Y);
        div.css("left", inimigo1X);
        div.animate({width:200, opacity:0}, "slow");
        
        var tempoExplosao = window.setInterval(removeExplosao, 1000);
        
        function removeExplosao() {
            div.remove();
            window.clearInterval(tempoExplosao);
            tempoExplosao = null;  
        }
    }

    function explosao2(inimigo2X,inimigo2Y) {
        $("#fundoDoJogo").append("<div id='explosao2'></div");
        var div2 = $("#explosao2");
        div2.css("top", inimigo2Y);
        div2.css("left", inimigo2X);
        div2.animate({width:200, opacity:0}, "slow");
        
        var tempoExplosao2 = window.setInterval(removeExplosao2, 1000);
        
        function removeExplosao2() {
            div2.remove();
            window.clearInterval(tempoExplosao2);
            tempoExplosao2 = null;      
        }  
    }

    function explosao3(amigoX,amigoY) {
        $("#fundoDoJogo").append("<div id='explosao3' class='anima4'></div");
        $("#explosao3").css("top",amigoY);
        $("#explosao3").css("left",amigoX);
        
        var tempoExplosao3=window.setInterval(resetaExplosao3, 1000);
        
        function resetaExplosao3() {
        $("#explosao3").remove();
        window.clearInterval(tempoExplosao3);
        tempoExplosao3=null;       
        }    
    }

    function reposicionaInimigo1() {
        let posicaoY = parseInt(Math.random() * 334);
        $("#inimigo1").css("left",694);
        $("#inimigo1").css("top",posicaoY); 
    }

    function reposicionaInimigo2() {
        var tempoColisao4 = window.setInterval(reposiciona4, 5000);
        function reposiciona4() {
            window.clearInterval(tempoColisao4);
            tempoColisao4 = null; 
            if (fimDoJogo === false) {  
                $("#fundoDoJogo").append("<div id=inimigo2></div");
            }      
        }	
    }

    function reposicionaAmigo() {
        var tempoAmigo = window.setInterval(reposiciona6, 6000);
        function reposiciona6() {
            window.clearInterval(tempoAmigo);
            tempoAmigo = null;
            if (fimDoJogo === false) {
                $("#fundoDoJogo").append("<div id='amigo' class='anima3'></div>");
            }
        }
    }

    function placar() {
        $("#placar").html("<h2> Pontos: " + pontos + " Salvos: " + salvos + " Perdidos: " + perdidos + "</h2>");
    }

    function gameOver() {
        fimdejogo=true;
        musica.pause();
        somGameover.play();
        
        window.clearInterval(jogo.timer);
        jogo.timer=null;
        
        $("#jogador").remove();
        $("#inimigo1").remove();
        $("#inimigo2").remove();
        $("#amigo").remove();
        
        $("#fundoDoJogo").append("<div id='fim'></div>");
        
        $("#fim").html("<h1> Game Over </h1><p>Sua pontuação foi: " + pontos + "</p>" + 
        "<div id='reinicia' onClick=reiniciaJogo()><h3>Jogar Novamente</h3></div>");
    }

    function energia() {
		if (energiaAtual==3) {
            $("#fundoDoJogo").append("<div id='energia3'></div>");
		}
	
		if (energiaAtual==2) {
            $("#energia3").remove();
            $("#fundoDoJogo").append("<div id='energia2'></div>");
		}
	
		if (energiaAtual==1) {
            $("#energia2").remove();
            $("#fundoDoJogo").append("<div id='energia1'></div>");
		}
	
		if (energiaAtual==0) {
            $("#energia1").remove();
            $("#fundoDoJogo").append("<div id='energia'></div>");
			gameOver();
		}
	}

    function loop() {
	    moveFundo();
        moveJogador();
        moveInimigo1();
        moveInimigo2();
        moveAmigo();
        colisao();
        placar();
        energia();
	}

    jogo.timer = setInterval(loop,30);

}

function reiniciaJogo() {
	somGameover.pause();
	$("#fim").remove();
	start();
}