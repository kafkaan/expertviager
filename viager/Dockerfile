# Étape de construction : Utilisation de l'image Node.js 20 comme base pour construire l'application
FROM node:20 as build-stage

# Déclaration d'une variable d'argument pour le port (elle peut être utilisée à l'exécution)
ARG PORT

# Définit le répertoire de travail à l'intérieur du conteneur
WORKDIR /usr/src/app

# Copie les fichiers package.json et package-lock.json pour installer les dépendances avec npm
COPY package*.json ./

# Copie le fichier de configuration de Sass s'il est nécessaire (optionnel)
COPY src/sass ./src/sass

# Copie le reste des fichiers nécessaires pour la construction
COPY public ./public/
COPY index.html ./
COPY src ./src/
COPY *.mjs ./
COPY *.ts ./
COPY tsconfig.json ./
COPY tsconfig.app.json ./
COPY tsconfig.node.json ./

# Installe les dépendances en utilisant npm
RUN npm install

# Lance la construction de l'application avec npm
RUN npm run build

# Étape finale : Utilisation de l'image Nginx comme base pour servir l'application
FROM nginx:1.25.2-alpine

# Copie le contenu du dossier dist (build) depuis l'étape précédente dans le dossier de service de Nginx
COPY --from=build-stage /usr/src/app/dist/ /var/www/html/

# Copie le fichier de configuration personnalisé de Nginx
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Remplace la variable $PORT dans la configuration Nginx par la valeur passée en argument
# et démarre Nginx sans le mettre en arrière-plan (mode foreground)
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
