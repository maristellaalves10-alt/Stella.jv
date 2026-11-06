const nome = "Stella";
const idade = 17;
const curso = "Direito";
const mensalidade = 100;
const vagasDisponiveis = 10;
const desconto = true;
//idade

if (idade >= 18) {
    console.log("inscriçao permitida");
} else if (idade === 16 || idade === 17) {
    console.log("inscriçao permitida com autorização dos pais");
} else {
    console.log("inscriçao não permitida");
}
//vagas
if (vagasDisponiveis > 0) {
    console.log("existe vagas disponíveis");
} else {
    console.log("Nao existe vagas esgotadas");
}
//desconto
if (desconto && idade >= 18) {
    console.log("desconto aplicado: 30% ");
}else if (desconto && idade === 16 || idade === 17) {
    console.log("desconto aplicado: 15% ");
} else {
    console.log("sem desconto aplicado");
}
if (mensalidade>= 300){
    console.log("classificaçao: curso economico")
}else if (mensalidade >= 600){
    console.log("classificaçao: curso intermediario")
}else if(mensalidade < 600){
    console.log("classificaçao: curso premuim")
}
