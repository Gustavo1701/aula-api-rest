// Consumir a api de cep viaCep e criar função no qual eu passo o cep e retorno no console os dados do endereço
const buscaCep = cep => {
    fetch (`https://brasilapi.com.br/api/cep/v2/${cep}`)
        .then((response) => response.json(cep))
        .then((data) => console.log(data))
}

buscaCep(89010025);