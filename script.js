
// buscar a imagem e o texo
let btn = $(".btn").click(()=>{
    buscarData()
})
 

function buscarData() {
    let dataDesejada = $(".dataDesejada").val()

    
    $.get({
        url: `https://api.nasa.gov/planetary/apod?api_key=5lVIJbkSYci40KMD082vyIGkrqTfrJCHGWptg70H&date=${dataDesejada}`,
        type: `GET`,
        success: function(response){ 
    
            $("#img").html(`<img id="img" src="${response.hdurl}">`),
            $("#explicacao").text(`${response.explanation}`)
        },
        error: function() {
            if (dataDesejada < "1995-06-16") {
                return alert("The first photo in the astronomy picture of the day was taken in 1995-06-16, please type a date above this day.")
            } //adicionar erro a datas inferiores a "1995-06-16"
        },
          
})
}

let btnPrincipal = $('#btnPrincipal').click(()=>{ //ao clicar na pagina inicial, é redirecionado pra apod
        location.assign("apod.html")
})

let home = $('#home').click(()=>{ //ao clicar, é redirecionado pra pagina inicial
    location.assign("index.html")
})

let linkedin = $('#linkedin').click(()=>{ //ao clicar, é redirecionado pro meu linkedin
    location.assign("https://www.linkedin.com/in/j%C3%A9ssica-bispo-/")
})

let github = $('#github').click(()=>{ //ao clicar, é redirecionado pro meu github
    location.assign("https://github.com/jessbispo")
})

