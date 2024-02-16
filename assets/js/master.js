let ul = document.querySelectorAll('.ul>li>span')
let figure = document.querySelectorAll('.gallery>figure')
let gallery = document.querySelectorAll('.gallery')


db = []
dg = []

figure.forEach((fig, item) => {
  dg.push(item)
})

ul.forEach((val, index) => {

  db.push(index)

  val.addEventListener('click', () => {

    db.forEach((tem) => {

      ul[tem].classList.remove('after:w-[80%]')
    })
    ul[index].classList.add('after:w-[80%]')
    dg.forEach((red) => {
      
      gallery.forEach((val) => {
        let chil = val.children
        chil[red].classList.remove('hidden')
        if (index == 0) {
          chil[0].classList.remove('hidden')
          chil[1].classList.add('md:row-start-6')

        }
        else if (index == 1) {
          chil[red].classList.add('hidden')
          chil[0].classList.remove('hidden')

        }
        else if (index == 2) { 
          chil[red].classList.add('hidden')
          chil[2].classList.remove('hidden')
          chil[4].classList.remove('hidden')
        }
        else if (index == 3) {
          chil[red].classList.add('hidden')
          chil[3].classList.remove('hidden')
        }
        else if (index == 4) {
          chil[1].classList.remove('hidden')
          chil[1].classList.remove('md:row-start-6')
          chil[red].classList.add('hidden')
        }
      })
    })

  })

})

let imenu = document.getElementById('imenu')
let divMenu = document.getElementById('divMenu')
m = 1

imenu.addEventListener('click',(e)=>{
  e.stopImmediatePropagation()
  if (m%2) {
    divMenu.classList.remove('right-[-200%]')
    divMenu.classList.add('right-0')
    imenu.classList.remove('rotate-0')
    imenu.classList.add('rotate-90')
    
    m++
  }else{
    divMenu.classList.add('right-[-200%]')
    divMenu.classList.add('right-0')
    imenu.classList.remove('rotate-90')
    m++
  }
})
window.addEventListener('click', ()=>{
  divMenu.classList.add('right-[-200%]')
  divMenu.classList.add('right-0')
  imenu.classList.remove('rotate-90')
  m++
})







let scrollToTopBtn = document.getElementById('scrollToTopBtn');
 
scrollToTopBtn.addEventListener('click', ()=>{
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
})

window.addEventListener('scroll', ()=>{
  let scrollToTopBtn = document.getElementById('scrollToTopBtn');
  if (window.pageYOffset > 500) {
    scrollToTopBtn.classList.remove('hidden') 
    scrollToTopBtn.classList.add('flex') 
  } else {
    scrollToTopBtn.classList.remove('flex') 
    scrollToTopBtn.classList.add('hidden') 
  }
});
 
 
 
  
 