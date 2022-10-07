console.log('!');

// 이벤트(Event)
// : 사용자들의 행동에 반응하는 작업
// ex. 클릭, 더블클릭, 폼 제출 등

// 이벤트 리스너(Event Listener)
// : 이벤트가 발생했을 때 실행할 함수
// 1. 인라인방식 onXX
// 2. onXX 속성방식
// 3. addEventListener() 메소드 방식

// 1. 인라인방식
function showAlert() {
    alert('버튼1 클릭!!!!!')
}


// 2. 속성(프로퍼티) 방식
let btn2 = document.querySelector('#btn2'); // <button>
btn2.onclick = function () {
    alert('버튼2 클릭!!!!')
}


// 3. addEventListener() 메소드 방식
// addEventListener(type, listener)
// ㄴ type: 이벤트 종류 (클릭, 더블클릭...)
// ㄴ listener: 이벤트 발생시 처리할 함수
let btn3 = document.querySelector('#btn3'); // <button>
btn3.addEventListener('click', function() {
    alert('버튼3 클릭!!!');
});


// 연습(click 이벤트)
// function span1() {
//     const span = document.getElementById('span1')
//     const p = document.createElement('p')
//     p.textContent = 'span1'
//     p.classList.add('span')
//     span.append(p)
//     span.style.backgroundColor = 'limegreen'
// }

// let span2 = document.querySelector('#span2');
// span2.onclick = function () {
//     span2.style.color = 'blue'
// }

// let span3 = document.querySelector('#span3')
// span3.addEventListener('click', function () {
//     alert('span3 클릭!')
// });

// mouseover 이벤트
// function span1() {
//     const span = document.getElementById('span1')
//     const p = document.createElement('p')
//     p.textContent = 'span1'
//     p.classList.add('span')
//     span.append(p)
//     span.style.backgroundColor = 'limegreen'
// }

// let span2 = document.querySelector('#span2');
// span2.onmouseover = function () {
//     span2.style.color = 'blue'
//     span2.style.backgroundColor = 'violet'
//     span2.style.fontSize = "20px"
//     span2.style.fontWeight = '700'
// }

// let span3 = document.querySelector('#span3')
// span3.addEventListener('mouseover', function () {
//     alert('span3 클릭!')
// });

// dblclick 이벤트
function span1() {
    const span = document.getElementById('span1')
    const p = document.createElement('p')
    p.textContent = 'span1'
    p.classList.add('span')
    span.append(p)
    span.style.backgroundColor = 'limegreen'
}

let span2 = document.querySelector('#span2');
span2.ondblclick = function () {
    span2.style.color = 'blue'
    span2.style.backgroundColor = 'violet'
    span2.style.fontSize = "20px"
    span2.style.fontWeight = '700'
}

let span3 = document.querySelector('#span3')
span3.addEventListener('dblclick', function () {
    alert('span3 클릭!')
});

// function showAlert2() {
//     alert('span3!!')
// }
// span3.addEventListener('dblclick',showAlert2)
// div4.addEventListener('dblclick',showAlert2)
// span5.addEventListener('dblclick',showAlert2)
// div6.addEventListener('dblclick',showAlert2)

// 밑에꺼를 위에꺼로 축약 가능 (같은 함수일때)

// span3.addEventListener('dblclick', function () {
//     alert('span3 클릭!')
// });
// div4.addEventListener('dblclick', function () {
//     alert('span3 클릭!')
// });
// span5.addEventListener('dblclick', function () {
//     alert('span3 클릭!')
// });
// div6.addEventListener('dblclick', function () {
//     alert('span3 클릭!')
// });