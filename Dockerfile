# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR .

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Expose the port on which your application listens (assumed to be 3000)
EXPOSE 3001

# Start the Node.js application
CMD ["node", "server.js", "3001"]
