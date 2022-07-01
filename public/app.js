
const wForm = document.querySelector('form')
const sForm = document.querySelector('#ad')
const sh = document.querySelector('#sh')

wForm.addEventListener('submit',(evento)=>{
    evento.preventDefault()
    fetch("http://localhost:3000/weather?address="+sForm.value).then((response)=>{
    response.json().then((data)=>{
        sh.textContent="Address :"+data.address +" Temp : "+data.temp
    })
})

})