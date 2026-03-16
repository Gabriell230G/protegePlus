const denuncias = JSON.parse(localStorage.getItem("denuncias")) || []

// ---------------- TOTAL ----------------

document.getElementById("totalDenuncias").textContent = denuncias.length

// ---------------- ANONIMAS ----------------

let anonimas = denuncias.filter(d => {

let nome = d.nome
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g,"")

return nome.includes("anonimo")

})

document.getElementById("anonimas").textContent = anonimas.length

// ---------------- TABELA ----------------

const tabela = document.getElementById("tabelaDenuncias")

denuncias.forEach(d => {
const row = document.createElement("tr")

row.innerHTML = `
<td>${d.nome}</td>
<td>${d.email}</td>
<td>${d.telefone}</td>
<td>${d.tipo}</td>
<td>${d.estado}</td>
<td>${d.cidade}</td>
<td>${d.local}</td>
<td>${d.descricao}</td>
<td>${d.data}</td>
`

tabela.appendChild(row)
})


// ---------------- CONTAGEM POR TIPO ----------------
let tipos = {}
denuncias.forEach(d => {
tipos[d.tipo] = (tipos[d.tipo] || 0) + 1

})


// ---------------- GRAFICO TIPOS ----------------
new Chart(document.getElementById("graficoTipos"),{
type:"bar",
data:{
labels:Object.keys(tipos),
datasets:[{
label:"Denúncias por tipo",
data:Object.values(tipos),
backgroundColor:"#463DC1"
}]
},
})


// ---------------- CONTAGEM POR ESTADO ----------------

let estados = {}
denuncias.forEach(d => {
estados[d.estado] = (estados[d.estado] || 0) + 1
})


// ordenar estados
const topEstados = Object.entries(estados)
.sort((a,b)=>b[1]-a[1])
.slice(0,5)


// ---------------- GRAFICO ESTADOS ----------------

new Chart(document.getElementById("graficoEstados"),{
type:"bar",
data:{
labels:topEstados.map(e=>e[0]),
datasets:[{
label:"Top estados com denúncias",
data:topEstados.map(e=>e[1]),
backgroundColor:"#2b2676"
}]

}

})