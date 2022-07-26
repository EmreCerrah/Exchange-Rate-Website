

const amount=document.getElementById("amount");
const firstCurrency=document.getElementById("firstCurrency");
const secondCurrency=document.getElementById("secondCurrency");

const change= new Change();
const ui = new UI();
//change.get("eur","try","1");

eventListener();

function eventListener(){
    secondCurrency.addEventListener("change",changeCurrency);
    firstCurrency.addEventListener("change",changeCurrency);
    amount.addEventListener("input",changeCurrency);
}

function changeCurrency(){
    let from= firstCurrency.options[firstCurrency.selectedIndex].value;
    let to = secondCurrency.options[secondCurrency.selectedIndex].value;
    let price =amount.value;
    console.log(price);
    if (price===""||price==="0"){price="1";}
    change.get(from,to,price).then(response=> {console.log(response.result); ui.textUI(from,to) ;ui.resultUI(response.result)});
}
