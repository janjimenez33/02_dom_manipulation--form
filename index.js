const form = document.getElementById('noteForm');
const notesList = document.querySelector('.noteList');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const priority = document.getElementById('priority').value;

    const noteElement = document.createElement('div');
    noteElement.classList.add('note-item');

    const noteTitle = document.createElement('div');
    noteTitle.classList.add('note-title');
    noteTitle.textContent = title;

    const noteContent = document.createElement('div');
    noteContent.classList.add('note-content');
    noteContent.textContent = content;

    const notePriority = document.createElement('div');
    notePriority.classList.add('note-priority');
    notePriority.textContent = `Priority: ${priority}`;

    noteElement.appendChild(noteTitle);
    noteElement.appendChild(noteContent);
    noteElement.appendChild(notePriority);

    notesList.appendChild(noteElement);

    form.reset();
});
