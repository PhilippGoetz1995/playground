# Use an official Node.js image to build the React app
FROM node:14 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY ./frontend/package.json ./
RUN npm install

# Copy the rest of the application code
COPY ./frontend ./

# Expose port 3000 => Default port for React Frontend application
EXPOSE 3000

# Run for now the development server
CMD ["npm", "start"]