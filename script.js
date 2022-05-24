
// buscar a imagem e o texo
let btn = $(".btn")

btn.click(()=>{
    buscarData()
})
 

function buscarData() {
    let dataDesejada = $(".dataDesejada").val() 
    
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=5lVIJbkSYci40KMD082vyIGkrqTfrJCHGWptg70H&date=${dataDesejada}`,
        type: `GET`,
        success: function(response){
            console.log(response)
    
            $("#img").html(`<img id="img" src="${response.hdurl}">`),
            $("#explicacao").text(`${response.explanation}`)
        },
        error: function(error) {
            console.error(error) //adicionar erro a datas inferiores a "1995-06-16"
        },
})
}

console.log(buscarData())



// date: "2022-05-23"
explanation: "This picture of Andromeda shows not only where stars are now, but where stars will soon be. Of course, the big, beautiful Andromeda Galaxy, M31, is a spiral galaxy -- and a mere 2.5 million light-years away.  Both space-based and ground-based observatories have been here combined to produce this intriguing composite image of Andromeda, at wavelengths both inside and outside normally visible light. The visible light shows where M31's stars are now -- as highlighted in white and blue hues and imaged by the Hubble, Subaru, and Mayall telescopes.  The infrared light shows where M31's future stars will soon form -- as highlighted in orange hues and imaged by NASA's Spitzer Space Telescope.  The infrared light tracks enormous lanes of dust, warmed by stars, sweeping along Andromeda's spiral arms.  This dust is a tracer of the galaxy's vast interstellar gas -- the raw material for future star formation.  These new stars will likely form over the next hundred million years, surely well before Andromeda merges with our Milky Way Galaxy in about 5 billion years."
hdurl: "https://apod.nasa.gov/apod/image/2205/M31_HubbleSpitzerGendler_2000.jpg"
media_type: "image"
service_version: "v1"
title: "The Once and Future Stars of Andromeda"
url: "https://apod.nasa.gov/apod/image/2205/M31_HubbleSpitzerGendler_960.jpg"

