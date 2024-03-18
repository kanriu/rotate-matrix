# Rotar una matriz - Prueba Técnica

## Enlace del proyecto desplegado

Este es el enlace desplegado en vercel: [https://rotate-matrix.vercel.app](https://rotate-matrix.vercel.app)

## Ejecutar el proyecto en local

Luego de clonar el repositorio, primeramente se tiene que instalar las dependencias, se debe ejecutar este comando.

```bash
npm install
# or
yarn install
```

Ahora para ejecutar el proyecto que por defecto se abre en [http://localhost:3000](http://localhost:3000), se debe ejecutar este comando.

```bash
npm run dev
# or
yarn dev
```

Para generar la build, se debe ejecutar este comando.

```bash
npm run build
# or
yarn build
```

---

## Librerías

- TypeScript
- Formik
- Yup

---

## Inconvenientes

Al tratar de hacer la configuración de los test unitarios, no se logro ya que se trato de usar Jest con React-Testing-Library, al parecer la forma de trabajo con Pages-Router(la forma antigua de Next.js), no acepta esta configuración ya que el error viene de "node_modules".
