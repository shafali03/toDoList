

// get  elements 

const itemForm = document.getElementById('itemForm');
const itemInput = document.getElementById('itemInput');
const itemList = document.querySelector(.'item-list');
const clearBtn = document.getElementById('clear-list');
const feedback = document.querySelector('.feedback');


let itemData = [];

// form submission

itemForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const textValue = itemInput.value;
    console.log(textValue);

})