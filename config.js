function calculo () {
    let monto=Number(document.getElementById("dinero").value)
    let tm=(75/12)/100
    if(monto>=1000) {
        if (document.getElementById("radio1").checked) {
            d1=monto*tm;
            r1=d1+monto;
            document.getElementById("resultado").innerHTML=new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(r1);
        }
        if (document.getElementById("radio2").checked) {
            if (document.getElementById("radio5").checked) {
                tt=tm*3;
                d2=monto*tt;
                r2=d2+monto;
                document.getElementById("resultado").innerHTML=new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(r2);
            }
        }
        if (document.getElementById("radio3").checked) {
            if (document.getElementById("radio5").checked) {
                tna=75/100
                d3=monto*tna;
                r3=d3+monto;
                document.getElementById("resultado").innerHTML=new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(r3);
            }
        }
        if (document.getElementById("radio2").checked) {
            if (document.getElementById("radio4").checked) {
                d4=monto*(1+tm)**3;
                r4=d4.toFixed(2);
                document.getElementById("resultado").innerHTML=new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(r4);
            }
        }
        if (document.getElementById("radio3").checked) {
            if (document.getElementById("radio4").checked) {
                d5=monto*(1+tm)**12
                r5=d5.toFixed(2)
                document.getElementById("resultado").innerHTML=new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(r5);
            }
        }
    }
    else {
        alert ("El minimo permitido para un plazo fijo es $1000")
    }
}