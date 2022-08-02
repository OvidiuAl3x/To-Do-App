const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

const generateTemplate = (todo) => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="line">${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;

  // add to list new todos
  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  // no refresh
  e.preventDefault();

  // adauga ce scrii la search
  const todo = addForm.add.value.trim();

  //   Check if have a string if is empty dosent work
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

// line-trough and change color
const lineThrough = ["line-through", "none"];
const color2 = ["black", "#4ee3f7"];
let index = 0;
let index2 = 0;
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("line")) {
    e.target.parentElement.style.textDecoration = lineThrough[index];
    index = (index + 1) % lineThrough.length;
    e.target.parentElement.style.color = color2[index2];
    index2 = (index2 + 1) % color2.length;
  }
});

// delete

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

// Search

const filterTodos = (term) =>{
    Array.from(list.children)
    .filter((todo) =>!todo.textContent.toLowerCase().includes(term))
    .forEach((todo) =>todo.classList.add('filtered'));

    Array.from(list.children)
    .filter((todo) =>todo.textContent.toLowerCase().includes(term))
    .forEach((todo) =>todo.classList.remove('filtered'));
};


// keyup event Search
search.addEventListener('keyup', () =>{
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
})