# Użyj obrazu Nginx jako bazowego
FROM nginx:alpine

# Skopiuj pliki projektu do katalogu, w którym Nginx szuka plików statycznych
COPY ./ /usr/share/nginx/html

# Otwórz port 80
EXPOSE 80

# Uruchom Nginx
CMD ["nginx", "-g", "daemon off;"]
