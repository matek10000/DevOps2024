# Obraz bazowy
FROM node:16

# Ustawienie katalogu roboczego
WORKDIR /app

# Kopiowanie plików aplikacji
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# Otwarcie portu
EXPOSE 3000

# Uruchomienie serwera
CMD ["node", "server.js"]
