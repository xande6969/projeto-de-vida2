const botoes = document.querySelectorAll('.botao')

for(let botao = 0; botao < 4; botao++){
   botoes[botao].onclick = function(){

      for(let outro = 0; outro < 4; outro++){
         botoes[outro].classList.remove('ativo')
      }

      botoes[botao].classList.add('ativo')
   }
}
