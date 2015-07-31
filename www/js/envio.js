        $(function() {

            $("#enviadatos").click(function() {
                /*var elNombre = $("#nombre").val();
			    var elMail = $("#mail").val();
			    var elTelefono = $("#telefono").val();
			$("#nombre").val(" ");
		    $("#mail").val(" ");
		    $("#telefono").val(" ");*/
				var elNombre = $("#nombre").val();
				var laFecha = $("#fecha").val();
				var elApellido = $("#apellido").val();
				var elNum_nomina = $("#num_nomina").val();
			$("#nombre").val(" ");
			$("#fecha").val(" ");
			$("#apellido").val(" ");
			$("#num_nomina").val(" ");
                    $.ajax({
                      type: "POST",
                      url: "http://192.168.0.100/proyectos/php/conecta1.php",
                      //data: ({name: elNombre, mail: elMail, telefono: elTelefono }),
					  data: ({
						  nombre: elNombre,
						  fecha: laFecha, 
						  apellido: elApellido,
						  num_nomina: elNum_nomina
					  }),
                      cache: false,
                      dataType: "text",
                      success: onSuccess
                    });
                
            });

        
            function onSuccess(data)
            {
            
        alert(data);
            }

        });
