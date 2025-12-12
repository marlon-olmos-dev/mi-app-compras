// DATOS EN MEMORIA
let listaCompras = [];
let listaVencimientos = [];

// Variables para navegación con teclado
let indiceSugerenciaActual = -1;
let sugerenciasActuales = [];

// CATÁLOGO DE PRODUCTOS COMUNES
const productosComunes = [
    // Lácteos
    "Leche", "Yogurt", "Queso cremoso", "Queso tibo", "Manteca", "Crema de leche", "Dulce de leche",
    
    // Panadería
    "Pan", "Pan lactal", "Facturas", "Galletitas", "Tostadas", "Bizcochos", "Pan Rallado", "Pan de Hamburguesa", "Tortillas clasicas rapiditas", "Pan de panchos", "Medialunas con manteca", 
    
    // Carnes
    "Carne picada", "Asado", "Pollo", "Milanesas", "Chorizo", "Salchichas", "Hamburguesa",
    
    // Verduras y frutas
    "Tomate", "Lechuga", "Cebolla", "Papa", "Zanahoria", "Manzana", "Banana", "Naranja", "Acelga", "Zapallito verde", "Remolacha", "Espinaca",
    
    // Almacén
    "Arroz", "Fideos", "Aceite", "Sal", "Azúcar", "Harina", "Café", "Té", "Yerba mate", "Mayonesa", "Ketchup", "Mostaza", "Vinagre", "Mermelada", "Dulce de batata",
    
    // Bebidas
    "Agua mineral", "Soda", "Jugo", "Vino", "Cerveza", "Coca Cola", "Fanta", "Sprite", "Pepsi", "Fernet", "Jugo en Polvo",
    
    // Limpieza
    "Lavandina", "Detergente", "Jabón", "Papel higiénico", "Servilletas", "Shampoo", "Pasta de dientes", "Desodorante", "Acondicionador", "Bolsa de consorcio",
];

// CATÁLOGO DE PRODUCTOS CON PRECIOS
// Precios en pesos argentinos (podés cambiar los supermercados y precios)
const catalogoProductos = [
    // Lácteos
    { id: 1, nombre: "Leche entera La Serenísima 1L", categoria: "Lácteos", 
    precios: { carrefour: 850, vital: 820, jumbo: 800 } },
    { id: 2, nombre: "Yogurt Sancor natural 190g", categoria: "Lácteos", 
    precios: { carrefour: 450, vital: 430, jumbo: 420 } },
    { id: 3, nombre: "Queso cremoso Mendicrim 200g", categoria: "Lácteos", 
    precios: { carrefour: 1200, vital: 1150, jumbo: 1180 } },
    { id: 4, nombre: "Manteca La Serenísima 200g", categoria: "Lácteos", 
    precios: { carrefour: 980, vital: 950, jumbo: 920 } },
    { id: 5, nombre: "Dulce de leche La Serenísima 400g", categoria: "Lácteos", 
    precios: { carrefour: 1350, vital: 1320, jumbo: 1300 } },
    
    // Panadería
    { id: 6, nombre: "Pan lactal Bimbo blanco", categoria: "Panadería", 
    precios: { carrefour: 1200, vital: 1150, jumbo: 1180 } },
    { id: 7, nombre: "Galletitas Oreo 118g", categoria: "Panadería", 
    precios: { carrefour: 950, vital: 920, jumbo: 900 } },
    { id: 8, nombre: "Tostadas Criollitas x200g", categoria: "Panadería", 
    precios: { carrefour: 780, vital: 750, jumbo: 740 } },
    { id: 9, nombre: "Galletitas Chocolinas 170g", categoria: "Panadería", 
    precios: { carrefour: 650, vital: 630, jumbo: 620 } },
    
    // Carnes
    { id: 10, nombre: "Carne picada común x kg", categoria: "Carnes", 
    precios: { carrefour: 4500, vital: 4400, jumbo: 4300 } },
    { id: 11, nombre: "Pollo entero x kg", categoria: "Carnes", 
    precios: { carrefour: 2800, vital: 2750, jumbo: 2700 } },
    { id: 12, nombre: "Milanesas de carne x kg", categoria: "Carnes", 
    precios: { carrefour: 5200, vital: 5100, jumbo: 5000 } },
    { id: 13, nombre: "Chorizo parrillero x kg", categoria: "Carnes", 
    precios: { carrefour: 3800, vital: 3700, jumbo: 3650 } },
    
    // Almacén
    { id: 14, nombre: "Arroz Gallo oro 1kg", categoria: "Almacén", 
    precios: { carrefour: 1100, vital: 1080, jumbo: 1050 } },
    { id: 15, nombre: "Fideos Matarazzo 500g", categoria: "Almacén", 
    precios: { carrefour: 850, vital: 820, jumbo: 800 } },
    { id: 16, nombre: "Aceite girasol Cocinero 900ml", categoria: "Almacén", 
    precios: { carrefour: 1450, vital: 1420, jumbo: 1400 } },
    { id: 17, nombre: "Azúcar Ledesma 1kg", categoria: "Almacén", 
    precios: { carrefour: 950, vital: 920, jumbo: 900 } },
    { id: 18, nombre: "Harina 000 Pureza 1kg", categoria: "Almacén", 
    precios: { carrefour: 780, vital: 750, jumbo: 730 } },
    { id: 19, nombre: "Sal fina Celusal 500g", categoria: "Almacén", 
    precios: { carrefour: 320, vital: 300, jumbo: 290 } },
    { id: 20, nombre: "Café Nescafé classic 170g", categoria: "Almacén", 
    precios: { carrefour: 3200, vital: 3150, jumbo: 3100 } },
    { id: 21, nombre: "Yerba mate Rosamonte 1kg", categoria: "Almacén", 
    precios: { carrefour: 2800, vital: 2750, jumbo: 2700 } },
    { id: 22, nombre: "Mayonesa Hellmann's 475g", categoria: "Almacén", 
    precios: { carrefour: 1650, vital: 1620, jumbo: 1600 } },
    { id: 23, nombre: "Ketchup Hellmann's 390g", categoria: "Almacén", 
    precios: { carrefour: 1200, vital: 1180, jumbo: 1150 } },
    
    // Bebidas
    { id: 24, nombre: "Coca Cola 2.25L", categoria: "Bebidas", 
    precios: { carrefour: 1800, vital: 1750, jumbo: 1700 } },
    { id: 25, nombre: "Agua mineral Villavicencio 2L", categoria: "Bebidas", 
    precios: { carrefour: 650, vital: 620, jumbo: 600 } },
    { id: 26, nombre: "Jugo Baggio naranja 1L", categoria: "Bebidas", 
    precios: { carrefour: 950, vital: 920, jumbo: 900 } },
    { id: 27, nombre: "Cerveza Quilmes 1L", categoria: "Bebidas", 
    precios: { carrefour: 1200, vital: 1150, jumbo: 1120 } },
    { id: 28, nombre: "Vino tinto Viñas de Balbo 1125ml", categoria: "Bebidas", 
    precios: { carrefour: 1500, vital: 1450, jumbo: 1420 } }
];

// Variable para filtros
let categoriaActual = 'Todos';
let busquedaActual = '';

// Función para normalizar texto (Primera Letra Mayúscula)
function normalizarTexto(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

// Validar nombre de producto (versión anti-gibberish)
function validarNombreProducto(nombre) {
    // 1. Verificar caracteres especiales
    if (/[^a-záéíóúüñA-ZÁÉÍÓÚÜÑ\s]/.test(nombre)) {
        return { valido: false, mensaje: '❌ No puede contener números ni símbolos' };
    }
    
    // 2. Verificar repeticiones (más de 2 veces)
    if (/(.)\1{2,}/.test(nombre)) {
        return { valido: false, mensaje: '❌ Caracteres repetidos sospechosos' };
    }
    
    // 3. Verificar longitud
    if (nombre.length < 3 || nombre.length > 50) {
        return { valido: false, mensaje: '❌ Debe tener entre 3 y 50 caracteres' };
    }
    
    // 4. Contar vocales y consonantes
    const nombreSinEspacios = nombre.replace(/\s/g, '');
    const vocales = (nombreSinEspacios.match(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g) || []).length;
    const consonantes = (nombreSinEspacios.match(/[bcdfghjklmnpqrstvwxyzñBCDFGHJKLMNPQRSTVWXYZÑ]/g) || []).length;
    const totalLetras = vocales + consonantes;
    
    // 5. Verificar mínimo de vocales
    if (vocales < 2) {
        return { valido: false, mensaje: '❌ Debe tener al menos 2 vocales' };
    }
    
    // 6. Verificar proporción vocales/consonantes
    const proporcionVocales = vocales / totalLetras;
    if (proporcionVocales < 0.20 || proporcionVocales > 0.65) {
        return { valido: false, mensaje: '❌ "' + nombre + '" no parece un producto válido' };
    }
    
    // 7. Verificar consonantes seguidas (máximo 4)
    if (/[bcdfghjklmnpqrstvwxyzñBCDFGHJKLMNPQRSTVWXYZÑ]{5,}/.test(nombre)) {
        return { valido: false, mensaje: '❌ Demasiadas consonantes seguidas' };
    }
    
    // 8. Lista negra
    const prohibidas = ['juguete', 'dinosaurio', 'toy', 'muñeco', 'pelota', 'auto', 'moto', 'celular', 'computadora'];
    const nombreLower = nombre.toLowerCase();
    for (let i = 0; i < prohibidas.length; i++) {
        if (nombreLower.includes(prohibidas[i])) {
            return { valido: false, mensaje: '❌ No es un producto de supermercado' };
        }
    }
    
    return { valido: true };
}

// Función para filtrar productos
function filtrarProductos(texto) {
    if (texto.length < 2) return [];
    
    const textoLower = texto.toLowerCase();
    return productosComunes.filter(function(producto) {
        return producto.toLowerCase().includes(textoLower);
    }).slice(0, 5); // Máximo 5 sugerencias
}

// Función para mostrar sugerencias
function mostrarSugerencias(sugerencias, inputId, listId) {
    const lista = document.getElementById(listId);
    
    // Guardar sugerencias actuales
    sugerenciasActuales = sugerencias;
    indiceSugerenciaActual = -1;
    
    if (sugerencias.length === 0) {
        lista.style.display = 'none';
        return;
    }
    
    let html = '';
    for (let i = 0; i < sugerencias.length; i++) {
        html += '<div class="sugerencia-item" data-index="' + i + '" onclick="seleccionarSugerencia(\'' + sugerencias[i] + '\', \'' + inputId + '\', \'' + listId + '\')">';
        html += sugerencias[i];
        html += '</div>';
    }
    
    lista.innerHTML = html;
    lista.style.display = 'block';
}

// Función para seleccionar una sugerencia
function seleccionarSugerencia(producto, inputId, listId) {
    document.getElementById(inputId).value = producto;
    document.getElementById(listId).style.display = 'none';
}

// Función para ocultar sugerencias al hacer clic fuera
document.addEventListener('click', function(e) {
    const sugerenciasLista = document.getElementById('sugerenciasLista');
    const sugerenciasVencimiento = document.getElementById('sugerenciasVencimiento');
    
    if (sugerenciasLista && !e.target.closest('.autocomplete-wrapper')) {
        sugerenciasLista.style.display = 'none';
    }
    if (sugerenciasVencimiento && !e.target.closest('.autocomplete-wrapper')) {
        sugerenciasVencimiento.style.display = 'none';
    }
});

// Cargar datos guardados
function cargarDatos() {
    const datosGuardados = localStorage.getItem('appCompras');
    if (datosGuardados) {
        const datos = JSON.parse(datosGuardados);
        listaCompras = datos.compras || [];
        listaVencimientos = datos.vencimientos || [];
    }
}

// Guardar datos
function guardarDatos() {
    localStorage.setItem('appCompras', JSON.stringify({
        compras: listaCompras,
        vencimientos: listaVencimientos
    }));
}

// CAMBIAR ENTRE TABS
function cambiarTab(nombre, boton) {
    const todosLosTabs = document.querySelectorAll('.tab');
    for (let i = 0; i < todosLosTabs.length; i++) {
        todosLosTabs[i].classList.remove('active');
    }
    
    const todasLasSecciones = document.querySelectorAll('.section');
    for (let i = 0; i < todasLasSecciones.length; i++) {
        todasLasSecciones[i].classList.remove('active');
    }
    
    boton.classList.add('active');
    document.getElementById(nombre).classList.add('active');
    
    if (nombre === 'vencimientos') {
        actualizarEstadisticas();
    }
}

// LISTA DE COMPRAS
function agregarProducto() {
    const nombre = document.getElementById('productoNombre').value.trim();
    const cantidad = document.getElementById('productoCantidad').value;
    
    // VALIDACIONES
    if (nombre === '') {
        alert('❌ Por favor escribe un nombre de producto');
        return;
    }
    
    // Validar nombre con función nueva
    const validacion = validarNombreProducto(nombre);
    if (!validacion.valido) {
        alert(validacion.mensaje);
        return;
    }
    
    // Validar cantidad
    if (!cantidad || cantidad < 1) {
        alert('❌ La cantidad debe ser al menos 1');
        return;
    }
    
    // Normalizar el nombre
    const nombreNormalizado = normalizarTexto(nombre);
    
    listaCompras.push({
        id: Date.now(),
        nombre: nombreNormalizado,
        cantidad: cantidad,
        comprado: false
    });
    
    document.getElementById('productoNombre').value = '';
    document.getElementById('productoCantidad').value = '1';
    document.getElementById('sugerenciasLista').style.display = 'none';
    
    guardarDatos();
    renderizarLista();
}

function marcarComprado(id) {
    for (let i = 0; i < listaCompras.length; i++) {
        if (listaCompras[i].id === id) {
            listaCompras[i].comprado = !listaCompras[i].comprado;
            break;
        }
    }
    guardarDatos();
    renderizarLista();
}

function eliminarProducto(id) {
    const nuevaLista = [];
    for (let i = 0; i < listaCompras.length; i++) {
        if (listaCompras[i].id !== id) {
            nuevaLista.push(listaCompras[i]);
        }
    }
    listaCompras = nuevaLista;
    guardarDatos();
    renderizarLista();
}

function renderizarLista() {
    const ul = document.getElementById('listaCompras');
    
    if (listaCompras.length === 0) {
        ul.innerHTML = '<div class="empty-state">No hay productos en tu lista.<br>¡Agrega algunos!</div>';
        return;
    }
    
    let html = '';
    for (let i = 0; i < listaCompras.length; i++) {
        const item = listaCompras[i];
        const claseComprado = item.comprado ? ' comprado' : '';
        const iconoBoton = item.comprado ? '↩️' : '✓';
        
        html += '<li class="item' + claseComprado + '">';
        html += '  <div class="item-info">';
        html += '    <div class="item-nombre">' + item.nombre + '</div>';
        html += '    <div class="item-detalles">Cantidad: ' + item.cantidad + '</div>';
        html += '  </div>';
        html += '  <div class="item-actions">';
        html += '    <button class="btn-small btn-check" onclick="marcarComprado(' + item.id + ')">' + iconoBoton + '</button>';
        html += '    <button class="btn-small btn-delete" onclick="eliminarProducto(' + item.id + ')">🗑️</button>';
        html += '  </div>';
        html += '</li>';
    }
    
    ul.innerHTML = html;
}

// VENCIMIENTOS
function agregarVencimiento() {
    const nombre = document.getElementById('vencimientoNombre').value.trim();
    const fecha = document.getElementById('vencimientoFecha').value;
    const diasAlerta = document.getElementById('vencimientoAlerta').value;
    
    // VALIDACIONES
    if (nombre === '' || fecha === '') {
        alert('❌ Por favor completa todos los campos');
        return;
    }
    
    // Validar nombre con función nueva
    const validacion = validarNombreProducto(nombre);
    if (!validacion.valido) {
        alert(validacion.mensaje);
        return;
    }
    
    // Validar que la fecha no sea del pasado
    const fechaSeleccionada = new Date(fecha);
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    
    if (fechaSeleccionada < hoy) {
        const confirmar = confirm('⚠️ La fecha seleccionada ya pasó. ¿Querés agregarlo igual?');
        if (!confirmar) return;
    }
    
    // Validar días de alerta
    if (!diasAlerta || diasAlerta < 1) {
        alert('❌ Los días de alerta deben ser al menos 1');
        return;
    }
    
    // Normalizar el nombre
    const nombreNormalizado = normalizarTexto(nombre);
    
    listaVencimientos.push({
        id: Date.now(),
        nombre: nombreNormalizado,
        fechaVencimiento: fecha,
        diasAlerta: parseInt(diasAlerta),
        consumido: false
    });
    
    document.getElementById('vencimientoNombre').value = '';
    document.getElementById('vencimientoFecha').value = '';
    document.getElementById('vencimientoAlerta').value = '3';
    document.getElementById('sugerenciasVencimiento').style.display = 'none';
    
    guardarDatos();
    renderizarVencimientos();
    actualizarEstadisticas();
}

function marcarConsumido(id) {
    for (let i = 0; i < listaVencimientos.length; i++) {
        if (listaVencimientos[i].id === id) {
            listaVencimientos[i].consumido = !listaVencimientos[i].consumido;
            break;
        }
    }
    guardarDatos();
    renderizarVencimientos();
    actualizarEstadisticas();
}

function eliminarVencimiento(id) {
    const nuevaLista = [];
    for (let i = 0; i < listaVencimientos.length; i++) {
        if (listaVencimientos[i].id !== id) {
            nuevaLista.push(listaVencimientos[i]);
        }
    }
    listaVencimientos = nuevaLista;
    guardarDatos();
    renderizarVencimientos();
    actualizarEstadisticas();
}

function calcularDiasRestantes(fechaVencimiento) {
    // Crear fechas sin considerar hora (solo día)
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    
    // Parsear la fecha del input (viene como "YYYY-MM-DD")
    const partes = fechaVencimiento.split('-');
    const vencimiento = new Date(partes[0], partes[1] - 1, partes[2]);
    vencimiento.setHours(0, 0, 0, 0);
    
    const diferencia = vencimiento - hoy;
    return Math.ceil(diferencia / (1000 * 60 * 60 * 24));
}

function obtenerEstadoVencimiento(diasRestantes, diasAlerta) {
    // Colores fijos independientes de la alerta del usuario
    if (diasRestantes < 0) return 'urgente'; // Ya venció
    if (diasRestantes <= 7) return 'urgente'; // 7 días o menos = ROJO
    if (diasRestantes <= 30) return 'proximo'; // 8-30 días = NARANJA
    return 'ok'; // Más de 30 días = VERDE
}

function renderizarVencimientos() {
    const ul = document.getElementById('listaVencimientos');
    
    if (listaVencimientos.length === 0) {
        ul.innerHTML = '<div class="empty-state">No hay productos registrados.<br>¡Agrega algunos para controlar sus vencimientos!</div>';
        return;
    }
    
    const activos = [];
    for (let i = 0; i < listaVencimientos.length; i++) {
        if (!listaVencimientos[i].consumido) {
            activos.push(listaVencimientos[i]);
        }
    }
    
    activos.sort(function(a, b) {
        return new Date(a.fechaVencimiento) - new Date(b.fechaVencimiento);
    });
    
    let html = '';
    
    for (let i = 0; i < activos.length; i++) {
        const item = activos[i];
        const diasRestantes = calcularDiasRestantes(item.fechaVencimiento);
        const estado = obtenerEstadoVencimiento(diasRestantes, item.diasAlerta);
        
        let mensaje = '';
        if (diasRestantes < 0) {
            mensaje = '¡VENCIDO hace ' + Math.abs(diasRestantes) + ' días!';
        } else if (diasRestantes === 0) {
            mensaje = '¡Vence HOY!';
        } else if (diasRestantes === 1) {
            mensaje = 'Vence MAÑANA';
        } else {
            mensaje = 'Vence en ' + diasRestantes + ' días';
        }
        
        // Parsear correctamente la fecha
        const partes = item.fechaVencimiento.split('-');
        const fecha = new Date(partes[0], partes[1] - 1, partes[2]);
        const fechaFormateada = fecha.toLocaleDateString('es-AR');
        
        html += '<li class="item ' + estado + '">';
        html += '  <div class="item-info">';
        html += '    <div class="item-nombre">' + item.nombre + '</div>';
        html += '    <div class="item-detalles">' + mensaje + ' • Fecha: ' + fechaFormateada + '</div>';
        html += '  </div>';
        html += '  <div class="item-actions">';
        html += '    <button class="btn-small" style="background: #f59e0b;" onclick="editarVencimiento(' + item.id + ')">✏️ Editar</button>';
        html += '    <button class="btn-small btn-check" onclick="marcarConsumido(' + item.id + ')">✓ Consumido</button>';
        html += '    <button class="btn-small btn-delete" onclick="eliminarVencimiento(' + item.id + ')">🗑️</button>';
        html += '  </div>';
        html += '</li>';
    }
    
    ul.innerHTML = html;
}

function actualizarEstadisticas() {
    const activos = [];
    for (let i = 0; i < listaVencimientos.length; i++) {
        if (!listaVencimientos[i].consumido) {
            activos.push(listaVencimientos[i]);
        }
    }
    
    let urgentes = 0;
    let proximos = 0;
    
    for (let i = 0; i < activos.length; i++) {
        const item = activos[i];
        const diasRestantes = calcularDiasRestantes(item.fechaVencimiento);
        const estado = obtenerEstadoVencimiento(diasRestantes, item.diasAlerta);
        
        if (estado === 'urgente') {
            urgentes++;
        } else if (estado === 'proximo') {
            proximos++;
        }
    }
    
    document.getElementById('statUrgente').textContent = urgentes;
    document.getElementById('statProximo').textContent = proximos;
    document.getElementById('statTotal').textContent = activos.length;
}

// ========================================
// CATÁLOGO DE PRODUCTOS
// ========================================

function obtenerMasBarato(precios) {
    const supermercados = Object.keys(precios);
    let min = Infinity;
    let supermercado = '';
    
    for (let i = 0; i < supermercados.length; i++) {
        if (precios[supermercados[i]] < min) {
            min = precios[supermercados[i]];
            supermercado = supermercados[i];
        }
    }
    
    return { supermercado: supermercado, precio: min };
}

function agregarDesdeCatalogo(productoId) {
    const producto = catalogoProductos.find(function(p) {
        return p.id === productoId;
    });
    
    if (!producto) return;
    
    // Verificar si ya está en la lista
    const yaExiste = listaCompras.find(function(p) {
        return p.nombre === producto.nombre;
    });
    
    if (yaExiste) {
        // Si ya existe, preguntar si quiere sumar cantidad
        const sumar = confirm('Este producto ya está en tu lista. ¿Querés aumentar la cantidad?');
        if (sumar) {
            const inputCantidad = document.getElementById('cantidadCatalogo-' + productoId);
            const cantidad = parseInt(inputCantidad.value) || 1;
            yaExiste.cantidad = parseInt(yaExiste.cantidad) + cantidad;
            guardarDatos();
            renderizarLista();
            alert('✅ Cantidad actualizada: ' + yaExiste.cantidad + ' unidades');
            inputCantidad.value = 1; // Resetear
        }
        return;
    }
    
    // Obtener cantidad del input específico de este producto
    const inputCantidad = document.getElementById('cantidadCatalogo-' + productoId);
    const cantidad = parseInt(inputCantidad.value) || 1;
    
    listaCompras.push({
        id: Date.now(),
        nombre: producto.nombre,
        cantidad: cantidad,
        comprado: false
    });
    
    guardarDatos();
    renderizarLista();
    
    // Resetear input
    inputCantidad.value = 1;
    
    // Feedback visual
    alert('✅ Agregado a tu lista: ' + cantidad + ' unidad' + (cantidad > 1 ? 'es' : ''));
}

function filtrarPorCategoria(categoria) {
    categoriaActual = categoria;
    
    // Actualizar botones activos
    const botones = document.querySelectorAll('.filtro-btn');
    for (let i = 0; i < botones.length; i++) {
        botones[i].classList.remove('active');
        if (botones[i].textContent === categoria) {
            botones[i].classList.add('active');
        }
    }
    
    renderizarCatalogo();
}

function filtrarCatalogo(texto) {
    busquedaActual = texto.toLowerCase();
    renderizarCatalogo();
}

function renderizarCatalogo() {
    const contenedor = document.getElementById('listaCatalogo');
    
    let productosFiltrados = catalogoProductos;
    
    // Filtrar por categoría
    if (categoriaActual !== 'Todos') {
        productosFiltrados = productosFiltrados.filter(function(p) {
            return p.categoria === categoriaActual;
        });
    }
    
    // Filtrar por búsqueda
    if (busquedaActual !== '') {
        productosFiltrados = productosFiltrados.filter(function(p) {
            return p.nombre.toLowerCase().includes(busquedaActual);
        });
    }
    
    if (productosFiltrados.length === 0) {
        contenedor.innerHTML = '<div class="empty-state">No se encontraron productos</div>';
        return;
    }
    
    let html = '';
    
    for (let i = 0; i < productosFiltrados.length; i++) {
        const producto = productosFiltrados[i];
        const masBarato = obtenerMasBarato(producto.precios);
        
        html += '<div class="producto-card">';
        html += '  <div class="producto-header">';
        html += '    <h3 class="producto-nombre">' + producto.nombre + '</h3>';
        html += '    <span class="producto-categoria">' + producto.categoria + '</span>';
        html += '  </div>';
        html += '  <div class="producto-precios">';
        
        // Mostrar precios de cada supermercado
        const supermercados = Object.keys(producto.precios);
        for (let j = 0; j < supermercados.length; j++) {
            const super_nombre = supermercados[j];
            const precio = producto.precios[super_nombre];
            const esMasBarato = super_nombre === masBarato.supermercado;
            
            html += '<div class="precio-item' + (esMasBarato ? ' mas-barato' : '') + '">';
            html += '  <span class="super-nombre">' + super_nombre.charAt(0).toUpperCase() + super_nombre.slice(1) + '</span>';
            html += '  <span class="precio">$' + precio.toLocaleString('es-AR') + '</span>';
            if (esMasBarato) {
                html += '  <span class="badge-barato">✓ Más barato</span>';
            }
            html += '</div>';
        }
        
        html += '  </div>';
        
        // NUEVO: Agregar input de cantidad y botón
        html += '  <div style="display: flex; gap: 8px; align-items: center;">';
        html += '    <div style="flex: 0 0 auto;">';
        html += '      <label style="font-size: 13px; color: #64748b; font-weight: 600; display: block; margin-bottom: 4px;">Cantidad</label>';
        html += '      <input type="number" id="cantidadCatalogo-' + producto.id + '" min="1" value="1" style="width: 70px; padding: 10px; text-align: center; font-weight: 700;">';
        html += '    </div>';
        html += '    <button class="btn-agregar-catalogo" style="flex: 1; margin-top: 20px;" onclick="agregarDesdeCatalogo(' + producto.id + ')">+ Agregar a mi lista</button>';
        html += '  </div>';
        
        html += '</div>';
    }
    
    contenedor.innerHTML = html;
}

// Manejar Enter en inputs
function manejarTecladoProducto(event) {
    const listaSugerencias = document.getElementById('sugerenciasLista');
    const sugerenciasAbiertas = listaSugerencias && listaSugerencias.style.display === 'block';
    
    // FLECHA ABAJO o TAB - Navegar hacia abajo
    if ((event.key === 'ArrowDown' || event.key === 'Tab') && sugerenciasAbiertas) {
        event.preventDefault();
        navegarSugerencias('sugerenciasLista', 'productoNombre', 'abajo');
        return;
    }
    
    // FLECHA ARRIBA - Navegar hacia arriba
    if (event.key === 'ArrowUp' && sugerenciasAbiertas) {
        event.preventDefault();
        navegarSugerencias('sugerenciasLista', 'productoNombre', 'arriba');
        return;
    }
    
    // ENTER - Agregar o seleccionar sugerencia
    if (event.key === 'Enter') {
        event.preventDefault();
        
        if (sugerenciasAbiertas && indiceSugerenciaActual >= 0) {
            // Hay una sugerencia seleccionada
            seleccionarSugerencia(
                sugerenciasActuales[indiceSugerenciaActual], 
                'productoNombre', 
                'sugerenciasLista'
            );
            indiceSugerenciaActual = -1;
        } else if (!sugerenciasAbiertas) {
            // No hay sugerencias, agregar producto
            agregarProducto();
        }
        return;
    }
    
    // ESCAPE - Cerrar sugerencias
    if (event.key === 'Escape' && sugerenciasAbiertas) {
        listaSugerencias.style.display = 'none';
        indiceSugerenciaActual = -1;
    }
}

function manejarTecladoVencimiento(event) {
    const listaSugerencias = document.getElementById('sugerenciasVencimiento');
    const sugerenciasAbiertas = listaSugerencias && listaSugerencias.style.display === 'block';
    
    // FLECHA ABAJO o TAB - Navegar hacia abajo
    if ((event.key === 'ArrowDown' || event.key === 'Tab') && sugerenciasAbiertas) {
        event.preventDefault();
        navegarSugerencias('sugerenciasVencimiento', 'vencimientoNombre', 'abajo');
        return;
    }
    
    // FLECHA ARRIBA - Navegar hacia arriba
    if (event.key === 'ArrowUp' && sugerenciasAbiertas) {
        event.preventDefault();
        navegarSugerencias('sugerenciasVencimiento', 'vencimientoNombre', 'arriba');
        return;
    }
    
    // ENTER - Seleccionar sugerencia
    if (event.key === 'Enter' && sugerenciasAbiertas && indiceSugerenciaActual >= 0) {
        event.preventDefault();
        seleccionarSugerencia(
            sugerenciasActuales[indiceSugerenciaActual], 
            'vencimientoNombre', 
            'sugerenciasVencimiento'
        );
        indiceSugerenciaActual = -1;
        return;
    }
    
    // ESCAPE - Cerrar sugerencias
    if (event.key === 'Escape' && sugerenciasAbiertas) {
        listaSugerencias.style.display = 'none';
        indiceSugerenciaActual = -1;
    }
}

function navegarSugerencias(listId, inputId, direccion) {
    if (sugerenciasActuales.length === 0) return;
    
    // Cambiar índice según dirección
    if (direccion === 'abajo') {
        indiceSugerenciaActual++;
        if (indiceSugerenciaActual >= sugerenciasActuales.length) {
            indiceSugerenciaActual = 0; // Volver al inicio
        }
    } else if (direccion === 'arriba') {
        indiceSugerenciaActual--;
        if (indiceSugerenciaActual < 0) {
            indiceSugerenciaActual = sugerenciasActuales.length - 1; // Ir al final
        }
    }
    
    // Resaltar visualmente la sugerencia actual
    const lista = document.getElementById(listId);
    const items = lista.querySelectorAll('.sugerencia-item');
    
    // Remover highlight de todos
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('sugerencia-destacada');
    }
    
    // Agregar highlight al actual
    if (items[indiceSugerenciaActual]) {
        items[indiceSugerenciaActual].classList.add('sugerencia-destacada');
        items[indiceSugerenciaActual].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
    
    // Actualizar el input con el texto de la sugerencia
    document.getElementById(inputId).value = sugerenciasActuales[indiceSugerenciaActual];
}

// Variables para modo edición
let editandoVencimiento = null;

function editarVencimiento(id) {
    const item = listaVencimientos.find(function(v) {
        return v.id === id;
    });
    
    if (!item) return;
    
    editandoVencimiento = id;
    
    document.getElementById('vencimientoNombre').value = item.nombre;
    document.getElementById('vencimientoFecha').value = item.fechaVencimiento;
    document.getElementById('vencimientoAlerta').value = item.diasAlerta;
    
    const btnAgregar = document.querySelector('#vencimientos .input-group button:first-of-type');
    btnAgregar.textContent = '💾 Guardar';
    btnAgregar.style.background = '#f59e0b';
    btnAgregar.onclick = function() { guardarEdicionVencimiento(); };
    
    // Mostrar botón cancelar
    document.getElementById('btnCancelarEdicion').style.display = 'block';
    
    document.getElementById('vencimientoNombre').scrollIntoView({ behavior: 'smooth', block: 'center' });
    document.getElementById('vencimientoNombre').focus();
}


function guardarEdicionVencimiento() {
    const nombre = document.getElementById('vencimientoNombre').value.trim();
    const fecha = document.getElementById('vencimientoFecha').value;
    const diasAlerta = document.getElementById('vencimientoAlerta').value;
    
    // VALIDACIONES
    if (nombre === '' || fecha === '') {
        alert('❌ Por favor completa todos los campos');
        return;
    }
    
    // Validar nombre con función nueva
    const validacion = validarNombreProducto(nombre);
    if (!validacion.valido) {
        alert(validacion.mensaje);
        return;
    }
    
    if (!diasAlerta || diasAlerta < 1) {
        alert('❌ Los días de alerta deben ser al menos 1');
        return;
    }
    
    // Buscar y actualizar el item
    const item = listaVencimientos.find(function(v) {
        return v.id === editandoVencimiento;
    });
    
    if (item) {
        item.nombre = normalizarTexto(nombre);
        item.fechaVencimiento = fecha;
        item.diasAlerta = parseInt(diasAlerta);
        
        guardarDatos();
        renderizarVencimientos();
        actualizarEstadisticas();
        
        alert('✅ Producto actualizado correctamente');
    }
    
    cancelarEdicionVencimiento();
}

function cancelarEdicionVencimiento() {
    editandoVencimiento = null;
    
    document.getElementById('vencimientoNombre').value = '';
    document.getElementById('vencimientoFecha').value = '';
    document.getElementById('vencimientoAlerta').value = '3';
    
    const btnAgregar = document.querySelector('#vencimientos .input-group button:first-of-type');
    btnAgregar.textContent = '+ Agregar';
    btnAgregar.style.background = '';
    btnAgregar.onclick = function() { agregarVencimiento(); };
    
    // Ocultar botón cancelar
    document.getElementById('btnCancelarEdicion').style.display = 'none';
}

// INICIALIZAR
cargarDatos();
renderizarLista();
renderizarVencimientos();
renderizarCatalogo(); // ← AGREGA ESTA LÍNEA
actualizarEstadisticas();

// Solicitar permiso para notificaciones
solicitarPermisoNotificaciones();

// Verificar vencimientos al cargar
setTimeout(function() {
    verificarYNotificar();
}, 1000);