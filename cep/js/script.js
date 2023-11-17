function pesquisarCep() {
    var cepDigitado = document.querySelector("#cepDigitado").value
    var url = `https://viacep.com.br/ws/${cepDigitado}/json/`

    fetch(url).then((response) => {
        return response.json();
    }).then((response) => {
        document.querySelector("#cep").innerText = response.cep
        document.querySelector("#logradouro").innerText = response.logradouro
        document.querySelector("#bairro").innerText = response.bairro
        document.querySelector("#localidade").innerText = response.localidade
        document.querySelector("#uf").innerText = response.uf
    })
}