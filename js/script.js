
async function getBooks(){
  const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=search+terms&AIzaSyAnZRFEoXZmsm8U_zzUkLoBB3ImF0agCss")
  const data = await response.json()
  const items = data.items

  console.log(items)
    
  items.map((item)=>{
    let bookTitle = item['volumeInfo']['title']
    let bookImage = item['volumeInfo']['imageLinks']
    let image =  bookImage.thumbnail
    let livrosDestaque = document.querySelector('.destaque')
    let imgDestaque = document.createElement('img')
    imgDestaque.src = `${image}`
    livrosDestaque.appendChild(imgDestaque)
  })
 }
  


getBooks()



  function showMenu(){
    const body = document.querySelector('body')
    const navMobile = document.querySelector('#nav-mobile');
    const imgbtn =document.querySelector("#img-btn")
    if(navMobile.style.display === 'none'){
      body.style.overflow = 'hidden'
      imgbtn.src = './image/menus.png'
      navMobile.style.display = 'flex'
    }else{
      body.style.overflow = 'auto'
      imgbtn.src = './image/cardapio.png'
      navMobile.style.display = 'none'    
    }
  }


  const btnElement = document.querySelector('.btn-search');
  btnElement.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log('clicou')
  })