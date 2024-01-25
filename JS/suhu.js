function cekNomor() {
    let suhuValue = parseFloat(document.getElementById('nomor').value);

    if (isNaN(suhuValue)) {
        alert("Masukkan suhu yang valid.");
        return;
    }

    let selectedUnit = document.getElementById('unit').value;

    let convertedTemperature = 0;

    switch (selectedUnit) {
        case 'celsius':
            convertedTemperature = suhuValue;
            result = `
            ${suhuValue} Celcius <br>
            ${((suhuValue * 9 / 5) + 32)} Fahrenheit <br>
            ${(suhuValue + 273.15)} Kelvin <br>`;
            break;

        case 'kelvin':
            convertedTemperature = suhuValue;
            result = `
            ${suhuValue} Kelvin <br>
            ${((suhuValue - 273.15) * (9 / 5) + 32)} Fahrenheit <br> 
            ${(suhuValue - 273.15)} Celcius <br>`;
            break;

        case 'fahrenheit':
            convertedTemperature = suhuValue;
            result = `
            ${suhuValue} Fahrenheit <br>
            ${((suhuValue - 32) * (5/9))} Celsius <br>
            ${((suhuValue - 32) * 5 / 9 + 273.15)} Kelvin <br>`;
            break;

        default:
            alert("Pilihan unit tidak valid.");
            return;
    }

    document.getElementById('hasil').innerHTML = result;
}