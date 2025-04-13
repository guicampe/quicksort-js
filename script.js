let arr = [];
res = document.querySelector('#resultado');

// função adiciona itens no array e mostra na tela em tempo real
function adiciona() {

    arr.push(document.getElementById('numeros').value.split(','));
    res.innerHTML = arr;

}

document.getElementById('numeros').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        adiciona()
    }
});