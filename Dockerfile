ARG NODE_VERSION=21-alpine3.18

# Use the official Node.js image as the base image
FROM node:${NODE_VERSION}

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the TypeScript code
RUN npm run build

# Copy the seed script into the container
COPY seed-script.js ./

# Run the seed script to populate the database
RUN node seed-script.js


ENV PORT=3000

# Expose the port your app runs on
EXPOSE 3000

# Specify the command to run on container start
CMD ["npm", "run", "start:prod"]