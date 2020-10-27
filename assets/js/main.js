function berechnen() {

let inputNumber = document.getElementById("preis-input").value * 1;
console.log(inputNumber);

let mwst19 = inputNumber * 0.19;
console.log(mwst19);

let mwst7 = inputNumber * 0.07;

if (document.getElementById("zubrutto").checked==true && document.getElementById("neunzehn").checked==true) {
    document.getElementById("Netto-Brutto-Satz").innerHTML = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro";
    document.getElementById("ergebnis1").innerHTML = mwst19.toFixed(2) + "€"
    console.log(mwst19 + inputNumber);
    let resultPlus19 = mwst19 + inputNumber;
    document.getElementById("ergebnis2").innerHTML = resultPlus19.toFixed(2) + "€";
}

if (document.getElementById("zubrutto").checked==true && document.getElementById("sieben").checked==true) {
    document.getElementById("Netto-Brutto-Satz").innerHTML = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro";
    document.getElementById("ergebnis1").innerHTML = mwst7.toFixed(2)+ "€";
    console.log(mwst7 + inputNumber);

    let resultPlus7 = mwst7 + inputNumber;
    document.getElementById("ergebnis2").innerHTML = resultPlus7.toFixed(2)+ "€";
}

if (document.getElementById("zunetto").checked==true && document.getElementById("neunzehn").checked==true) {
    document.getElementById("Netto-Brutto-Satz").innerHTML = "Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro";
    document.getElementById("ergebnis1").innerHTML = mwst19.toFixed(2) + "€";

    let resultMinus19 = inputNumber - mwst19;
    document.getElementById("ergebnis2").innerHTML = resultMinus19.toFixed(2) + "€";
}

if (document.getElementById("zunetto").checked==true && document.getElementById("sieben").checked==true) {
    document.getElementById("Netto-Brutto-Satz").innerHTML = "Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro";
    document.getElementById("ergebnis1").innerHTML = mwst7.toFixed(2) + "€";

    let resultMinus7 = inputNumber - mwst7;
    document.getElementById("ergebnis2").innerHTML = resultMinus7.toFixed(2) + "€";
}
}
