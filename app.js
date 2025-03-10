function convert() {
    let value = parseFloat(document.getElementById('inputValue').value);
    let conversionType = document.getElementById('conversionType').value;
    let result = '';

    if (!isNaN(value)) {
        switch (conversionType) {
            case 'metersToCm':
                result = value + ' meters = ' + (value * 100) + ' centimeters';
                break;
            case 'cmToMeters':
                result = value + ' centimeters = ' + (value / 100) + ' meters';
                break;
            case 'kmToMeters':
                result = value + ' kilometers = ' + (value * 1000) + ' meters';
                break;
            case 'milesToKm':
                result = value + ' miles = ' + (value * 1.60934) + ' kilometers';
                break;
        }
    } else {
        result = 'Please enter a valid number.';
    }

    document.getElementById('result').innerText = result;
}

function reset() {
    document.getElementById('inputValue').value = '';
    document.getElementById('result').innerText = 'Here you will get the result!';
}
