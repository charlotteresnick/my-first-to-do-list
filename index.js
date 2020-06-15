// PROBLEM 1
// Add an event listener to the button with the generate-greeting id
// When the button is clicked, trigger the sayHello function
function sayHello(){
    console.log("hello!");
  }
  
  document.querySelector('#generate-greeting').onclick = sayHello;
  
  // PROBLEM 2
  // When the user clicks the "Add to the List!" button:
  // 1) Add a new li to the .todos ul
  // 2) Fill in the li with the text from the input field
  // 3) Reset the value of the input field to be empty
  
  const addToUl = () => {
    const todos = document.querySelector('.todos');
    const el = document.createElement("li");
    const input = document.querySelector('#new-todo');
    el.innerText = (input.value);
    
    el.onclick = (e) => {
      e.srcElement.classList.add("clicked");
    }
    todos.appendChild(el);
  }
  
  document.querySelector('#generate-todo').onclick = addToUl
  
  // PROBLEM 3
  // When the user clicks any of the li items you've added, cross it out (add styling to create the line through effect)
  // This will involve attaching a listener to each <li> as you add them
  // You will have to modify the code you've written above!
  
  