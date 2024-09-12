# Use the official Node.js image as a base image
FROM node:20-bookworm

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port 3000 to allow access to the app
EXPOSE 3000

# Command to run the Next.js app
CMD ["npm", "run", "start"]
