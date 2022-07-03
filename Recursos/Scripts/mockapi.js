$(document).ready(function () {
    obtener_datos()
});

function obtener_datos() {
    $.ajax('https://62aa6b2b371180affbd50961.mockapi.io/ventas', {
        type: 'GET',
        success: function (data) {
            for (var index = 0; index < data.length; index++) {
                var id = data[index].id
                var usuario = data[index].usuario
                var producto = data[index].producto
                var cantidad = data[index].cantidad
                var monto = data[index].precio
                var moneda = data[index].moneda
                var fecha = data[index].fecha
                var fila_tabla = '<tr>'
                                +'<td>'+id+'</td>'
                                +'<td>'+usuario+'</td>'
                                +'<td>'+cantidad+' '+producto+'</td>'
                                +'<td>'+monto+' '+moneda+'</td>'
                                +'<td>'+fecha+'</td>'
                                '</tr>'
            console.log(fila_tabla)
            $("#tbody_ventas").append(fila_tabla);
            }
        }
    });
}