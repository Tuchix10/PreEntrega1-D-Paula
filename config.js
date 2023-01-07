const minimoPermitido = 1000;
const maximoPermitido = 10000000;
const periodoMaximo = 60;
const periodoMinimo = 1;
const tasa=75;
const tasaMensual=(tasa/12)/100;

    const pesoArgentino = new Intl.NumberFormat('es-Ar', {
        style: 'currency',
        currency: 'ARS',
        minimunFractionDigits: 2
    });

function reinvertir() {
    return document.getElementById("reinvertirSi").checked;
}

function calcularPorPeriodo(monto) {
    if (reinvertir()) {
        const d4 = monto * (1 + tasaMensual) ** periodo();
        return d4.toFixed(2);
    }
    const tasaPeriodo = tasaMensual * periodo();
    return monto * (1 + tasaPeriodo);
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

function generarTabla () {
    document.getElementById("tab").innerHTML="";
    const monto = Number(document.getElementById("dinero").value);
    const periodo = Number(document.getElementById("periodo").value);
    if ((!validarMonto(monto)) || (!validarPeriodo(periodo))) {
        return;
    }
    if (reinvertir()) {
        for(i=1,k=monto;i<=periodo;i++,k=k+resultado){
            resultado=k*tasaMensual
            dato1=resultado.toFixed(2);
            dato2=resultado+k;
            dato3=dato2.toFixed(2)
            document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+
                    `<tr>
                        <td> ${i}</td>
                        <td> ${pesoArgentino.format(k)}</td>
                        <td> ${pesoArgentino.format(dato1)}</td>
                        <td> ${pesoArgentino.format(dato3)}</td>
                    </tr>`;
        }
        return;
    }
        let ganancia=(monto*(tasaMensual*periodo));
        let totalSinReinvertir=monto+ganancia;
        document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+
        `<tr>
            <td> ${1}</td>
            <td> ${pesoArgentino.format(monto)}</td>
            <td> ${pesoArgentino.format(ganancia)}</td>
            <td> ${pesoArgentino.format(totalSinReinvertir)}</td>
        </tr>`;
}