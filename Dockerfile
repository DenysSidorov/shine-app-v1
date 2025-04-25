# Stage 1: Build
FROM node:22.14.0-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve with "serve"
FROM node:22.14.0-alpine

# Install "serve" globally
RUN npm install -g serve

# Set the working directory
WORKDIR /app

# Copy build output
COPY --from=builder /app/dist ./dist

# Expose port 80
EXPOSE 80

# Start the server
CMD ["serve", "-s", "dist", "-l", "80"]