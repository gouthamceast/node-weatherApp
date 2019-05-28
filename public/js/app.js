console.log('Client side javascript file is loaded!')



const weather = document.querySelector('form')
const searchname = document.querySelector('input')
const display1 = document.querySelector("#ms1")
const display2 = document.querySelector('#ms2')

// display.textContent = "gone in 60 seconds"

weather.addEventListener('submit',(e)=>{
    e.preventDefault()
    // console.log("first success")
    const city = searchname.value
    console.log(city)

    display1.textContent='Loading...'
    display2.textContent=''

    fetch("http://localhost:3000/weather?city="+city).then((response) =>{
    response.json().then((data)=>{
        console.log(data.forecast)
        console.log(data.location)
        console.log(data.city)
        display1.textContent = data.location
        display2.textContent = data.forecast
        
    })
})
})
