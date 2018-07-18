var inputTamanho = document.querySelector('[name=tamanho]');
var outputTamanho = document.querySelector('[name=valortamanho]');

function mostraTamanho(){
	outputTamanho.value = inputTamanho.value;
}

inputTamanho.oninput = mostraTamanho;


function newPage(){
	window.open("file:///I:/firstSite/firstSite/checkout.html");
}