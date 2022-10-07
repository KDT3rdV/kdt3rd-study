console.log('!');

function addNode () {
    // alert('버튼을 클릭하셨군요!');
    let div = document.getElementById('div1');
    // 요소 생성하기
    // createElement()
    let p = document.createElement('p'); // p태그 생성 // <p></p>
    p.innerText = '버튼을 눌러 만들어진 p태그'; // <p>버튼을 눌러 만들어진 p태그</p>
    p.style.fontWeight = '700';
    p.classList.add('append-p');

    // // div.appendChild(p);
    // // div.append('1번 추가');
    // // div.append(p, '2번 추가');
    div.append(p);
}

function removeNode() {
    // alert('삭제 버튼 클릭!')
    let div = document.querySelector('#div1');
    let p = document.querySelector('#div1 > p');

    // div.removeChild(p);
    p.remove();
}

// 노드 생성/추가/삭제
// 1. 노드 생성
// createElement()

// 2. 노드 추가
// appendChild(): 노드 객체만 추가, 한번에 한가지
// append(): 노드 객체 or 텍스트 추가, 한번에 여러가지 가능

// 3. 노드 삭제
// 부모노드.removeChild(자식노드): 부모노드의 자식노드를 삭제
// 노드.remove(): '선택한 요소'를 삭제 

//=====================

let ul = document.querySelector('ul');
let li = document.createElement('li'); // <li></li>
li.innerText = '오렌지'; // <li>오렌지</li>

ul.append(li);

let ul1 = document.querySelector('ul');
let li1 = document.createElement('li')
li1.innerText = '망고';

ul1.append(li1);

//=======================
let container = document.querySelector('.container');
let img = document.createElement('img'); // <img>
img.setAttribute('src', './image/grass.png'); // <img src="./image/grass.png">
img.setAttribute('alt', '풀'); // <img src="./image/grass.png" alt="풀">
let title = document.createElement('div'); // <div></div>
title.innerText = '풀떼기입니다.'; // <div>풀떼기입니다</div>

container.append(img);
container.append(title);

let container1 = document.querySelector('.container');
let img1 = document.createElement('img');
img1.setAttribute('src', './image/beach3.jpg');
img1.setAttribute('alt', '바다~');
let title1 = document.createElement('div');
title1.innerText = '바다에요';

container1.append(img1);
container1.append(title1);