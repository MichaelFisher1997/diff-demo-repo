FROM oven/bun:latest

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN bun install

# Copy source code
COPY . .

# Create screenshots directory
RUN mkdir -p screenshots

# Expose port (if needed)
EXPOSE 3000

# Default command
CMD ["bun", "run", "test:e2e"]