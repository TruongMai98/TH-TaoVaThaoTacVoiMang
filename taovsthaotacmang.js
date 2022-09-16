let x = 0;
let array = Array();

function addElementToArray() {
    array[x] = document.getElementById("txtValue").value;
    alert("Element: " + array[x] + " Added at index " + x);
    x++;
    document.getElementById("txtValue").value = "";
}

function displayArray() {
    let e = "<hr>";
    for (let i = 0; i < array.length; i++) {
        e += "Element " + i + " = " + array[i] + "<br>";
    }
    document.getElementById("result").innerHTML = e;
}