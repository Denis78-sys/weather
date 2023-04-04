const chaveApi = "732cde9e868e4cef9a585a83eb9114ce"
const apiPais = "https://www.countryflagicons.com/FLAT/64/BR.png"

const inputCidade = document.querySelector("#input-cidade")
var pesquisa = document.querySelector("#pesquisa")

var cidade = document.querySelector("#cidade")
var bandeira = document.querySelector("#bandeira")
var temperatura = document.querySelector("#temperatura span")
var descricao = document.querySelector("#descricao")
var umidade = document.querySelector("#umidade span")
var vento = document.querySelector("#vento span")
var icone = document.querySelector("#icone_tempo")
var dadoTempo = document.querySelector("#tempo-dados")


const getTempoDados = async (city) =>{

    try{
        var urlApi = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid='+chaveApi+'&lang=pt_br'

        const res = await fetch(urlApi)
        const dados = await res.json()

       // console.log(dados)

        cidade.innerHTML = dados.name;
        descricao.innerHTML = dados.weather[0].description;
        vento.innerHTML = dados.wind.speed+' km/h';
        umidade.innerHTML = dados.main.humidity+' %';
        temperatura.innerHTML = dados.main.temp
        bandeira.setAttribute('src', "https://www.countryflagicons.com/FLAT/64/"+dados.sys.country+".png")
        icone.setAttribute('src', 'https://openweathermap.org/img/wn/'+dados.weather[0].icon+'.png')

        dadoTempo.classList.remove("hide")

    }catch(e){
        console.log(e)
        alert("Cidade não encontrada, verifique se você digitou corretamentre o nome da cidade.")
    }
    
}



pesquisa.addEventListener("click", (e) => {  
    e.preventDefault();
    if(inputCidade.value == ""){
        alert("Digite o nome da cidade")
    }else{
        getTempoDados(inputCidade.value)
    }
   
})