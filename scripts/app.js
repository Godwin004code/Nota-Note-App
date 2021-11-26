const addBtn = document.querySelector('.add')

addBtn.addEventListener('click', () => addNew())

function addNew() {
    const div = document.createElement('div')
    div.classList.add('notes-container')    
    div.innerHTML = `
        <p></p>
            <textarea>

            </textarea>
            <div class="note-btns">
                <div class="edit"><i class="fa fa-edit"></i></div>
                <div class="save"><i class="fa fa-save"></i></div>
                <div class="delete"><i class="fa fa-remove"></i></div>
            </div>
    `
    // class="${text ? 'hidden' : '
    const editBtn = div.querySelector('.edit')
    const saveBtn =div.querySelector('.save')
    const delBtn = div.querySelector('.delete')
    const textArea = div.querySelector('textarea')
    const main = div.querySelector('p')

    editBtn.addEventListener('click', function() {
        console.log(123);
        textArea.classList.toggle('hidden')
    })
    saveBtn.addEventListener('click', function(e) {
        
        main.innerHTML = textArea.value
        
        update(textArea.value)
        
    })
    delBtn.addEventListener('click', function() {
        div.remove()
    })



    document.body.appendChild(div)
}

// function update(book) {
//     const areas = document.querySelectorAll('textarea')
//     let fade;

//     if(localStorage.getItem('fade') === null) {
//         fade = []
//     } else {
//         fade = JSON.parse(localStorage.getItem('fade'))
//     }
//     fade.push(book)
//     localStorage.setItem('fade', JSON.stringify(fade))
// }

// <div class="main ${text ? '' : 'hidden'}"></div>