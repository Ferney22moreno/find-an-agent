/*
** variables that get the DOM elements
*/

const getBoxContent = document.querySelector('.js-agents');
const ajax_data = './assets/ajax/AGENTS_LIST.json';
const initButton = document.querySelector('.js-btn');
let convertToInteger;
let getInputValue;


/*
** this function validates the value added into input and check it it has the correct format
*/

const validateInput = () => {

    let getLabelElem = document.querySelector('.js-message'); 
    getInputValue = document.querySelector('.js-input').value;
    convertToInteger = +getInputValue;
    getLabelElem.innerHTML = '';


    if(getInputValue.length !== 5 || isNaN(convertToInteger)) {
        getLabelElem.innerHTML = "*Add a valid Income value, it must be 5 number characters!";
    }

    return convertToInteger, 
    getInputValue;
}


/*
** this variable will store the markup for each agent
*/
let wrappData;

/*
** here the fetch call the json file
*/
let dataAgents;
const loadData = url => {
    fetch(url)
        .then(response => response.json())
        .then(response => dataAgents = [...response])
}



const validateAgents = () => {

    validateInput();

    let minLimit = 0;
    let maxLimit = 0;

    if(convertToInteger >= 90000 && convertToInteger < 100000) {
        minLimit = 90000;
        maxLimit = Number.MAX_SAFE_INTEGER;
    } else if(convertToInteger < 90000 && convertToInteger >= 80000) {
        minLimit = 80000;
        maxLimit = 90000;
    } else if(convertToInteger < 40000 && convertToInteger >= 30000) {
        minLimit = 30000;
        maxLimit = 40000;
    } else if(convertToInteger < 30000 && convertToInteger >= 10000) {
        minLimit = 10000;
        maxLimit = 30000;
    }
    
    const filteredAgents = dataAgents.filter(item => item.income >= minLimit && item.income < maxLimit);

    if(filteredAgents.length > 0) {
        wrappData = filteredAgents.reduce((accumulator, item) => accumulator + getData(item.id, item.name, item.avatar, item.income), '');
    } else {
        wrappData = dataEmpty();
    }

    getBoxContent.innerHTML = wrappData;
}


/*
** This function takes the values and create the markup for each result
*/
const getData = (id, name, avatar, income) => {

    let markup = ``;

    markup = `<div class="agents-content__agent-info"> 
        <img src="${avatar}">
        <span class="agents-content__id"><span>Agent ID</span> <span>${id}</span></span>
        <h2 class="agents-content__name"><span>Name</span> <span>${name}</span></h2>
        <div class="agents-content__income"><span>Income</span> <span>$ ${income}</span></div>
    </div>`
    
    return markup;
}

/*
** This function store the message error if the value does not match any Agent
*/
const dataEmpty = () => {

    let emptyInfo = ``;

    emptyInfo = `<div class="agents-content__error-info"> 
        <span>No available Agents based on your income. Please try different income value.</span>
    </div>`;
    
    return emptyInfo;
}

(function(){

    loadData(ajax_data);

    /*
    ** this initialize the function
    */
    initButton.addEventListener('click', () => {
        validateAgents();
    });
    
})();

