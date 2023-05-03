


                        // Домашка 8
// 1 задание
// const btn = document.querySelector('.btn')
// const body = document.querySelector('body')
// btn.onclick = function(){
//    body.classList.toggle('bodys')               
// }  


// 2 задание не получается 
// const one = document.querySelector('.one')
// one.style.color = '#299695'                                 
// one.style.textDecoration="none"                            

// one.classList.add('overline')                  
// one.classList.add('red') 
// one.classList.add('pad')  


// const btn = document.querySelector('.btn')
// const body = document.querySelector('body')
// btn.onclick = function(){
  
  
// body.classList.toggle('overline')    
// body.classList.toggle('red')   
// body.classList.toggle('pad')                           
// }


// 3 задание

const one = document.querySelector('.one')
one.style.color = '#299695'                                 
one.style.textDecoration="none"                            

one.classList.add('overline')                  
one.classList.add('red') 
one.classList.add('pad')  


const btn = document.querySelector('.btn')
const body = document.querySelector('body')
btn.onclick = function(){
  
  
body.classList.toggle('overline')    
body.classList.toggle('red')   
body.classList.toggle('pad')   
body.classList.remove('overline')                   
body.classList.remove('red')  
body.classList.remove('pad')                    
}