const tick = document.querySelector('.tickbox')
let addTask = document.querySelector('.field')
let fieldsCount = 0
let checkTasks = document.getElementsByClassName('tickbox')
let itemCounter = document.querySelector('.itemCounter')
let timesLeft = 0
itemCounter.innerHTML = timesLeft + ' items ' + 'left'
window.addEventListener('keydown', (e)=>{

    if (e.code === 'Enter' && fieldsCount < 6 && addTask.value !== ''){
        fieldsCount++
        timesLeft++
        let strings = document.querySelector('.Strings')
        let newTask = document.createElement('div') // создание блока с текстом и галочкой
        newTask.className = 'newTask'               // имя блока с текстом и галочкой
        newTask.style.color = '#FFFF'
        strings.append(newTask)                     // добавление задачи
        let tickbox = document.createElement('input')    // блок с галочкой
        tickbox.type = 'checkbox'
        tickbox.className = 'tickbox' 
        tickbox.addEventListener('click', isDone)   // навешиваем слушатель для чекбокса                 
        newTask.append(tickbox)
        let fields = document.createElement('div')
        fields.className = 'fields'
        fields.style.textDecoration = 'inherit'
        fields.style.color = 'inherit'
        newTask.append(fields)
        fields.innerHTML = addTask.value 
        addTask.value = ''
        itemCounter.innerHTML = timesLeft + ' items ' + 'left'
        
    }
} )


function isDone(){
    
    if(this.checked) {
        timesLeft--
        this.parentNode.style.textDecoration = 'line-through'
        this.parentNode.style.color = '#6C6E83'
        itemCounter.innerHTML = timesLeft + ' items ' + 'left'
    }
    else{
        timesLeft++
        this.parentNode.style.textDecoration = 'none'
        this.parentNode.style.color = '#FFFF'
        itemCounter.innerHTML = timesLeft + ' items ' + 'left'
    }
     
}

