const inputCep = document.getElementById("inputCep");
const btnBuscar = document.getElementById("btnBuscar");
const areaResultado = document.getElementById("areaResultado");

const txtRua = document.getElementById("rua");
const txtBairro = document.getElementById("bairro");
const txtCidade = document.getElementById("cidade");
const txtEstado = document.getElementById("estado");

function buscarEndereco() {
    const cep = inputCep.value.trim();

    if (cep.length !== 8) {
        alert("Por favor, digite um CEP válido com 8 números.");
        return;
    }

    // Dados simulados para funcionar em qualquer lugar e rede
    const dadosSimulados = {
        logradouro: "Avenida Paulista",
        bairro: "Bela Vista",
        localidade: "São Paulo",
        uf: "SP"
    };

    txtRua.innerText = dadosSimulados.logradouro;
    txtBairro.innerText = dadosSimulados.bairro;
    txtCidade.innerText = dadosSimulados.localidade;
    txtEstado.innerText = dadosSimulados.uf;

    areaResultado.style.display = "block";
}

btnBuscar.addEventListener("click", buscarEndereco);
