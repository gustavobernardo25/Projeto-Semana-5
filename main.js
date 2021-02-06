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



function validarrg() {
    var rg = document.getElementById("rg");

    if (rg.value.length == 13) {
        alert("RG Válido!")
    } else {
        alert("RG Inválido!")
    }
}

function validarcpf() {
    var cpf = document.getElementById("cpf");

    if (cpf.value.length == 14) {
        alert("CPF Válido!")
    } else {
        alert("CPF Inválido!")
    }
}


function validarcep() {
    var cep = document.getElementById("cep");

    if (cep.value.length == 9) {
        alert("CEP Válido!")
    } else {
        alert("CEP Inválido!")
    }
}

function validarCampos(){
    var Nome = formuser.Nome.value;
    if (Nome == ""){
        alert('Preencha o campo Nome do funcionário.');
        formuser.Nome.focus();
        return false;
    }
    var cpf = formuser.cpf.value;
    if (cpf == ""){
        alert('Preencha o campo CPF.');
        formuser.cpf.focus();
        return false;
    }

    var rg = formuser.rg.value;
    if (rg == ""){
        alert('Preencha o campo RG.');
        formuser.rg.focus();
        return false;
    }

    
    var data = formuser.data.value;
    if (data == ""){
        alert('Preencha o campo Data de Nascimento.');
        formuser.data.focus();
        return false;
    }
    
    var cnh = formuser.cnh.value;
    if (cnh == ""){
        alert('Preencha o campo do tipo de CNH.');
        formuser.cnh.focus();
        return false;
    }
    
    var ecivil = formuser.ecivil.value;
    if (ecivil == ""){
        alert('Preencha o campo do estado civil.');
        formuser.ecivil.focus();
        return false;
    }
    
    var cep = formuser.cep.value;
    if (cep == ""){
        alert('Preencha o campo CEP.');
        formuser.cep.focus();
        return false;
    }

    var rua = formuser.rua.value;
    if (rua == ""){
        alert('Preencha o campo Rua.');
        formuser.rua.focus();
        return false;
    }

    var bairro = formuser.bairro.value;
    if (bairro == ""){
        alert('Preencha o campo Bairro.');
        formuser.bairro.focus();
        return false;
    }

    var cidade = formuser.cidade.value;
    if (cidade == ""){
        alert('Preencha o campo Cidade.');
        formuser.cidade.focus();
        return false;
    }

    var estado = formuser.estado.value;
    if (estado == ""){
        alert('Preencha o campo Estado');
        formuser.estado.focus();
        return false;
    }

    var num = formuser.num.value;
    if (num == ""){
        alert('Preencha o campo Numero da moradia.');
        formuser.num.focus();
        return false;
    }

    var complemento = formuser.complemento.value;
    if (complemento == ""){
        alert('Preencha o campo de complemento.');
        formuser.complemento.focus();
        return false;
    }

    const fields = {
        "Nome": formuser.Nome,
        "CPF" : formuser.cpf.value,
        "RG": formuser.rg.value,
        "data": formuser.data.value,
        "estado-civil": formuser.ecivil.value,
        "CEP": formuser.rg.value,
        "rua": formuser.rua.value,
        "bairro": formuser.bairro.value,
        "cidade": formuser.cidade.value,
        "estado": formuser.estado.value,
        "numero": formuser.numero.value,
        "complemento": formuser.complemento[1].value,

    }
  

const objetojson = JSON.stringify(fields)

const xhr = new XMLHttpRequest();

xhr.open('POST','https://beginner-api.herokuapp.com/save')



}

function getDadosEnderecoCEP(cep) {

    let xhr = new XMLHttpRequest()

    let url = 'https://viacep.com.br/ws/' + cep + '/json/unicode/'

    xhr.open('GET', url, true)

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
             let dadosJSONText = xhr.responseText
                let dadosJSONObj = JSON.parse(dadosJSONText)

                document.getElementById('rua').value = dadosJSONObj.logradouro
                document.getElementById('bairro').value = dadosJSONObj.bairro
                document.getElementById('cidade').value = dadosJSONObj.localidade
                document.getElementById('estado').value = dadosJSONObj.uf
            }
        }
    }
    xhr.send();
}