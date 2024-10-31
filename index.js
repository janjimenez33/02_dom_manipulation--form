const form = document.getElementById('noteForm');
const notesList = document.querySelector('.noteList');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const priority = document.getElementById('priority').value;

    const noteElement = document.createElement('div');
    noteElement.textContent = event.target.title.value + ' - ' + event.target.content.value + ' - ' + event.target.priority.value;

    notesList.appendChild(noteElement);

    form.reset();
});
