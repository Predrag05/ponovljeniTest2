[
    {
    name:"Ime kompanije",
    pib:"12345678",
    dateIssued:"2019-11-18",
    value:1000,
    currency:"RSD",
    timeStamp:"10:29:21",
    dateStamp:"2019-11-18"
    },
    {
    name:"Ime kompanije",
    pib:"78945612",
    dateIssued:"2019-11-18",
    value:1500,
    currency:"RSD",
    timeStamp:"10:29:21",
    dateStamp:"2019-11-18"
    }
]


const section2 = document.querySelector('#item-list')

const inputName = document.querySelector('#txt-company-name')
const inputPib = document.querySelector('#txt-company-pib')
const inputDate = document.querySelector('#txt-time')
const inputRSD = document.querySelector('#txt-value')
const unos = document.querySelector('#btn-add')

let fakture = []


unos.addEventListener('click', (e) =>{
    e.preventDefault()
    addElementToDom()
    
     
        
})
// ne znam zasto nisam mogao da ubacim uslov i zasto nije radilo pa sam ostavio ovako, malo mi jje vremena trebalo da provalim ali sam se dosta vrteo u krug
function isValid(){
    inputName.value.trim() !== '' &&
    inputPib.value.trim() !== '' &&
    inputPib.value.trim().length === 8 &&
    !Number.isNaN(Number(inputPib.value)) &&
    !Number.isNaN(Number(inputRSD.value))
}



function addElementToDom(){
    const divContainer = document.createElement('div')
    divContainer.className = 'item-container'

    const divItem = document.createElement('div')
    divItem.className = 'item-info'

    const labelDiv = document.createElement('div')

    const label1 = document.createElement('label')
    label1.className = 'company-name'
    label1.textContent = inputName.value
    labelDiv.append(label1)

    const label2 = document.createElement('label')
    label2.className = 'company-pib'
    label2.textContent = inputPib.value
    labelDiv.append(label2)

    const label3 = document.createElement('label')
    label3.className = 'time-created'
    label3.textContent = inputDate.value
    labelDiv.append(label3)

    const label4 = document.createElement('label')
    label4.className = 'price-value'
    label4.textContent = `${inputRSD.value} RSD`
    labelDiv.append(label4)

    divItem.append(labelDiv)
    divContainer.append(divItem)
    section2.append(divContainer)

    let name = inputName.value
    let pib = inputPib.value
    let dateIssued = inputDate.value
    let value = inputRSD.value
    let currency = 'RSD'
    let dateStamp = inputDate.value

    fakture.push({
        name: name,
        pib: pib,
        dateIssued: dateIssued,
        value: value,
        currency:"RSD",
        timeStamp:"10:29:21",
        dateStamp: dateStamp
    })




        console.log(fakture)



}