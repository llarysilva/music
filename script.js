function carregar() {
    var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora sao ${hora} horas`
if (hora  >= 0 && hora < 12) { 
    img.src = 'manha.jpg'
    document.body.style.background = "rgba(177, 172, 125, 0.336)"
} else if (hora >= 12 && hora < 18) {
img.src = 'tarde.jpg'
document.body.style.background = "#b9846f"
}
else {
img.src = 'noite.webp'
document.body.style.background = "#515154"

}

  }
