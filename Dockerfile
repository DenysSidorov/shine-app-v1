# Этап сборки (build stage)
FROM node:20-alpine AS builder
WORKDIR /app

# Скопируем package.json и установим зависимости
COPY package.json package-lock.json ./
RUN npm i

# Скопируем исходники и соберём продакшн-бандл
COPY . .

# Pass environment variable to the build process
ARG SERVER_DOMAIN
ENV SERVER_DOMAIN=$SERVER_DOMAIN
RUN npm run build

# Этап продакшн-образа с Nginx
FROM nginx:1.27-alpine

# Копируем сборку React в папку Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Копируем кастомный конфиг Nginx (если нужен SPA fallback)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Install envsubst
RUN apk add --no-cache gettext

# Render задаст PORT, но Nginx по умолчанию слушает 80
# Поэтому игнорируем PORT, Render сам проксирует 443 → 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]