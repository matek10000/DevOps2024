# Projekt DevOps 2024

## Opis projektu

Projekt został stworzony w celu zapoznania się z zasadami pracy w podejściu DevOps. Aplikacja składa się z frontendu w HTML/CSS/JS, backendu w Node.js oraz bazy danych MySQL. Wszystkie elementy zostały uruchomione w kontenerach Docker i zarządzane za pomocą Kubernetes oraz Docker Compose.

## Technologie użyte w projekcie

- **Docker**: Konteneryzacja aplikacji frontendowej, backendowej i bazy danych.
- **Docker Compose**: Zarządzanie wielokontenerową aplikacją.
- **Kubernetes**: Automatyzacja wdrażania, skalowania i zarządzania kontenerami.
- **GitHub Actions**: Realizacja CI/CD, automatyczne budowanie i wdrażanie aplikacji na GitHub Pages.
- **Git**: Kontrola wersji kodu.

## Pliki konfiguracyjne

### Docker
- `Dockerfile` (Frontend): Definiuje obraz Nginx do serwowania aplikacji.
- `Dockerfile` (Backend): Konfiguracja środowiska Node.js do uruchomienia backendu aplikacji.

### Docker Compose
- `docker-compose.yml`: Konfiguracja kontenerów frontendowych, backendowych i bazy danych.

### Kubernetes
- `deployment-frontend.yml`: Wdrożenie frontendu z serwerem Nginx.
- `deployment-backend.yml`: Wdrożenie backendu aplikacji Node.js.
- `deployment-mysql.yml`: Wdrożenie bazy danych MySQL.

### GitHub Actions
- `jekyll-gh-pages.yml`: Workflow do budowania i wdrażania aplikacji na GitHub Pages.

## Funkcjonalności

- Obsługa strony frontendowej serwowanej przez Nginx.
- Backend aplikacji z dostępem do bazy danych MySQL.
- Zautomatyzowany proces wdrażania na GitHub Pages dzięki CI/CD.
- Skalowalność i niezawodność zapewniona przez Kubernetes.

## Wnioski

Podejście DevOps znacząco ułatwia zarządzanie cyklem życia aplikacji, automatyzację procesów oraz skalowalność. W projekcie nauczyłem się podstawowych zasad pracy z kontenerami Docker, orkiestracją Kubernetes oraz automatyzacją wdrożeń za pomocą GitHub Actions.

## Jak uruchomić projekt

1. Sklonuj repozytorium:
   ```bash
   git clone https://github.com/matek10000/DevOps2024.git
   ```
2. Uruchom Docker Compose:
   ```bash
   docker-compose up --build
   ```
3. Wdrożenie w Kubernetes:
   ```bash
   kubectl apply -f deployment-frontend.yml
   kubectl apply -f deployment-backend.yml
   kubectl apply -f deployment-mysql.yml
   ```
4. Strona frontendowa będzie dostępna na porcie 80.

## Autor

Mateusz Dybaś
