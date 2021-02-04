const campoCpf = document.getElementById('cpf')


function cpfMask() {

    var cpf = campoCpf.value;

    if (cpf.length == 3 || cpf.length == 7) {
        campoCpf.value += ".";
    }
    if (cpf.length == 11) {
        campoCpf.value += '-';
    }
}


const campoRg = document.getElementById('rg')

function rgMask() {
var rg = campoRg.value;

if (rg.length == 2 || rg.length == 6){
campoRg.value += '.';
}
if (rg.length ==  10){
    campoRg.value += '-';
    }
}


    const campoCep = document.getElementById('cep')
    
    function cepMask() {
    var cep = campoCep.value;
    
    if (cep.length == 5){
    campoCep.value += '-';
    }
}
