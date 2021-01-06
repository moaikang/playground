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

// (1)
let divs = [];
divs = [...divs, document.body.firstElementChild];
divs = [...divs, document.body.children[0]];

console.log(divs);

// (2)
let uls = [];
uls = [...uls, document.body.children[1]];
uls = [...uls, document.body.firstElementChild.nextElementSibling];

console.log(uls);

// (3)
let lis = [];
lis = [...lis, document.body.children[1].lastElementChild];
lis = [...lis, document.getElementsByTagName("li")[1]];

console.log(lis);
