const estadoSelect = document.getElementById("estado");
const cidadeSelect = document.getElementById("cidade");

// Carregar estados
fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
  .then(res => res.json())
  .then(estados => {
    estados.forEach(estado => {
      const option = document.createElement("option");
      option.value = estado.sigla;
      option.textContent = estado.nome;
      estadoSelect.appendChild(option);
    });
  });

// Quando escolher um estado
estadoSelect.addEventListener("change", () => {
  const estado = estadoSelect.value;

  cidadeSelect.innerHTML = '<option value="">Selecione a cidade</option>';

  fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`)
    .then(res => res.json())
    .then(cidades => {
      cidades.forEach(cidade => {
        const option = document.createElement("option");
        option.value = cidade.nome;
        option.textContent = cidade.nome;
        cidadeSelect.appendChild(option);
      });
    });
});
