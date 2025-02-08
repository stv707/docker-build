# Use Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy application files (Ensure `public` is included)
COPY . .

# Expose the port React runs on
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]

