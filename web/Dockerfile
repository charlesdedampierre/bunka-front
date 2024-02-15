# Use an official Node.js runtime as a parent image
FROM node:20 AS build

# Set the working directory in the container
WORKDIR /app

RUN chown node:node /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

USER node
COPY --chown=node:node package.json package-lock.json* ./
# Install project dependencies
RUN npm install

#RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose the application port (optional, adjust as needed)
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]