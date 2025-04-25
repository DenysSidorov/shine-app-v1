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

# Stage 2: Production
FROM node:22.14.0-alpine

# Set the working directory
WORKDIR /output

# Copy build output from the builder stage
COPY --from=builder /app/dist ./

# Expose port 80
#EXPOSE 80

# Start Nginx server
#CMD ["nginx", "-g", "daemon off;"]

# Default command to indicate build completion
CMD ["echo", "Build complete. Copy files from /output."]