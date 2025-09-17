# Running Nightwatch Tests with Docker

To run the Nightwatch screenshot tests using Docker (which includes Chrome and ChromeDriver):

## Prerequisites
- Docker and Docker Compose installed
- Your static site running on port 4321

## Steps

1. Build and start the site:
```bash
bun run build
npx http-server dist -p 4321
```

2. Start the Docker containers:
```bash
docker-compose up -d
```

3. Run the tests:
```bash
bun run test:docker
```

4. View the screenshots:
```bash
ls screenshots/
```

5. Stop the containers:
```bash
docker-compose down
```

## Alternative: One-liner
You can also run everything in one command:

```bash
# Build the site
bun run build

# Start server and run tests
npx http-server dist -p 4321 &
sleep 2
docker-compose up --abort-on-container-exit

# View screenshots
ls screenshots/
```

## Debugging
- To view Chrome in action, visit: http://localhost:7900 (password: secret)
- Check container logs: `docker-compose logs nightwatch`
- The screenshots will be saved to the local `screenshots/` directory