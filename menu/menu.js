// menu.js
document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector('.header');
    header.innerHTML = `
            <div class="logo">
            <a href="index.html"><img src="logo-sem-fundo.png" alt="Logotipo"> </a>
            </div>
        <nav class="navbar">
            <ul>
                <li><a href="index.html">Home |</a></li>
                <li><a href="simples/simples.html">Simples |</a></li>
                <li><a href="juros simples/js.html">J. Simples |</a></li>
                <li><a href="juros compostos/jc.html">J. Compostos |</a></li>
                <li><a href="regra de tres simples/tres-simples.html">Regra de 3 |</a></li>
                <li><a href="imc/imc.html">IMC</a></li>
            </ul>
        </nav>
    `;
});
