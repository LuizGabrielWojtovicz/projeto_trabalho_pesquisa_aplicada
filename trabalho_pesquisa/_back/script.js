/*
    tamanho da atividade
*/

const micro = 0;
const pequena = 1;
const media = 2;
const grande = 3;

/*
    variantes de trabalho
*/

const presencial = 0;
const servico = 1;
const educacao = 2;
const comunicacao = 3;

function qtd_pessoas_estabelecimento(tamanho_da_atividade, variante_de_trabalho)
{
    if(tamanho_da_atividade == 0 && variante_de_trabalho == 0)
    {
        return 19;
    }
    else if(tamanho_da_atividade == 0 && variante_de_trabalho == 1)
    {
        return (19 - (19 * 14.5) / 100);
    }
    else if(tamanho_da_atividade == 0 && variante_de_trabalho == 2)
    {
        return (19 - (19 * 10.3) / 100);
    }
    else if(tamanho_da_atividade == 0 && variante_de_trabalho == 3)
    {
        return (19 - (19 * 7.7) / 100);
    }
    else if(tamanho_da_atividade == 1 && variante_de_trabalho == 0)
    {
        return 118;
    }
    else if(tamanho_da_atividade == 1 && variante_de_trabalho == 1)
    {
        return (118 - (118 * 14.5) / 100);
    }
    else if(tamanho_da_atividade == 1 && variante_de_trabalho == 2)
    {
        return (118 - (118 * 10.3) / 100);
    }
    else if(tamanho_da_atividade == 1 && variante_de_trabalho == 3)
    {
        return (118 - (118 * 7.7) / 100);
    }
    else if(tamanho_da_atividade == 2 && variante_de_trabalho == 0)
    {
        return 298;
    }
    else if(tamanho_da_atividade == 2 && variante_de_trabalho == 1)
    {
        return (298 - (298 * 14.5) / 100);
    }
    else if(tamanho_da_atividade == 2 && variante_de_trabalho == 2)
    {
        return (298 - (298 * 10.3) / 100);
    }
    else if(tamanho_da_atividade == 2 && variante_de_trabalho == 3)
    {
        return (298 - (298 * 7.7) / 100);
    }
    else if(tamanho_da_atividade == 3 && variante_de_trabalho == 0)
    {
        return 398;
    }
    else if(tamanho_da_atividade == 3 && variante_de_trabalho == 1)
    {
        return (398 - (398 * 14.5) / 100);
    }
    else if(tamanho_da_atividade == 3 && variante_de_trabalho == 2)
    {
        return (398 - (398 * 10.3) / 100);
    }
    else if(tamanho_da_atividade == 3 && variante_de_trabalho == 3)
    {
        return (398 - (398 * 7.7) / 100);
    }
}

var terminal_sitio_cercado = qtd_pessoas_estabelecimento(,);
var loja_de_roupas = qtd_pessoas_estabelecimento(micro, servico);
var posto_de_gasolina = qtd_pessoas_estabelecimento(micro, presencial);
var otica = qtd_pessoas_estabelecimento(micro, servico);
var loja_eletrodomesticos = qtd_pessoas_estabelecimento(pequena, servico);
var farmacia = qtd_pessoas_estabelecimento(micro, servico);
var mercado_diversos = qtd_pessoas_estabelecimento(media, servico);
var loja_de_fotos = qtd_pessoas_estabelecimento(micro, servico);
var banco = qtd_pessoas_estabelecimento(pequena, servico);
var restaurante = qtd_pessoas_estabelecimento(,);
var loja_esporte = qtd_pessoas_estabelecimento(,);
var laboratorio = qtd_pessoas_estabelecimento(,);
var produtos_lipeza = qtd_pessoas_estabelecimento(,);
var loja_sapatos = qtd_pessoas_estabelecimento(,);
var loja_brinquedos = qtd_pessoas_estabelecimento(,);
var loterica = qtd_pessoas_estabelecimento(,);
var advocacia = qtd_pessoas_estabelecimento(,);
var comercio_ervas = qtd_pessoas_estabelecimento(,);
var loja_celulares = qtd_pessoas_estabelecimento(,);
var doceria = qtd_pessoas_estabelecimento(,);
var odontologia = qtd_pessoas_estabelecimento(,);
var sorveteria = qtd_pessoas_estabelecimento(,);
var assistencia_tecnica = qtd_pessoas_estabelecimento(,);
var loja_moveis = qtd_pessoas_estabelecimento(,);
var padaria = qtd_pessoas_estabelecimento(,);
var autopecas = qtd_pessoas_estabelecimento(,);
var correio = qtd_pessoas_estabelecimento(,);
var psicologo = qtd_pessoas_estabelecimento(,);
var loja_cosmeticos = qtd_pessoas_estabelecimento(,);
var papelaria = qtd_pessoas_estabelecimento(,);
var lavanderia = qtd_pessoas_estabelecimento(,);
var curso = qtd_pessoas_estabelecimento(,);
var loja_tecnologia = qtd_pessoas_estabelecimento(,);
var loja_infantil = qtd_pessoas_estabelecimento(,);
var loja_instrumentos_musicais = qtd_pessoas_estabelecimento(,);


var pessoas_ponto_1;
var pessoas_ponto_2;
var pessoas_ponto_3;
var pessoas_ponto_4;
var pessoas_ponto_5;
var pessoas_ponto_6;
var pessoas_ponto_7;
var pessoas_ponto_8;
var pessoas_ponto_9;
var pessoas_ponto_10;
var pessoas_ponto_11;
var pessoas_ponto_12;
var pessoas_ponto_13;
var pessoas_ponto_14;
var pessoas_ponto_15;
var pessoas_ponto_16;




function ponto_1()
{
    for(var i = 0; i <= 100; i++)
    {
        document.getElementById("col_1").style.background = "linear-gradient(360deg, rgb(255, 0, 0) " + i + "%, rgb(0, 0, 0) " + i + "%)";
        document.getElementById("col_1").style.animation = "1s";
    }


}

function ponto_2()
{

    document.getElementById("col_2").style.background = "linear-gradient(360deg, rgb(255, 0, 0) 100%, rgb(0, 0, 0) 100%)";

}

function ponto_3()
{

    document.getElementById("col_3").style.background = "linear-gradient(360deg, rgb(255, 0, 0) 100%, rgb(0, 0, 0) 100%)";

}

function ponto_4()
{

    document.getElementById("col_4").style.background = "linear-gradient(360deg, rgb(255, 0, 0) 100%, rgb(0, 0, 0) 100%)";

}

function ponto_5()
{

    document.getElementById("col_5").style.background = "linear-gradient(360deg, rgb(255, 0, 0) 100%, rgb(0, 0, 0) 100%)";

}

function ponto_6()
{

    document.getElementById("col_6").style.background = "linear-gradient(360deg, rgb(255, 0, 0) 100%, rgb(0, 0, 0) 100%)";

}

function ponto_7()
{

    document.getElementById("col_7").style.background = "linear-gradient(360deg, rgb(255, 0, 0) 100%, rgb(0, 0, 0) 100%)";

}

function ponto_8()
{

    document.getElementById("col_8").style.background = "linear-gradient(360deg, rgb(255, 0, 0) 100%, rgb(0, 0, 0) 100%)";

}

function ponto_9()
{

    document.getElementById("col_9").style.background = "linear-gradient(360deg, rgb(255, 0, 0) 100%, rgb(0, 0, 0) 100%)";

}

function ponto_10()
{

    document.getElementById("col_10").style.background = "linear-gradient(360deg, rgb(255, 0, 0) 100%, rgb(0, 0, 0) 100%)";

}

function ponto_11()
{

    document.getElementById("col_11").style.background = "linear-gradient(360deg, rgb(255, 0, 0) 100%, rgb(0, 0, 0) 100%)";

}

function ponto_12()
{

    document.getElementById("col_12").style.background = "linear-gradient(360deg, rgb(255, 0, 0) 100%, rgb(0, 0, 0) 100%)";

}

function ponto_13()
{

    document.getElementById("col_13").style.background = "linear-gradient(360deg, rgb(255, 0, 0) 100%, rgb(0, 0, 0) 100%)";

}

function ponto_14()
{

    document.getElementById("col_14").style.background = "linear-gradient(360deg, rgb(255, 0, 0) 100%, rgb(0, 0, 0) 100%)";

}

function ponto_15()
{

    document.getElementById("col_15").style.background = "linear-gradient(360deg, rgb(255, 0, 0) 100%, rgb(0, 0, 0) 100%)";

}

function ponto_16()
{

    document.getElementById("col_16").style.background = "linear-gradient(360deg, rgb(255, 0, 0) 100%, rgb(0, 0, 0) 100%)";

}