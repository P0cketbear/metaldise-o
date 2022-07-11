
    fetch('https://mindicador.cl/api').then(function(response) {
        return response.json();
    }).then(function(dailyIndicators) {
        document.getElementById("t_indicadores").innerHTML = 'INDICADORES FINANCIEROS  ' + dailyIndicators.uf.fecha.split("T")[0] 
        document.getElementById("UF").innerHTML = '$' + dailyIndicators.uf.valor; 
        document.getElementById("UTM").innerHTML = '$' + dailyIndicators.utm.valor;
        document.getElementById("DOLAR").innerHTML = '$' + dailyIndicators.dolar.valor;
        document.getElementById("EURO").innerHTML = '$' + dailyIndicators.euro.valor;
        document.getElementById("IPC").innerHTML = dailyIndicators.ipc.valor+ "%"; 
        document.getElementById("DESEMPLEO").innerHTML = dailyIndicators.tasa_desempleo.valor + "%";
        document.getElementById("BTC").innerHTML = 'USD$' + dailyIndicators.bitcoin.valor;
        document.getElementById("COBRE").innerHTML = 'USD$' + dailyIndicators.libra_cobre.valor;
    }).catch(function(error) {
        console.log('Requestfailed', error);
    });   
  
    function Indicadores() {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Desea ver los Indicadores Financieros?',
            text: "En caso de no querer realizar la accion presionar cancelar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, redirigeme!',
            cancelButtonText: 'No, Cancelar!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                var url = "../metaldise-o/indicadores.html";
                $(location).attr('href',url);
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Redirección cancelada.',
              )
            }
          })
    }