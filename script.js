// console.log(countries)



const input = document.getElementById('input')
//? Attribute Ekleme 
input.setAttribute('placeholder', 'Değer')
//? Atribute içindeki bilgiyi getirme
// console.log(input.getAttribute('placeholder'))
//? Attribute silme
// input.removeAttribute('placeholder')

//! Javascriptten etiket oluşturma
const div = document.createElement('div')
div.style.width ="300px"
div.style.height ="300px"
div.style.border ="1px solid black"


//* oluşturulan etiketi body'e gönderme
document.body.appendChild(div)
//* oluşturulan etiketi htmlden kaldırma
document.body.removeChild(div)
//! Javascriptten etiket oluşturma