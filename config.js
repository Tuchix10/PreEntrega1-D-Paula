const minimoPermitido = 1000;
const maximoPermitido = 10000000;
const periodoMaximo = 60;
const periodoMinimo = 1;
const tasa=75;
const tasaMensual=(tasa/12)/100;
const tab = document.getElementById("tab");

const pesoArgentino = new Intl.NumberFormat('es-Ar', {
    style: 'currency',
    currency: 'ARS',
    minimunFractionDigits: 2
});

function reinvertir() {
    return document.getElementById("reinvertirSi").checked;
}

function calcularInteres(monto, periodo) {
    return monto * tasaMensual * periodo;
}

function validarMonto(monto) {
    if (monto < minimoPermitido) {
        alert(`El minimo permitido para un plazo fijo es ${minimoPermitido}`);
        return false;
    }
    if (monto > maximoPermitido) {
        alert(`El maximo permitido para un plazo fijo es ${maximoPermitido}`);
        return false;
    }
    return true;
}

function validarPeriodo(periodo) {
    if (periodo < periodoMinimo) {
        alert(`El minimo permitido para un plazo fijo es ${periodoMinimo}`);
        return false;
    }
    if (periodo > periodoMaximo) {
        alert(`El maximo permitido para un plazo fijo es ${periodoMaximo}`);
        return false;
    }
    return true;
}

function agregarFila(mes, capital, periodo) {
    let interes = calcularInteres(capital, periodo);
    let capitalMasInteres = interes + capital;
    tab.innerHTML = tab.innerHTML +
        `<tr>
            <td>${mes}</td>
            <td>${pesoArgentino.format(capital)}</td>
            <td>${pesoArgentino.format(interes)}</td>
            <td>${pesoArgentino.format(capitalMasInteres)}</td>
        </tr>`;

    return capitalMasInteres;
}

function generarTabla () {
    tab.innerHTML = "";
    const monto = Number(document.getElementById("dinero").value);
    const periodo = Number(document.getElementById("periodo").value);
    if ((!validarMonto(monto)) || (!validarPeriodo(periodo))) {
        return;
    }

    if (!reinvertir()) {
        agregarFila(1, monto, periodo);
        return;
    }

    let capitalAcumulado = monto;
    for(let mes = 1; mes <= periodo; mes++){
        capitalAcumulado = agregarFila(mes, capitalAcumulado, 1);
    }
}