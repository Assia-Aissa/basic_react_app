# Étape de construction
FROM node:18 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# Définir NODE_OPTIONS pour utiliser l'ancien fournisseur OpenSSL
ENV NODE_OPTIONS="--openssl-legacy-provider"
RUN npm run build

# Étape de déploiement
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]