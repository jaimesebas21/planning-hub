# Utiliza una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de package.json y package-lock.json a /app
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto de los archivos de la aplicación a /app
COPY . .

# Construye la aplicación de React.js para producción
RUN npm run build

# Expone el puerto 3000 (el puerto por defecto de React.js)
EXPOSE 3000

# Comando para ejecutar la aplicación cuando el contenedor se inicie
CMD ["npm", "start"]