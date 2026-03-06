# Use official Node.js base image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source code
COPY . .

# Expose application port
EXPOSE 3000

# Run the application
CMD ["node", "app.js"]
