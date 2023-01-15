let ul=document.querySelector('ul')
let input=document.querySelector('input')
let button=document.querySelector('button')
button.addEventListener('click',(e)=>{
  const li=document.createElement("li")
  li.textContent=input.value
  ul.append(li)
})
ul.addEventListener('click',(e)=>{
    e.target.remove();
})