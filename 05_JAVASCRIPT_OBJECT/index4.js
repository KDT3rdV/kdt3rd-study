console.log("!");

// document 요소 다루기(읽고 쓰기)

// 1. html요소 내용(content)을 읽고 쓰기
let div1 = document.getElementById("div1");
console.log(div1);

// innerHTML 속성
// : 요소 안의 '코드'를 가져오거나 수정
// => 입력된 문자열을 HTML 형식으로!
// 읽기: 요소.innerHTML
// 쓰기: 요소.innerHTML = 수정하려는 태그
console.log(div1.innerHTML); // 읽기
div1.innerHTML = "여기는 <b>첫번째</b> 태그입니다. &hearts;"; // 쓰기

// innerText 속성
// : 요소 안의 '텍스트'를 가져오거나 수정
// => 입력된 문자열을 그대로!
// 읽기: 요소.innerText
// 쓰기: 요소.innerText = 수정하려는 텍스트
// console.log(div1.innerText); // 읽기
// div1.innerText = '여기는 <b>첫번째</b> 태그입니다. &hearts;'; // 쓰기 - 무조건 문자열로 인식
// div1.innerText = '안녕하세요!!';  // 쓰기

// textContent 속성
// : innerText와 마찬가지로 텍스트 정보를 표시
// IE9 이전 버전에서는 사용 불가능(나중에 나온 속성이기 때문)
// console.log(div1.textContent); // 읽기
// div1.textContent = '안녕하세요2222!!!!!';

// let div2 = document.getElementById('div2')
// console.log(div2);
// console.log(div2.innerHTML);
// div2.innerHTML = '여기는 <p>두번째</p> 태그입니다. &hearts;';

// console.log(div2.innerText);
// div2.innerText = '안녕!';

// console.log(div2.textContent);
// div2.textContent = '안녕하세요1111@@@@'
// console.log(div2.innerHTML);

// 2. 속성접근
// 요소.속성명
let beach = document.getElementById("beach");
console.log(beach.id); // beach
console.log(beach.src); // 이미지경로
console.log(beach.width); // 200
console.log(beach.alt); // beach

let google = document.getElementById("google");
console.log(google);
console.log(google.href);

// getAttribute(): 속성값 가져오기
// setAttribute(): 속성값 설정하기
console.log(google.getAttribute("href"));
google.setAttribute("href", "https://www.naver.com");
google.innerText = "Naver";

// (연습)
// 이미지요소
// - 이미지 바꾸기, width height변경
beach.setAttribute("src", "./image/grass.png");
beach.setAttribute("width", "500");
beach.setAttribute("height", "100");
beach.setAttribute("alt", "grass");
beach.setAttribute("title", "풀풀");
console.log(beach.innerHTML);
console.log(document.getElementById("beach"));
console.log(document.getElementsByTagName("img"));

// ========================
// 3. 스타일(css) 제어
// : javascript로 css설정 가능!

// 3-1. 인라인 스타일
let h1 = document.querySelector("h1");
// console.log(h1);
// console.log(h1.style);
// console.log(h1.style.fontSize); // camel case로 작성

// h1.style.color = 'limegreen'; // 인라인 요소로 스타일 진행 됨
// h1.style.backgroundColor = 'skyblue';
// h1.style.border = '4px solid brown';
// h1.style.textShadow = '2px 2px 10px #f005';

let lis = document.querySelectorAll("li");
// console.log(lis);

// // 반복문을 이용해서 여러 요소 스타일을 한번에 설정
// for (let i = 0; i < lis.length; i++) {
//     console.log(lis[i]);

//     lis[i].style.color = 'rgb(0, 100, 200)';
//     lis[i].style.fontSize = '20px';
//     lis[i].style.backgroundColor = '#ddd'
// }

// // for ... of 반복문
// // for (let 반복변수 of 배열) {}
// const mylists = ['a', 'b', 'c', 'd'];
// for (let list of mylists) {
//     console.log(list);
// }

// for (let li of lis) {
//     console.log(li);
//     li.style.color = 'rgb(0, 100, 200)';
//     li.style.fontSize = '20px';
//     li.style.backgroundColor = '#ddd'
// }

// 3-2. 클래스 제어 방식
// classList 속성
// - add(클래스명): 클래스 추가
// - remove(클래스명): 클래스 삭제
// - toggle(클래스명): 클래스 있으면 제거, 없으면 추가
// - contains(클래스명): 해당 클래스가 있는지 boolean 값으로 반환 (t/f)

// add()
console.log(h1);
h1.classList.add("header-color");
console.log(h1.classList);

// lis에 저장되어 있는 각각 li 요소에 접근해 .list-style 클래스 추가하기
// 반복문 사용하기
console.log(lis);
// for ... of 반복문
for (let li of lis) {
  // console.log(li.classList.add('list-style'));
  li.classList.add("list-style");
}

// for 반복문
// lis: li 태그를 모두 가져오는 배열
// for (let i = 0; i < lis.length; i++) {
//     lis[i].classList.add('list-style');
// }
// console.log(lis);

// remove()
console.log(h1.classList); // 삭제 전
h1.classList.remove("title");
console.log(h1.classList); // 삭제 후

// toggle()
h1.classList.toggle("happy"); // 없어서 추가
h1.classList.toggle("happy"); // 있어서 삭제

// contains()
console.log(h1.classList.contains("header-color")); // true
console.log(h1.classList.contains("lucky")); // false

//=================================================
// 계층이동
// 부모, 자식, 형제
const apple = document.querySelector("li");
const fruits = document.querySelector("ul");
console.log(apple);
console.log(fruits);

// 1. 부모 노드 찾기
// 직속 부모는 하나
console.log(apple.parentElement); // ul#fruits
console.log(apple.parentElement.parentElement); // body

// 2. 자식 노드 찾기
// 자식요소는 여러 개
console.log(fruits.children); // li*4
console.log(fruits.children[0]); // 0번째 자식요소
console.log(fruits.children[1]); // 1번째 자식요소
console.log(fruits.children[2]); // 2번째 자식요소
console.log(fruits.children[3]); // 3번째 자식요소

console.log(fruits.children[0].parentElement); // 부모 -> 자식 -> 부모

// 3. 형제 노드
const lists = document.querySelectorAll("li");
console.log(lists); // li*4
const listOrange = lists[2]; // 아래 코드와 동일
// const listOrange = document.querySelectorAll('li')[2];
console.log(listOrange);
console.log(listOrange.previousElementSibling); // 선택요소 바로 이전 형제요소 선택
console.log(listOrange.nextElementSibling); // 선택요소 바로 다음 형제요소 선택

const numbers = document.querySelector("ol");
console.log(numbers);
console.log(numbers.children[2]);
console.log(numbers.children[2].children[1]);
console.log(numbers.children[2].parentElement);

const number3 = lists[4];
console.log(number3);
console.log(number3.previousElementSibling);
console.log(number3.nextElementSibling);
