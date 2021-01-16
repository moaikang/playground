{
  /* <html>
<body>
  <div>사용자:</div>
  <ul>
    <li>John</li>
    <li>Pete</li>
  </ul>
</body>
</html>

1. <div> DOM 노드
2. <ul> DOM 노드
3. 두 번째 <li> (Pete)

에 접근할 방법을 고민해보세요. */
}

// // (1)
// let divs = [];
// divs = [...divs, document.body.firstElementChild];
// divs = [...divs, document.body.children[0]];

// console.log(divs);

// // (2)
// let uls = [];
// uls = [...uls, document.body.children[1]];
// uls = [...uls, document.body.firstElementChild.nextElementSibling];

// console.log(uls);

// // (3)
// let lis = [];
// lis = [...lis, document.body.children[1].lastElementChild];
// lis = [...lis, document.getElementsByTagName("li")[1]];

// console.log(lis);

// DOM을 타고 제대로 되지 않은 DOM의 li의 개수를 파악하여라.

// const liTags = document.querySelectorAll("li");
// console.log(liTags);

// const result = [...liTags].reduce((count, liTag) => {
//   return liTag.parentNode.tagName === "UL" ? count + 1 : count;
// }, 0);

// console.log(result);

const firstUlTag = document.querySelector("ul");
firstUlTag.innerHTML += `<li>안녕하세요</li>`;

const liTags = firstUlTag.querySelectorAll("li");
const lastLiTagIndex = liTags.length - 1;
const lastLiTag = liTags[lastLiTagIndex];

lastLiTag.insertAdjacentHTML("afterend", "<li>바이바이</li>");

const newLiTag = document.createElement("li");
newLiTag.textContent = "저리가세요";

firstUlTag.appendChild(newLiTag);

const firstLiElem = liTags[0];
firstLiElem.textContent = "ㅋㅋ루삥뻥 ㅋㅋ";
firstLiElem.classList.add("클래스_추가!");
firstLiElem.classList.remove("클래스_추가!"); // Delete
firstLiElem.classList.add("클래스101"); // Create

firstLiElem.classList.replace("클래스101", "클래스202"); // Update

firstLiElem.classList.add("클래스101"); // Create

console.log(firstLiElem.className); // Read

firstLiElem.setAttribute("id", "아이디");
console.log(firstLiElem.getAttribute("id"));

const newElem = document.createElement("li");
newElem.textContent = "aaaa";
newElem.setAttribute("id", "아이디");
newElem.getAttribute("id");

firstLiElem.parentNode.replaceChild(newElem, firstLiElem);

firstUlTag.insertAdjacentHTML("beforeend", "<li>ㅋㅋㅋㅋ</li>");
