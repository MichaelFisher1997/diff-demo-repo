# Minimal Astro Site

A clean, fast website built with Astro and Tailwind CSS featuring three pages and automated screenshot testing.

## Features

- **Home Page**: Hero section with features grid
- **Pricing Page**: 3-tier pricing cards with comparison table
- **Playground Page**: Interactive controls to tweak CSS properties in real-time
- **Automated Testing**: Nightwatch with Chromedriver for screenshot testing
- **GitHub Actions**: CI/CD pipeline that builds, tests, and uploads screenshots

## Development

### Prerequisites
- [Bun](https://bun.sh/) JavaScript runtime

### Setup
1. Install dependencies:
   ```bash
   bun install
   ```

2. Start development server:
   ```bash
   bun run dev
   ```

3. Open http://localhost:4321 in your browser

### Building
```bash
bun run build
```

### Preview
```bash
bun run preview
```

## Testing

### End-to-End Testing
1. Build the site:
   ```bash
   bun run build
   ```

2. Start static server:
   ```bash
   bunx http-server dist -p 4321
   ```

3. Run Nightwatch tests:
   ```bash
   bun run test:e2e:ci
   ```

Screenshots will be saved to the `screenshots/` directory.

### Local Development Testing
For local testing with visible browser:
```bash
bun run test:e2e
```

## Project Structure

```
├── src/
│   ├── layouts/
│   │   └── Layout.astro         # Base layout with header/footer
│   ├── pages/
│   │   ├── index.astro          # Home page
│   │   ├── pricing.astro        # Pricing page
│   │   └── playground.astro     # Interactive playground
│   └── styles/
│       └── global.css           # Tailwind CSS imports
├── public/
│   └── favicon.svg              # Site favicon
├── tests/
│   └── screenshots.js           # Nightwatch screenshot tests
├── .github/workflows/
│   └── build-test.yml           # GitHub Actions workflow
├── astro.config.mjs             # Astro configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── nightwatch.conf.js           # Nightwatch configuration
└── package.json                # Dependencies and scripts
```

## Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run test:e2e` - Run Nightwatch tests (visible browser)
- `bun run test:e2e:ci` - Run Nightwatch tests (headless)

## Tech Stack

- [Bun](https://bun.sh/) - JavaScript runtime and package manager
- [Astro](https://astro.build/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Nightwatch](https://nightwatchjs.org/) - End-to-end testing framework
- [Chromedriver](https://chromedriver.chromium.org/) - Chrome WebDriver
- [http-server](https://www.npmjs.com/package/http-server) - Static file server

## GitHub Actions

The GitHub Actions workflow automatically:
1. Installs dependencies
2. Builds the Astro site
3. Starts a static server on port 4321
4. Installs Chrome and Chromedriver
5. Runs Nightwatch screenshot tests
6. Uploads screenshots as artifacts

## License

MIT