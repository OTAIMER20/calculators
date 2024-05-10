document.getElementById('calcular').addEventListener('click', function(){
    const principal = parseFloat(document.getElementById('value').value);
    const taxa = parseFloat(document.getElementById('fee').value) / 100;
    const tempo = parseFloat(document.getElementById('time').value);

    const total = principal + (principal * taxa * tempo);

    document.getElementById('total').innerHTML = ("Kz  " + total.toFixed(2));
});