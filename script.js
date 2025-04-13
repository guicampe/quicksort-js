let arr = [];
const res = document.querySelector('#resultado');
const resQS = document.querySelector('#resultadoQuicksort');
document.querySelector('#numeros').focus();
document.querySelector('#botaoQuicksort').style.display = 'none';

// funcao adiciona itens no array e mostra na tela
function adiciona() {
    const input = document.querySelector('#numeros');
    const valor = input.value.trim();

    if (valor === '') return;

    arr.push(Number(valor));
    res.innerHTML = arr.join(' - ');
    
    input.value = '';
    input.focus();
    document.querySelector('#botaoQuicksort').style.display = 'block';
}


// permite adicionar com enter
document.getElementById('numeros').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        adiciona();
    }

});

// usando o quicksort com pivos e separacao
function quicksort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    let pivo = arr[0];
    let menores = [];
    let maiores = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= pivo) {
            menores.push(arr[i]);
        } else {
            maiores.push(arr[i]);
        }
    }

    return [...quicksort(menores), pivo, ...quicksort(maiores)];
}

document.querySelector('#botaoQuicksort').addEventListener('click', function(){
    const resultadoFinal = quicksort(arr);
    resQS.innerHTML = resultadoFinal.join(' - ');
});