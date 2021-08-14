# Gatsby PWA ESFMX

[Live server - probar la aplicacion](https://dreamy-lovelace-0a4136.netlify.app/)

## Instalacion

Instalar [node.js](https://nodejs.org/es/) en su computadora

Recomiendo usar [Visual Studio Code](https://code.visualstudio.com/)


Despues Instalar las dependencias del proyecto entrar ala carpeta raiz del proyecto y correr el siguiente comando

(Es en donde se encuentra el archivo package.json)
```bash
npm i 
```
No olviden generar su key y copiarla
```bash
npx web-push generate-vapid-keys
```


## Uso

```javascript
//correr en desarrrollo
gatsby develop

//borrar archivos estaticos
gatsby clean

//crear build
gatsby build

//montar el sistema (para probar la pwa)
gatsby serve
```

## Contribucion
Pull request son bienvenidas

Michael Adolfo Huerta Ramirez - [Club Desarrollo Web](https://www.facebook.com/DWESCOM)


## License
[MIT](https://choosealicense.com/licenses/mit/)