function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar</b>";
    //alert("Obrigado por Clicar");
}

function redirecionar(){
    window.open("https://globallabs.academy/");
    //window.location.href= "https://globallabs.academy/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML= "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML= "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function change(elemento){
    console.log(elemento.value);
}
/*
function soma(n1,n2){
    return n1+n2;
}

function setReplace(frase,nome,novo_nome){
    return frase.replace(nome,novo_nome);
}

function validaIdade(idade){
    var validade;
    if(idade>=18){
        validar = true;
    }else{
        validar = false
    }
    return validar;
}


var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));

alert(soma(2,3));
alert(setReplace("vai Japão","Japão", "Brasil"));
*/ 
/*
var d = new Date();
alert(d.getMonth()+1);
alert(d.getDay());
*/

/*
for(var count=0; count <=5; count++){
    alert(count);
}
*/

/*
var count =5;
while(count <5){
    console.log(count);
    count++;
}
*/

/*
var idade=prompt("Qual sua idade?");
if(idade>= 18){
    alert("maior de idade!");
}else{
    alert("menor de idade!");
}
*/

/*
var frutas= [{nome: "maçã", cor: "vermelha"},{nome: "uva", cor: "roxo"}]
console.log(frutas);
alert(frutas[0].nome);
*/

/*
var fruta= {nome: "maçã", cor: "vermelha"}
console.log(fruta.nome);
console.log(fruta.cor);
*/

//var lista= ["maçã","banana", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join("/"));


/*var nome="Jorge Murilo";
var idade=20;
var idade2=25;
var frase="Cruzeiro é o melhor time do mundo";
//alert(nome + "tem " + idade + " anos");
//alert(idade+idade2);
console.log(nome);
console.log(idade+idade2);
//console.log(frase.replace("Cruzeiro", "Brasil"));
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());
*/