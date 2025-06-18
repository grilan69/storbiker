import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';


const Stack = createNativeStackNavigator();

const productos = [
  {
    id: '1',
    nombre: 'Casco Modelo BALAM',
    precio: 2139.99,
    imagen: 'https://ayguey.com/cdn/shop/files/cascobalam.jpg?v=1736877425',
    reseñas: [5, 4, 4, 5],
  },
  {
    id: '2',
    nombre: 'Casco Integral SHAFT SH-502 Solid Negro',
    precio: 1799.99,
    imagen: 'https://acdn-us.mitiendanube.com/stores/002/344/914/products/shaft-502-azul-1-cd3a72493099cc6bd217206507419813-640-0.png',
    reseñas: [3, 4, 5],
  },
  {
    id: '3',
    nombre: 'CASCO NOSS NS.801S SOLID ESPECIAL - ROSA ',
    precio: 1999.99,
    imagen: 'https://acdn-us.mitiendanube.com/stores/002/344/914/products/noss-rosa-1-9bbee804128b64a50317136537486193-640-0.png',
    reseñas: [5, 5, 5, 4],
  },
  {
    id: '4',
    nombre: 'Kit todo terreno completo',
    precio: 2149.49,
    imagen: 'https://i5.walmartimages.com/asr/88c502b9-d5a9-4945-b666-5abec21aa052.3be1e22cb24abd1fc887279f0f30775d.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
    reseñas: [4, 4, 3],
  },
    {
    id: '5',
    nombre: 'Chamarra de proteccion SULAITE',
    precio: 1099.99,
    imagen: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSDvbNxaPgsGCa_CtNPe88jv5jqmSSvTSN7h8g1NblbVLyckDEOBE7H-Eu3MkVuVV9moBj_m33FgISnA46jX7QVn7SgSU7jqJXiCiVVP3isRKZDPjBDh2nFL098V8riXswQhS0OhBU&usqp=CAc',
    reseñas: [5, 4, 4, 5],
  },
    {
    id: '6',
    nombre: 'Chamarra impermeable protecciones biker WKL 1985 Rojo',
    precio: 1499.99,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXkFL_7aK1M753c4mPjDd0gGV_s6C4u15t6A&s',
    reseñas: [5, 4, 4, 5],
  },
    {
    id: '7',
    nombre: 'Rodilleras sencillas',
    precio: 10.99,
    imagen: 'https://resources.claroshop.com/medios-plazavip/mkt/647784fd82b76_23jpg.jpg',
    reseñas: [5, 4, 4, 5],
  },
    {
    id: '8',
    nombre: 'Guantes de proteccion segura  ',
    precio: 399.99,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlOKsulul6VIsYXrb1380AcdM5xZT9Lh8zeQ&s',
    reseñas: [5, 4, 4, 5],
  },
    {
    id: '9',
    nombre: 'Juego De Cuatro Piezas De Rodilleras Y Coderas Para Moto.',
    precio: 599.99,
    imagen: 'https://resources.claroshop.com/medios-plazavip/mkt/63be939dcfc50_90jpg.jpg',
    reseñas: [5, 4, 4, 5],
  },
    {
    id: '10',
    nombre: 'Guantes de Piel con Pantalla táctil para Hombre',
    precio: 699.99,
    imagen: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSjhuoDoef02UFyfUDhjt9d07IptMb6SzFQ4hu50buIbNFHJkkeWB4zKL2OW1gyP_T2uxlasPO7HqcOWRtra6CExatEQCGzeS9WCDofI_0J7GMT7PiPvHjPdcJ5q_zpY1ZNoOpAJQ&usqp=CAc',
    reseñas: [5, 4, 4, 5],
  },
    {
    id: '11',
    nombre: 'KIMISS Soporte de teléfono para Motocicleta + Cargador USB',
    precio: 250.99,
    imagen: 'https://m.media-amazon.com/images/I/51+xuR8Au-L._AC_SX679_.jpg',
    reseñas: [5, 4, 4, 5],
  },
    {
    id: '12',
    nombre: 'Soporte impermeable',
    precio: 199.99,
    imagen: 'https://resources.claroshop.com/medios-plazavip/publicidad/634e01b1b46c4_sbi013_1jpg.jpg',
    reseñas: [5, 4, 4, 5],
  },
    {
    id: '13',
    nombre: 'Accesorio para pata lateral de moto',
    precio: 250.99,
    imagen: 'https://i.pinimg.com/236x/d3/0b/c9/d30bc915208bc25ced625224296111a6.jpg',
    reseñas: [5, 4, 4, 5],
  },
    {
    id: '14',
    nombre: 'Microfono para casco',
    precio: 399.99,
    imagen: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcToVJx--nUhUFgVVDc9E4-9DafHw75WFay5dMJfYce9uVhaRvag9bYfsW4GGv_hplLbd3ooevfiEl8ErFrn0-mmmfk5BSWK4IXGprAC4Yv0vU-2Qzn8xr_y-1qwH04EGageopnb7Bw&usqp=CAc',
    reseñas: [5, 4, 4, 5],
  },
    {
    id: '15',
    nombre: 'BeaoWink Cámara de Acción, 4K WiFi Cámara Deportiva Sumergible, 30M Ultra HD Cámara de Acción Impermeable, con Control Remoto',
    precio: 499.99,
    imagen: 'https://m.media-amazon.com/images/I/71hShfe2y+L._AC_SX522_.jpg',
    reseñas: [5, 4, 4, 5],
  },
    {
    id: '16',
    nombre: 'Caja porta equipaje para moto Kappa k39n 39l',
    precio: 599.99,
    imagen: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS38g9aSiF6IaGoME5W85BSLcOBqgk9wfy8Chmnr_6kPCWWgZeAW4eeTvY-bNrlGCOXB-ViHoSvch4w6uD6ssTfGqy4TBT77nbLeQbYHU7iwZdieT_WS_lU',
    reseñas: [5, 4, 4, 5],
  },
    
];

function HomeScreen({ navigation }) {
  const [carrito, setCarrito] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [menuAbierto, setMenuAbierto] = useState(false);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    Alert.alert('✅ Producto agregado', `${producto.nombre} ha sido agregado al carrito.`);
  };

  const productosFiltrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const promedioEstrellas = (reseñas) => {
    const total = reseñas.reduce((sum, r) => sum + r, 0);
    return Math.round(total / reseñas.length);
  };

  return (
    <View style={[styles.container, { backgroundColor: '#f9f9f9' }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setMenuAbierto(!menuAbierto)}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.titulo}>BIKERHOME</Text>
      </View>

      {/* Menú lateral */}
      {menuAbierto && (
        <View style={styles.menuLateral}>
          <View style={{ marginTop: 100 }}>
            <TouchableOpacity onPress={() => setMenuAbierto(false)}>
              <Text style={styles.menuItem}>Inicio</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              setMenuAbierto(false);
              navigation.navigate('Carrito', { carrito, setCarrito });
            }}>
              <Text style={styles.menuItem}>🛒 Ir al carrito</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setMenuAbierto(false)}>
              <Text style={styles.menuCerrar}>✖️ Cerrar menú</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <ScrollView style={{ marginBottom: 60 }}>
        {/* Buscador */}
        <TextInput
          style={styles.input}
          placeholder="🔍 Buscar productos..."
          value={busqueda}
          onChangeText={setBusqueda}
        />

        {/* Productos destacados */}
        <Text style={styles.subtitulo}>🔥 Productos destacados</Text>
        <FlatList
          data={productos}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Detalle', { producto: item, agregarAlCarrito })}
              style={styles.destacadoCard}
            >
              <Image source={{ uri: item.imagen }} style={styles.imagenDestacada} />
              <Text style={styles.nombre}>{item.nombre}</Text>
              <Text>💲 {item.precio.toFixed(2)}</Text>
              <View style={styles.estrellas}>
                {Array(promedioEstrellas(item.reseñas))
                  .fill()
                  .map((_, i) => (
                    <Text key={i}>⭐</Text>
                  ))}
              </View>
            </TouchableOpacity>
          )}
        />

        {/* Todos los productos */}
        <Text style={styles.subtitulo}>Todos los productos</Text>
        <FlatList
          data={productosFiltrados}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Detalle', { producto: item, agregarAlCarrito })}
              style={styles.card}
            >
              <Image source={{ uri: item.imagen }} style={styles.imagen} />
              <Text style={styles.nombre}>{item.nombre}</Text>
              <Text>💲 {item.precio.toFixed(2)}</Text>
              <View style={styles.estrellas}>
                {Array(promedioEstrellas(item.reseñas))
                  .fill()
                  .map((_, i) => (
                    <Text key={i}>⭐</Text>
                  ))}
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>

      {/* Botón flotante carrito */}
      <View style={styles.botonFijo}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Carrito', { carrito, setCarrito })}
          style={styles.botonIrCarrito}
        >
          <Text style={styles.textoBoton}>🛒 Ver carrito ({carrito.length})</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function CarritoScreen({ route, navigation }) {
  const { carrito, setCarrito } = route.params;

  const total = carrito.reduce((sum, item) => sum + item.precio, 0);

  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(index, 1);
    setCarrito(nuevoCarrito);
    Alert.alert('🗑️ Producto eliminado');
  };

  return (
    <View style={[styles.container, { backgroundColor: '#f9f9f9' }]}>
      <Text style={styles.subtitulo}>🛒 Carrito</Text>
      <ScrollView style={{ marginBottom: 60 }}>
        {carrito.length === 0 ? (
          <Text style={{ textAlign: 'center' }}>El carrito está vacío.</Text>
        ) : (
          carrito.map((item, index) => (
            <View key={index} style={styles.card}>
              <Image source={{ uri: item.imagen }} style={styles.imagen} />
              <Text style={styles.nombre}>{item.nombre}</Text>
              <Text>💲 {item.precio.toFixed(2)}</Text>
              <TouchableOpacity
                onPress={() => eliminarDelCarrito(index)}
                style={[styles.botonAgregar, { backgroundColor: '#2d5160' }]}
              >
                <Text style={{ color: '#fff' }}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          ))
        )}
        <View style={styles.carrito}>
          <Text>🧾 Artículos: {carrito.length}</Text>
          <Text>💰 Total: ${total.toFixed(2)}</Text>
        </View>
      </ScrollView>

      {/* Botón flotante Comprar */}
      <View style={styles.botonFijo}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Pago', { total })}
          style={[styles.botonIrCarrito, { backgroundColor: '#2d5160' }]}
        >
          <Text style={styles.textoBoton}>💳 Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


function PagoScreen({ route }) {
  const { total } = route.params;

  const confirmarPago = (metodo) => {
    Alert.alert('✅ Pago confirmado', `Has pagado $${total.toFixed(2)} con ${metodo}. ¡Gracias por tu compra!`);
    Alert.alert('✅ Producto agregado', `${producto.nombre} ha sido agregado al carrito.`)
  };
  

  return (
    <View style={[styles.container, { backgroundColor: '#c9e6f3' }]}>
      <Text style={styles.subtitulo}>💳 Opciones de pago</Text>
      <TouchableOpacity onPress={() => confirmarPago('Tarjeta de crédito')} style={styles.botonAgregar}>
        <Text style={{ color: '#fff' }}>Tarjeta de crédito</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => confirmarPago('PayPal')} style={styles.botonAgregar}>
        <Text style={{ color: '#fff' }}>PayPal</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => confirmarPago('Transferencia bancaria')} style={styles.botonAgregar}>
        <Text style={{ color: '#fff' }}>Transferencia bancaria</Text>
      </TouchableOpacity>
    </View>
  );
}

function DetalleProductoScreen({ route }) {
  const { producto, agregarAlCarrito } = route.params;

  const promedioEstrellas = (reseñas) => {
    const total = reseñas.reduce((sum, r) => sum + r, 0);
    return Math.round(total / reseñas.length);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: '#c9e6f3' }]}>
      <Text style={styles.subtitulo}>{producto.nombre}</Text>
      <Image source={{ uri: producto.imagen }} style={styles.imagen} />
      <Text style={{ fontSize: 18, marginBottom: 10 }}>💲 {producto.precio.toFixed(2)}</Text>
      <Text style={{ marginBottom: 10 }}>Descripción: llego a tiempo, igual a la imagen, de buena calidad super recomendado</Text>
      <Text style={styles.subtitulo}>⭐ Reseñas</Text>
      <View style={styles.estrellas}>
        {Array(promedioEstrellas(producto.reseñas))
          .fill()
          .map((_, i) => (
            <Text key={i}>⭐</Text>
          ))}
      </View>
      <View style={{ marginBottom: 20 }}>
        {producto.reseñas.map((r, index) => (
          <Text key={index}>⭐ {r} estrellas - ¡Muy buen producto!</Text>
        ))}
      </View>
      <TouchableOpacity
        onPress={() => agregarAlCarrito(producto)}
        style={[styles.botonAgregar, { backgroundColor: '#2d5160' }]}
      >
        <Text style={{ color: '#fff' }}>🛒 Agregar al carrito</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Carrito" component={CarritoScreen} />
        <Stack.Screen name="Pago" component={PagoScreen} />
        <Stack.Screen name="Detalle" component={DetalleProductoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
header: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  paddingTop: StatusBar.currentHeight || 40, 
  height: 60 + (StatusBar.currentHeight || 40),
  backgroundColor: '#c9e6f3',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 10,
  elevation: 5,
  zIndex: 1000,
},
menuIcon: {
  fontSize: 28,
  position: '',
  left: -100,
},
titulo: {
  fontSize: 24,
  fontWeight: 'bold',
},
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
  card: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#c9e6f3',
    borderRadius: 5,
    elevation: 2,
  },
  imagen: {
    width: 199,
    height: 150,
    marginBottom: 1,
    resizeMode: 'contain',  

  },
  imagenDestacada: {
    width: 120,
    height: 120,
    marginBottom: 5,
  },
  nombre: {
    fontWeight: 'bold',
  },
  botonAgregar: {
    backgroundColor: '#2d5160',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  carrito: {
    padding: 10,
    backgroundColor: '#c9e6f3',
    marginTop: 10,
  },
  botonFijo: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
  },
  botonIrCarrito: {
    backgroundColor: '#2d5160',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
  },
  destacadoCard: {
    padding: 6,
    marginRight: 8,
    backgroundColor: '#658e98',
    borderRadius: 8,
    elevation: 2,
    width: 140,
  },
  menuLateral: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 200,
    height: '100%',
    backgroundColor: '#fff',
    padding: 10,
    zIndex: 999,
    elevation: 5,
  },
  menuItem: {
    fontSize: 18,
    marginBottom: 10,
  },
  menuCerrar: {
    fontSize: 16,
    color: 'red',
  },
  estrellas: {
    flexDirection: 'row',
    marginVertical: 5,
  },
});
