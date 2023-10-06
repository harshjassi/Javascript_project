const addbtn = document.querySelector('#addNote');
const main = document.querySelector('#main');

addbtn.addEventListener("click", () => {
    addNote();
});

const saveNotes = () => {
    const notes = document.querySelectorAll('.notes textarea');
    console.log(notes);
    const data = [];

    notes.forEach((note) => {
        data.push(note.value);
    });

    if(data.length === 0 ){
        localStorage.removeItem("notes")
    }else{
        localStorage.setItem("notes", JSON.stringify(data));
    }
}

const addNote = (text = '') => {
    const note = document.createElement('div');
    note.classList.add("notes");
    note.innerHTML = ` 
        <div class="operation">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash"></i></button>
        </div>
        <textarea>${text}</textarea>
        `;

    note.querySelector(".delete").addEventListener('click', () => {
        note.remove();
        saveNotes();

    })

    note.querySelector('.edit').addEventListener("click", () => {
        saveNotes();
    })
    note.querySelector('textarea').addEventListener("focusout", () => {
        saveNotes();
    })
    main.appendChild(note)
    saveNotes();
}

(
    function () {
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        // console.log(lsNotes);

        if(lsNotes=== null){
            addNote();
        }else{
            lsNotes.forEach((lsNotes)=> {
                addNote(lsNotes);
            });

        }
    }
)()
