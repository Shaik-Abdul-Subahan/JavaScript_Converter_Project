function convert(){
    let cm = document.getElementById('cm');
    let m = cm.value * 100;
    let result = 'The converted value is:\n' + cm.value + 'm' + '=' + m + 'cm';
    document.getElementById('result').innerText = result;
}

function reset() {
    document.getElementById('cm').value = '';
    document.getElementById('result').innerText = 'Here you will get the result!';
}