console.log('!');

const click = document.querySelector('#click');
click.addEventListener('click', function (event) {
    console.log(event);
})

const add = document.querySelector('#add')
const ul = document.querySelector('.ulclass')

add.addEventListener('submit', function (event) {
    event.preventDefault();
    const addInput = document.querySelector('input[name="practice"]')
    console.log(addInput);
    console.dir(addInput);

    console.log(addInput.value);

    let inp = addInput.value;

    const newOne = document.createElement('li')
    newOne.textContent = inp;
    ul.append(newOne);

    addInput.value = '';
})