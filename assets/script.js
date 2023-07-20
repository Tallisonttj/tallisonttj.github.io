function clicou(){
  const mais =  document.querySelector('.area')
  const botao = document.querySelector ('.vermais')

  if(mais.classList.contains('maisprojetos')){
     mais.classList.replace('maisprojetos', 'projetoarea' )
     botao.innerText = 'Ver menos'
  }else{
    mais.classList.replace( 'projetoarea','maisprojetos')
    botao.innerText = 'Ver mais'
  }
}

function menu(){
  const menu =  document.querySelector('.menutext')

  if(menu.classList.contains('menutext')){
    menu.classList.toggle('off')
    console.log('teste')
  }
}

