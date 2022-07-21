function rezultat()
{
    var brojPanela = Number(document.getElementById("inputpaneli").value);
    var snagaPanela = Number(document.getElementById("inputsnaga").value);
    var result = brojPanela * snagaPanela * output * 0.6+"Wh";

    document.getElementById("result").value = result;
         
}

function getOption() {
        selectElement = document.querySelector('#inputzupanija');
        output = selectElement.value;
        
        document.querySelector('.output').textContent = output;
    }