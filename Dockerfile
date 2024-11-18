# Stage 1: Build Angular 18 App
FROM node:21-alpine AS builder

# Install Angular CLI globally
RUN npm install -g @angular/cli

WORKDIR /app

# Copy package files to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Angular app for production
RUN ng build --configuration=production

# Stage 3: Combine Angular and Node.js with NGINX
FROM nginx:alpine

# Copy the Angular build from the builder stage to NGINX
COPY --from=builder /app/dist/sorodriguezz/browser /usr/share/nginx/html


# Install Node.js in the final stage to support backend operations
RUN apk add --no-cache nodejs npm

# Expose the necessary ports
EXPOSE 80