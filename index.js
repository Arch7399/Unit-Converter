
const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204

const inputEl = document.getElementById("input-el")
const convertEl = document.getElementById("convert-el")

const paraL = document.getElementById("para-l")
const paraV = document.getElementById("para-v")
const paraM = document.getElementById("para-m")

convertEl.addEventListener("click", function(){
    converter()
})

function converter(){
    paraL.textContent = `${inputEl.value} meter = ${(inputEl.value*meterToFeet).toFixed(3)} feet | 
    ${inputEl.value} feet = ${(inputEl.value/meterToFeet).toFixed(3)} meter`
    paraV.textContent = `${inputEl.value} liter = ${(inputEl.value*literToGallon).toFixed(3)} gallon | 
    ${inputEl.value} gallon = ${(inputEl.value/literToGallon).toFixed(3)} liter`
    paraM.textContent = `${inputEl.value} kilogram = ${(inputEl.value*kilogramToPound).toFixed(3)} pound | 
    ${inputEl.value} pound = ${(inputEl.value/kilogramToPound).toFixed(3)} kilogram`
}