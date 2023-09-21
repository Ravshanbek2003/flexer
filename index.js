let $=document
const box=$.querySelector('#box')
const itemsBtn=$.querySelector('.items_btn')
const boxItemBtn=$.querySelector('.box_item_btn')
const itemSelect=$.querySelector('#item_select')
const count=$.querySelector('#count')
const Itemsdiv=$.querySelector('.Itemsdiv')
const width=$.querySelector('.width')
const height=$.querySelector('.height')
const addBtn=$.querySelector('.add_btn')
const removeBtn=$.querySelector('.remove_btn')
const all=$.querySelector('#all')
const closeBtn=$.querySelector('.close')
const defaultBtn=$.querySelector('.resetDefault')
const inputGap= $.querySelector('#vol')
const justifyCon=$.querySelector('#jus')
const alignItem= $.querySelector('#align-item')
const simpleBtn = $.querySelector('.simple')
const actualBtn = $.querySelector('.actual')
const actualChil = $.querySelector('.actualChil')
const simpleChil = $.querySelector('.simpleChil')
width.value=100
 height.value=100
 let isCheckbox=false
let iscol=true
actualBtn.addEventListener('click',()=>{
  
    actualBtn.classList.add('color')
    simpleBtn.classList.remove('color')
    actualChil.classList.remove('dis')
    simpleChil.classList.add('dis')

})
simpleBtn.addEventListener('click',()=>{
    simpleBtn.classList.add('color')
    actualBtn.classList.remove('color')
    actualChil.classList.add('dis')
    simpleChil.classList.remove('dis')
})

 function render(num){
    itemSelect.innerHTML=''
    for (let i = 1; i <=num; i++) {
        const div = $.createElement('div')
        div.className='item'
        div.textContent=i
        box.appendChild(div)
        const option = $.createElement('option')
        option.setAttribute('value',i)
        option.textContent=`item-${i}`
        itemSelect.appendChild(option)
    }
    localStorage.setItem('boxLeng',box.children.length+1)
 }
 render(3)

 defaultBtn.addEventListener('click',()=>{
    width.value=100
    height.value=100
    box.innerHTML=''
    render(3)
    box.style.alignItems="flex-start"
    box.style.justifyContent="flex-start"
    box.style.gap='5px'
 })

itemsBtn.addEventListener('click',()=>{
    Itemsdiv.classList.add('display_n')
})

let x=1
itemSelect.addEventListener('change',(e)=>{
    count.innerHTML=e.target.value
x=e.target.value
})

width.addEventListener('input',(e)=>{
    if (isCheckbox) {
        for (let i = 0; i <box.children.length; i++) {
            box.children[i].style.width=`${e.target.value}px`
        }
    }else{
box.children[x-1].style.width=`${e.target.value}px`
    }
})
height.addEventListener('input',(e)=>{
    if (isCheckbox) {
        for (let i = 0; i <box.children.length; i++) {
            box.children[i].style.width=`${e.target.value}px`
            
        }
    }else{
    box.children[x-1].style.height=`${e.target.value}px`
    }
})

// add
addBtn.addEventListener('click',()=>{
    box.innerHTML=''

render(localStorage.getItem('boxLeng'))  
})
// remove
removeBtn.addEventListener('click',()=>{
    box.innerHTML=''
    render(localStorage.getItem('boxLeng')-2) 
})
closeBtn.addEventListener('click',()=>{
    Itemsdiv.classList.remove('display_n')
})

all.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
      isCheckbox=true
      itemSelect.setAttribute('disabled',true)
    } else {
        isCheckbox=false
      itemSelect.removeAttribute('disabled')
    }
  })
// gap
inputGap.addEventListener("input", (event) => {
    box.style.gap = `${event.target.value}px`;
  });


justifyCon.addEventListener('change',(e)=>{
    box.style.justifyContent=e.target.value
    console.log(e.target.value);

})

alignItem.addEventListener('change',(e)=>{
    box.style.alignItems=e.target.value
})

let text = document.getElementById('myText').innerHTML;
const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Content copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}