FROM oven/bun:latest

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN bun install

# Copy source code
COPY . .

# Build the application
RUN bun run build

# Create screenshots directory
RUN mkdir -p screenshots

# Expose port
EXPOSE 4321

# Default command - serve the built application
CMD ["bunx", "http-server", "dist", "-p", "4321"]