# PokeApp 

![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=for-the-badge&logo=vite)
![TanStack Query](https://img.shields.io/badge/React_Query-5.9-FF4154?style=for-the-badge&logo=react-query)

Sistema de gestión integral de entrenadores y catálogo de Pokémon, desarrollado con un enfoque en rendimiento, escalabilidad y una experiencia de usuario (UX) fluida. La aplicación conecta datos dinámicos de la **PokeAPI** y simulaciones de persistencia con **JSONPlaceholder**.

---

## Capturas de Pantalla


### 🔴 Vista de Catálogo (Pokedex)
 ![Vista Pokedex](./prueba/assets/pokedex.png) 
> *Exploración de especies con scroll infinito y renderizado optimizado.*


### 🟡 Gestión de Staff (Entrenadores)
 ![Vista Entrenadores](./prueba/assets/entrenadores.png) 
> *CRUD completo con animaciones y vinculación de Pokémon.*


### 🔵 Feedback (Opiniones)
 ![Vista Opiniones](./prueba/assets/opiniones.png) 
> *Módulo de interacción para recolección de feedback de la comunidad de entrenadores.*

---

## Funcionalidades Principales

> [!IMPORTANT]
> **Arquitectura de Gestión Asíncrona**
> Se utiliza **TanStack Query (React Query)** para manejar la sincronización de datos, caché y estados de carga, asegurando que la UI nunca se bloquee.

* **Pokedex Dinámica:** Catálogo de Pokémon con consumo directo de la PokéAPI.
* **Gestión de Staff (CRUD):** Módulo completo para crear, editar y eliminar entrenadores con persistencia en `localStorage`.
* **Sistema de Opiniones:** Espacio interactivo para gestionar feedback y comentarios.
* **Validación Robusta:** Formularios protegidos con **Zod** y **React Hook Form** para prevenir datos corruptos.
* **Animaciones de Interfaz:** Transiciones suaves de entrada y salida de elementos con **Framer Motion**.
* **Notificaciones de Feedback:** Alertas visuales inmediatas para cada acción mediante **React Hot Toast**.

---

## Stack Tecnológico

> [!NOTE]
> - **Frontend:** React 19 (última versión estable).
> - **Estilos:** Tailwind CSS con arquitectura de diseño moderno.
> - **Consumo API:** Axios con instancias modulares.
> - **Validación:** Zod + Hook Form Resolvers.
> - **Animaciones:** Framer Motion (Layout animations).
> - **Routing:** React Router DOM v7.

---

## Organización del Proyecto

La aplicación utiliza una estructura **Feature-First**, facilitando el mantenimiento y la lectura de módulos aislados:

```bash
src/
├── app/             # Configuración de queryClient
├── assets/          # Recursos estáticos 
├── components/      # Componentes UI reutilizables globales (Navbar, Modal, etc.)
├── constants/       # Constantes globales (traducción de pokemones)
├── features/        # Módulos principales
│   ├── pokedex/     # Lógica y vistas de Pokedex
│   ├── opinion/     # Lógica y vistas de Comentarios
│   └── trainers/    # CRUD completo de Entrenadores
├── lib/             # Configuración e instancias de librerías externas (axios)
├── services/        # Lógica de comunicación con APIs y servicios externos
├── App.jsx          # Componente raíz que renderiza la aplicación (Rutas)
├── index.css        # Estilos globales (Tailwind o CSS base)
└── main.jsx         # Punto de entrada 
```

## Instalación y Ejecución

> [!CAUTION]
> Asegúrate de tener instalado:
> - Node.js (versión LTS recomendada)
> - npm o yarn

---

### 1. Clonar el repositorio

```bash
git clone https://github.com/7Kitsu7/PruebaTecnicaReact.git
cd PruebaTecnicaReact/prueba
```
### 2. Instalar dependencias
```bash
npm install
```
### 3. Configurar variables de entorno
> [!IMPORTANT]
> Crear un archivo llamado .env.local en la raíz del proyecto y añadir lo siguiente:
```bash
VITE_POKEAPI_URL=https://pokeapi.co/api/v2
VITE_JSONPLACEHOLDER_URL=https://jsonplaceholder.typicode.com
```
> [!NOTE]
> Estas variables permiten configurar dinámicamente las URLs base de las APIs utilizadas en el proyecto.
### 4. Ejecutar en entorno local
```bash
npm run dev
```
Una vez iniciado, abre tu navegador en:
```bash
http://localhost:5173
```
> [!TIP]
> Puedes probar la PokeApp desde https://pokeapp-cyan.vercel.app/
