# Use official Node LTS image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first to leverage cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy entire project
COPY . .

# Build React frontend if you have it under /frontend or adjust accordingly
# Assuming frontend build command is in package.json scripts as 'build'
RUN npm run build

# Expose port your app uses (adjust if different)
EXPOSE 3000

# Start your app (adjust if you use pm2 or node server.js etc)
CMD ["npm", "start"]
