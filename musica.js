document.addEventListener("DOMContentLoaded", function() {
    var audioUrl = "https://soundhelix.com";
    
    var div = document.createElement("div");
    div.style = "position:fixed; bottom:25px; left:25px; z-index:9999; display:flex; align-items:center; gap:10px; background:rgba(12,9,20,0.9); padding:10px 15px; border-radius:30px; border:1px solid rgba(255,215,0,0.4); box-shadow:0 4px 15px rgba(0,0,0,0.6); backdrop-filter:blur(5px);";
    
    var boton = document.createElement("button");
    boton.innerHTML = "🎵";
    boton.style = "background:#ffd700; color:#0c0914; border:none; width:38px; height:35px; border-radius:50%; font-size:1.1rem; cursor:pointer; font-weight:bold; display:flex; justify-content:center; align-items:center;";
    
    var texto = document.createElement("span");
    texto.innerHTML = "Melodía Celta";
    texto.style = "color:#ffd700; font-size:0.85rem; font-family:sans-serif; font-weight:bold; letter-spacing:0.5px;";
    
    var audio = document.createElement("audio");
    audio.loop = true;
    audio.src = audioUrl;
    
    boton.onclick = function() {
        if (audio.paused) {
            audio.play();
            boton.innerHTML = "⏸️";
            texto.innerHTML = "Sonando...";
        } else {
            audio.pause();
            boton.innerHTML = "🎵";
            texto.innerHTML = "Melodía Celta";
        }
    };
    
    div.appendChild(boton);
    div.appendChild(texto);
    div.appendChild(audio);
    document.body.appendChild(div);
});
