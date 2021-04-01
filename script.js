var cartas= [
    {
      nome: "Inugami Korone",
      atributos: {
      forca: 5,
      carisma: 10,
      voz: 8,
      },
      img: "https://i.pinimg.com/originals/da/23/de/da23dea20b9e26dfc666567f58066d4c.jpg"
    },
    {
      nome: "Usada Pekora",
      atributos: {
      forca: 6,
      carisma: 8,
      voz: 10},
      img: "https://i.pinimg.com/originals/f2/6d/a1/f26da1af50bc3a5e00753ef6633418e8.jpg"
    }, 
      {
      nome: "Calliope Mori",
      atributos: {
      forca: 9,
      carisma: 6,
      voz: 10},
      img: "https://s1.zerochan.net/Mori.Calliope.600.3125066.jpg"
    }, 
       {
      nome: "Gawr Gura",
      atributos: {
      forca: 10,
      carisma: 7,
      voz: 6},
      img: "https://i.pinimg.com/originals/29/35/20/293520cab0bd2335f88a97f4e62f18d1.jpg"
    },  
         {
      nome: "Nekomata Okayu",
      atributos: {
      forca: 8,
      carisma: 9,
      voz: 7},
      img: "https://64.media.tumblr.com/6b8091279e9aeab89f1b600bc33de0c6/f5d8b162e221537e-6b/s1280x1920/db75686530e0b6832f04e8ca0427c9bf9ef477ad.jpg"
    },  
           {
      nome: "Uruha Rushia",
      atributos: {
      forca: 6,
      carisma: 10,
      voz: 6},
      img: "https://external-preview.redd.it/BodDGB9valgCX-l3se2P44t78k4EzA56Wx-DxPlDTH8.jpg?auto=webp&s=d3b4e7c18c7586865017e0f5d69824324765bf6d"
    },  
             {
      nome: "Amelia Watson",
      atributos: {
      forca: 8,
      carisma: 8,
      voz: 7},
      img: "https://i1.sndcdn.com/artworks-bV4q4UUNxjy3sU6q-mqalvQ-t500x500.jpg"
    }, 
               {
      nome: "Takanashi Kiara",
      atributos: {
      forca: 9,
      carisma: 7,
      voz: 8},
      img:"https://i.imgur.com/H5HRViC.jpg"
    }, 
                 {
      nome: "Houshou Marine",
      atributos: {
      forca: 10,
      carisma: 6,
      voz: 7},
      img: "https://external-preview.redd.it/uWMzoHkqj2mDbigjO23SeOKDUfhZGcnUPFIhlwC3ieM.jpg?auto=webp&s=cdd45ae1dc4eea849e25cf47ad4fc72a9d0cd1a2"
    }, 
                   {
      nome: "Ninomae Ina'nis",
      atributos: {
      forca: 9,
      carisma: 7,
      voz: 6},
      img: "https://preview.redd.it/28cdv21q34n51.png?auto=webp&s=57bc7bf47f56a9d87afc352de388c8aaf8cda79d"
    }, 
  ]
  
  
  var cartaMaquina
  var cartaJogador
  var pontosJogador = 0;
  var pontosMaquina = 0;
  var deck = [];
  var state = 0;
  var winAudio = document.querySelector("#win");
  var loseAudio = document.querySelector("#lose");
  for(var i = 0; i < cartas.length; i++){
      deck.push(cartas[i]);
  }
  
  function sortearCarta() {
      var numeroCartaMaquina = parseInt(Math.random() * deck.length)
      cartaMaquina = deck[numeroCartaMaquina];
  
      var numeroCartaJogador = parseInt(Math.random() * deck.length)
      while (numeroCartaJogador == numeroCartaMaquina) {
          numeroCartaJogador = parseInt(Math.random() * deck.length)
      }
      cartaJogador = deck[numeroCartaJogador];
      
      exibirCartaJogador()
      exibirOpcoes()
  }
  function exibirCartaJogador(){
    var nomeCard1 = document.querySelector(".titulo1");
      var imgCard1 = document.querySelector(".imagemJogador");
      var forca1 = document.querySelector(".forca1");
      var carisma1 = document.querySelector(".carisma1");
      var voz1 = document.querySelector(".voz1");
    
    nomeCard1.innerText = cartaJogador.nome;
      imgCard1.src = cartaJogador.img;
      forca1.innerText = cartaJogador.atributos.forca;
      carisma1.innerText = cartaJogador.atributos.carisma;
      voz1.innerText = cartaJogador.atributos.voz;
  }
  
  function exibirOpcoes() {
      var opcoes = document.querySelector(".options")
      var opcoesTexto = ""
      for(var atributo in cartaJogador.atributos){
          opcoesTexto += `<button id="btn${atributo}"class="btnatributo">${atributo}</button>`;
    }
      opcoes.innerHTML = opcoesTexto
      adicionarEventos();
  }
  function adicionarEventos(){
      var btns = document.querySelectorAll(".btnatributo");
      btns.forEach(button => {
      button.addEventListener("click",()=>{obtemAtributoSelecionado(button.innerText);})
    })
  }
  function obtemAtributoSelecionado(atributo){
    jogar(atributo);
    
  }
  
  function jogar(atributoSelecionado){
      var placarJogador = document.querySelector("#placarJogador");
      var placarMaquina = document.querySelector("#placarMaquina");
      var h2 = document.querySelector ("#mudarTexto");
    
    if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
      h2.textContent = "Você Venceu!";
          pontosJogador++;
          placarJogador.innerText = pontosJogador;
          winAudio.play();
    } else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
      h2.textContent = "Você Perdeu!";
          pontosMaquina++;
          placarMaquina.innerText = pontosMaquina;
          loseAudio.play();
    } else {
      h2.textContent = "Você Empatou!";
    }
    exibirCartaMaquina();
  function exibirCartaMaquina() {
    var nomeCard2 = document.querySelector(".titulo2");
      var imgCard2 = document.querySelector(".imagemMaquina");
      var forca2 = document.querySelector(".forca2");
      var carisma2 = document.querySelector(".carisma2");
      var voz2 = document.querySelector(".voz2");
    
    nomeCard2.innerText = cartaMaquina.nome;
      imgCard2.src = cartaMaquina.img;
      forca2.innerText = cartaMaquina.atributos.forca;
      carisma2.innerText = cartaMaquina.atributos.carisma;
      voz2.innerText = cartaMaquina.atributos.voz;
  }
  
  }
  