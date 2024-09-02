# Negocio Next.js

## Descripción

Negocio Next.js es una aplicación web construida utilizando [Next.js](https://nextjs.org/), un framework de React para aplicaciones web. Este proyecto incluye características como gestión de estado con `zustand`, validaciones con `zod`, integración con `Prisma` para la gestión de la base de datos y más.

## Tecnologías Utilizadas

- **Next.js**: Framework para construir aplicaciones web de React con soporte para renderizado del lado del servidor (SSR).
- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Zustand**: Pequeña biblioteca para la gestión de estado en React.
- **Zod**: Herramienta de validación de datos.
- **Prisma**: ORM para trabajar con bases de datos de manera eficiente.
- **Tailwind CSS**: Framework de utilidades CSS para un diseño rápido y responsivo.
- **TypeScript**: Superset de JavaScript que añade tipos estáticos al lenguaje.

## Requisitos Previos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior) o yarn

## Instalación

1. Clona el repositorio:

2. cd negocio-next
3. Instala las dependencias:
npm install o yarn install

4. Configura la base de datos con Prisma:

npx prisma migrate dev --name init
(Opcional) Ejecuta el script de seed para poblar la base de datos con datos:

npm run prisma:seed

5. Para iniciar prisma: 
npx prisma studio

6. Para iniciar el servidor de desarrollo, usa el siguiente comando:

npm run dev o yarn dev
Esto abrirá el servidor en http://localhost:3000.

7. Construcción y Despliegue
npm run build o yarn build

## Linting
Este proyecto utiliza ESLint para mantener la calidad del código. Puedes correr el linter con:

npm run lint o yarn lint

## Estructura del Proyecto

**actions/:** 
Contiene las acciones específicas del proyecto, como funciones que ejecutan lógica específica relacionada con la aplicación.

**app/:** 
Directorio raíz para las páginas y rutas de la aplicación. Este directorio utiliza el sistema de enrutamiento de Next.js.

**components/:** 
Componentes reutilizables de la UI. Está subdividido en:

**admin/:**
 Componentes específicos para la interfaz de administración.

**order/:** 
Componentes relacionados con la gestión de órdenes.

**products/:** 
Componentes relacionados con la gestión y visualización de productos.

**ui/:** 
Componentes generales de la interfaz de usuario (botones, formularios, etc.).

**lib/:** 
Contiene módulos o utilidades comunes que no están directamente relacionadas con la UI, como funciones helper o configuraciones.

**prisma/:** 
Archivos relacionados con la configuración de la base de datos, incluyendo esquemas y seeds.

**public/:** 
Archivos estáticos como imágenes, íconos, fuentes, etc.

**schema/:** 
Define los esquemas de validación y tipos utilizando zod u otras herramientas de validación.

**src/:** 
Contiene la lógica principal del proyecto, incluyendo el código fuente no directamente relacionado con la UI.

**store/:** 
Contiene el estado global de la aplicación utilizando zustand.

**types/:** 
Definiciones de tipos TypeScript para mejorar la consistencia y evitar errores.

**utils/:** 
Utilidades y funciones comunes que se pueden reutilizar en diferentes partes del proyecto.


## Prisma y Base de Datos
Este proyecto usa Prisma como ORM. Asegúrate de configurar correctamente la base de datos en tu archivo .env:

**Migraciones**
Para aplicar las migraciones de base de datos, utiliza:
npx prisma migrate dev

**Seed de Datos**
Puedes poblar la base de datos con datos iniciales usando:
npm run prisma:seed

**Despliegue**
El proyecto puede ser desplegado fácilmente utilizando Vercel, la plataforma de hosting para Next.js. Sigue los pasos de la documentación oficial de Next.js para desplegar tu aplicación.

## Contribuciones
Las contribuciones son bienvenidas. Por favor, sigue los pasos descritos a continuación para contribuir:

**Haz un fork del proyecto.**
**Crea una nueva rama** 
(git checkout -b feature/nueva-caracteristica).
**Realiza tus cambios y haz un commit** 
(git commit -m 'Añadir nueva característica').
**Sube tu rama** 
(git push origin feature/nueva-caracteristica).
**Abre un Pull Request.**
**Licencia**
Este proyecto está bajo la licencia MIT.