let gForm = document.querySelector('#grocery');
let list =document.querySelector('#list');
gForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let p = gForm.elements.product;
    let q = gForm.elements.qty;
    let li = document.createElement('li');
    li.innerHTML= `${q.value} ${p.value}`
    list.appendChild(li);
    p.value = "";
    q.value= "";})