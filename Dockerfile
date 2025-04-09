# Use official Node.js image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy app files
COPY . .

# Expose the app port
EXPOSE 3000

# Command to run the app
CMD ["node", "index.js"]
