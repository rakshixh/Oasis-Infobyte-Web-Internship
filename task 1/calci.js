const result = document.querySelector('.calc-screen');
const numbers = document.querySelectorAll('.number');
const del = document.querySelector('#del');
const equals = document.querySelector('#equals');
const reset = document.querySelector('#reset');

numbers.forEach(number =>{
    number.addEventListener('click', (e) =>{

         result.value += e.target.innerText;
        })
    })

reset.addEventListener('click',(e)=>{
    result.value = '';
})

del.addEventListener('click',(e)=>{
    result.value = result.value.slice(0,-1);
})

equals.addEventListener('click',(e)=>{
    try{
    result.value = eval(result.value);
    } catch{
        result.value = 'Error!'
    }
})