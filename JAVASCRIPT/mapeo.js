{
    ventas_facturacion = {
        sede: String,
        fecha: Date,
        Hora: hour,
        Numero_factura: Number,
        Cliente: String,
        productos: [],
        subtotal: Number,
        IVA: Number,
        total: Number,
    }

    pedidos = {
        Cliente: String,
        direccion: Number,
        telefono: Number,
        Numero_factura: numero,
        productos: [],

    }

    gastos = {
        servicios: Number,
        software: Number,
        arriendo: Number,
        plataformasDelivery: Number,
        nomina: Number,
    }

    Compras: []

    clientes = {
        nombre: String,
        correo: String,
        ordenPedida: String,
        numerovisita: Number 
    }

    mesas ={
        ubicacion: String,
        numeroMesa: Number,
        nombreReserva: String,
    }

    categorias = {
        oriental: String,
        regionalTpica: String,
        desayunos: String,
        almuerzos: String,
        comidarapida: String
    }

    
}



