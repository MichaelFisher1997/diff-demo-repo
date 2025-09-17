# 🚀 Astro Screenshot Testing Demo

A modern, production-ready Astro site demonstrating automated screenshot testing with Docker Chrome containers and GitHub Actions CI/CD.

![CI/CD](https://github.com/MichaelFisher1997/diff-demo-repo/workflows/%F0%9F%9A%80%20Screenshot%20Testing%20CI%2FCD/badge.svg) ![Screenshot Testing](https://img.shields.io/badge/Screenshot%20Testing-Automated-brightgreen) ![Astro](https://img.shields.io/badge/Astro-v4.0+-FF4F5B) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v3.3+-06B6D4) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow)

## ✨ Features

### 🎨 **Modern Web Application**
- **Home Page**: Professional hero section with features grid and call-to-action
- **Pricing Page**: 3-tier pricing cards with feature comparison table
- **Playground Page**: Interactive CSS property playground with real-time updates
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### 🧪 **Advanced Testing Infrastructure**
- **Docker Chrome**: Headless Chrome in Docker containers for consistent testing
- **Selenium WebDriver**: Automated browser control and screenshot capture
- **GitHub Actions**: Automated CI/CD pipeline with artifact uploads
- **Environment Agnostic**: Works seamlessly in local development and CI

### 🔧 **Developer Experience**
- **Bun Runtime**: Ultra-fast JavaScript runtime and package manager
- **Astro Islands**: Opt-in hydration for maximum performance
- **Hot Reload**: Instant development feedback
- **Zero Configuration**: Out-of-the-box development setup

## 🚀 Quick Start

### Prerequisites
- [Bun](https://bun.sh/) JavaScript runtime
- [Docker](https://www.docker.com/) for containerized testing
- [Git](https://git-scm.com/) for version control

### 1. Clone and Setup
```bash
git clone https://github.com/MichaelFisher1997/diff-demo-repo.git
cd diff-demo-repo
bun install
```

### 2. Start Development Server
```bash
bun run dev
```
🎉 Open http://localhost:4324 in your browser

### 3. Run Screenshot Tests
```bash
# Start Docker Chrome container
docker compose up -d

# Run automated screenshot tests
bun run test:selenium
```

## 🧪 Testing & Automation

### Automated Screenshot Testing

The project uses a sophisticated testing setup with Docker containers:

```bash
# Start the testing infrastructure
docker compose up -d

# Take screenshots of all pages
bun run test:selenium

# Check the results
ls screenshots/
# ├── home.png
# ├── pricing.png
# └── playground.png
```

### Local Development Commands

```bash
# Development
bun run dev          # Start development server
bun run build        # Build for production
bun run preview      # Preview production build

# Testing
bun run test:selenium        # Run selenium screenshot tests
bun run test:selenium:ci     # CI mode with explicit config

# Docker
docker compose up -d         # Start Chrome container
docker compose down           # Stop Chrome container
docker compose logs chrome    # View container logs
```

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   └── Layout.jsx              # Shared React components
│   ├── layouts/
│   │   └── Layout.astro           # Base layout with navigation
│   ├── pages/
│   │   ├── index.astro            # Landing page
│   │   ├── pricing.astro          # Pricing page
│   │   └── playground.astro       # Interactive playground
│   └── styles/
│       └── global.css            # Global styles and Tailwind
├── tests/
│   └── screenshots.js             # Nightwatch test definitions
├── .github/workflows/
│   └── build-test.yml             # GitHub Actions CI/CD pipeline
├── docker-compose.yml             # Docker Chrome container setup
├── selenium-screenshots.js        # Selenium WebDriver automation
├── astro.config.mjs               # Astro configuration
├── tailwind.config.js             # Tailwind CSS configuration
└── package.json                   # Project dependencies and scripts
```

## 🏗️ Architecture Overview

### Frontend Stack
- **Astro 4.x**: Static site generator with partial hydration
- **React 18**: For interactive components
- **Tailwind CSS 3.x**: Utility-first CSS framework
- **Bun**: JavaScript runtime and package manager

### Testing Infrastructure
- **Selenium WebDriver**: Browser automation
- **Docker Chrome**: Headless Chrome container
- **GitHub Actions**: CI/CD automation
- **Artifact Upload**: Screenshot storage and access

### CI/CD Pipeline
1. **Code Push** → Triggers GitHub Actions
2. **Build** → Creates production Astro build
3. **Test Setup** → Starts Docker Chrome container
4. **Screenshot Capture** → Automated page screenshots
5. **Artifact Upload** → Stores screenshots for 7 days
6. **Reporting** → Logs and test results available

## 🎯 Use Cases

### Visual Regression Testing
```bash
# Perfect for catching visual changes between deployments
bun run test:selenium
```

### Cross-Environment Testing
```bash
# Same tests work locally and in CI
SELENIUM_HOST=localhost BASE_URL=http://localhost:4324 bun run test:selenium
```

### Documentation Screenshots
```bash
# Generate screenshots for documentation
bun run test:selenium
# Screenshots available in artifacts/
```

## 🌐 GitHub Actions Features

The automated workflow includes:

### ✅ **Automated Testing**
- **Docker Setup**: Automatic Chrome container provisioning
- **Health Checks**: Service readiness verification
- **Parallel Execution**: Efficient test runs
- **Error Handling**: Comprehensive error recovery

### 📦 **Artifact Management**
- **Screenshots**: High-quality page screenshots
- **Test Results**: Detailed execution logs
- **Container Logs**: Debug information
- **7-Day Retention**: Temporary artifact storage

### 🔍 **Debugging Features**
- **Verbose Logging**: Detailed execution traces
- **Container Insights**: Docker container logs
- **Environment Variables**: Flexible configuration
- **Continue-on-Error**: Maximum test coverage

## 🔧 Configuration

### Environment Variables
```bash
# Selenium Configuration
SELENIUM_HOST=localhost      # Selenium server host
SELENIUM_PORT=4444           # Selenium server port
BASE_URL=http://localhost:4324  # Target application URL

# Development
NODE_ENV=development         # Application environment
PORT=4324                    # Development server port
```

### Docker Configuration
```yaml
# docker-compose.yml
services:
  chrome:
    image: selenium/standalone-chrome:latest
    network_mode: host
    environment:
      - SE_NODE_SESSION_TIMEOUT=120
      - SE_NODE_MAX_SESSIONS=5
```

## 🛠️ Customization

### Adding New Pages
1. Create page in `src/pages/`
2. Add to `selenium-screenshots.js`
3. Update navigation in `src/components/Layout.jsx`

### Modifying Tests
- Edit `selenium-screenshots.js` for Selenium tests
- Modify `tests/screenshots.js` for Nightwatch tests
- Update `.github/workflows/build-test.yml` for CI changes

### Styling Changes
- Edit `src/styles/global.css` for global styles
- Use Tailwind classes directly in components
- Customize `tailwind.config.js` for theme changes

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Test locally before submitting

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Astro](https://astro.build/) - The amazing static site generator
- [Selenium](https://www.selenium.dev/) - Browser automation framework
- [Docker](https://www.docker.com/) - Container platform
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

---

**⭐ If this project helps you, please consider giving it a star!**