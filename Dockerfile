# Dockerfile
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire project
COPY . .

# Build the project
RUN npm run build

# Expose port if needed (e.g., 5173 for Vite)
EXPOSE 5173

# Run the app
CMD ["npm", "run", "preview"]
