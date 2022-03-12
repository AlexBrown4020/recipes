'use strict'

// a function that accepts a meal object
//creates a card at the bottom of the page
// Shows the name, ingredients and instructions in its own container.
function createFoodCard (object) {
    const card = document.createElement('div');
    card.className = "card";
    card.id = object.name;
    document.body.appendChild(card);
    const title = document.createElement('h3');
    title.className = "foodName";
    title.textContent = object.name;
    title.name = object.name;
    card.appendChild(title);
    for (let ingredient of object.ingredients) {
        const x = document.createElement('li');
        x.textContent = ingredient;
        card.appendChild(x)
    }
    let i = 1;
    for (let step of object.steps) {
        const z = document.createElement('p');
        z.className = "instructions"
        z.textContent = `${i}: ${step}`;
        i++
        card.appendChild(z);
    }
}
const newFood = recipes.dishes.map(createFoodCard);

function linkRecipe (object) {
    const meal = document.getElementById("dinner");
    const dessert = document.getElementById("dessert")
    const dropDownContent = document.getElementsByClassName("dropdown-content");
    console.log(meal, dessert)
    for (let i = 1; i < dropDownContent.length; i++) {
        if (object.type === meal.id) {
            const link = document.createElement('a');
            link.textContent = object.name;
            link.id= `${object.name}${[i]}`
            link.href = `#${object.name}`;
            meal.appendChild(link)
        } else if (object.type === dessert.id) {
            const link = document.createElement('a');
            link.textContent = object.name;
            link.id= `${object.name}${[i]}`;
            link.href = `#${object.name}`;
            dessert.appendChild(link);
        }
    }
}

const makeLinks = recipes.dishes.map(linkRecipe);

