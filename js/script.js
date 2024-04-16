  
  function showMenu(){
    const body = document.querySelector('body')
    const navMobile = document.querySelector('#nav-mobile');
    const imgbtn =document.querySelector("#img-btn")
    if(navMobile.style.display === 'none'){
      body.style.overflow = 'hidden'
      imgbtn.src = './image/menus.png'
      navMobile.style.display = 'flex'
    }else{
      body.style.overflow = 'scroll'
      imgbtn.src = './image/cardapio.png'
      navMobile.style.display = 'none'    
    }
  }