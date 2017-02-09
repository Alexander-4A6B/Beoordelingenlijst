function haalCijfer1() {
    var eersteCijfer = document.getElementById("cijfer1").value;
    if (eersteCijfer <= 49) {
        document.getElementById("resultaat").innerHTML += "het cijfer is " + eersteCijfer + " en is dus onvoldoende<br>";
    }
    if (eersteCijfer >= 50 && eersteCijfer <= 59) {
        document.getElementById("resultaat").innerHTML += "het cijfer is " + eersteCijfer + " en is dus matig<br>";
    }
    if (eersteCijfer >= 60 && eersteCijfer <= 74) {
        document.getElementById("resultaat").innerHTML += "het cijfer is " + eersteCijfer + " voldoende<br>";
    }
    if (eersteCijfer >= 75) {
        document.getElementById("resultaat").innerHTML += "het cijfer is " + eersteCijfer + " en is dus goed<br>";
    }
}

function haalCijfer2() {
    var tweedeCijfer = document.getElementById("cijfer2").value;
    if (tweedeCijfer <= 49) {
        document.getElementById("resultaat").innerHTML += "De boordeling is onvoldoende, want het cijfer is " + tweedeCijfer + "<br>";
    }
    if (tweedeCijfer >= 50 && tweedeCijfer <= 59) {
        document.getElementById("resultaat").innerHTML += "De boordeling is matig, want het cijfer is " + tweedeCijfer + "<br>";
    }
    if (tweedeCijfer >= 60 && tweedeCijfer <= 74) {
        document.getElementById("resultaat").innerHTML += "De boordeling is voldoende, want het cijfer is " + tweedeCijfer + "<br>";
    }
    if (tweedeCijfer >= 75) {
        document.getElementById("resultaat").innerHTML += "De boordeling is goed, want het cijfer is " + tweedeCijfer + "<br>";
    }
}



