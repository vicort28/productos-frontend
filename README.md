# CRUD de productos

## Descripción

Esta es una aplicación frontend creada con Angular (versión 16 ) que permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) para gestionar productos. Permitiendo a los usuarios interactuar con las siguientes funcionalidades:

- **Formulario para crear/editar productos**: Permite a los usuarios agregar nuevos productos o modificar los existentes.
- **Listado de productos**: Muestra una tabla con las opciones para editar o eliminar productos.
- **Detalle de un producto**: Permite visualizar la información detallada de un producto seleccionado.
- **Validación de formularios**: Los datos se validan antes de enviarlos al backend para garantizar su integridad.

---

## Requisitos del Sistema

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- **Node.js**: Versión 14 o superior [Descargar Node.js](https://nodejs.org/)
- **Angular CLI**: Versión 14 o superior [Documentación Angular CLI](https://angular.io/cli)
- **Navegador Web**: Cualquier navegador moderno (Chrome, Firefox, Edge, etc.)

---

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto localmente:

### 1. Clonar el Repositorio
Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/vicort28/productos-frontend.git
cd productos-frontend
```

### 2. Instalar Dependencias
Instala todas las dependencias del proyecto ejecutando el siguiente comando:

```bash
npm install
```

### 3. Configurar el Entorno
Si es necesario, crea un archivo `.env` para las configuraciones locales del entorno. Por ejemplo, la URL de la API backend.

### 4. Ejecutar el Proyecto
Inicia el servidor de desarrollo:

```bash
ng serve
```

Abre tu navegador y navega a `http://localhost:4200` para ver la aplicación en ejecución.

---

## Uso del Proyecto

### Funcionalidades Principales

1. **Crear un Producto**:
   - Ve a la página "Agregar Producto".
   - Completa el formulario y haz clic en "Guardar".

2. **Editar un Producto**:
   - En el listado de productos, haz clic en el botón "Editar" junto al producto deseado.
   - Modifica los campos necesarios y guarda los cambios.

3. **Eliminar un Producto**:
   - En el listado de productos, haz clic en el botón "Eliminar" junto al producto deseado.
   - Confirma la eliminación en el modal de confirmación.

4. **Ver Detalle de un Producto**:
   - Haz clic en el nombre de un producto en el listado para ver más detalles.

---

## Tecnologías Utilizadas

- **Framework**: Angular 14+
- **Estilos**: PrimeNG y SCSS
- **Validaciones**: Formularios Reactivos en Angular
- **Componentes UI**: PrimeNG para botones, tablas, modales y notificaciones
- **Comunicación con Backend**: Servicios HTTP en Angular


