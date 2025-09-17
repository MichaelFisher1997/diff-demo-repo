# Contributing to Astro Screenshot Testing Demo

Thank you for your interest in contributing to this project! This document provides guidelines and instructions for contributing.

## 🤝 How to Contribute

### Reporting Bugs

1. **Use the GitHub Issues** page to report bugs
2. **Provide detailed information**:
   - Steps to reproduce the issue
   - Expected behavior vs. actual behavior
   - Screenshots if applicable
   - Your environment (OS, Bun version, Docker version)

### Suggesting Features

1. **Check existing issues** first to avoid duplicates
2. **Create a new issue** with:
   - Clear description of the feature
   - Use case scenarios
   - Potential implementation ideas

### Development Setup

1. **Fork the repository**
2. **Clone your fork**:
   ```bash
   git clone https://github.com/your-username/diff-demo-repo.git
   cd diff-demo-repo
   ```

3. **Add the original repository as upstream**:
   ```bash
   git remote add upstream https://github.com/MichaelFisher1997/diff-demo-repo.git
   ```

4. **Install dependencies**:
   ```bash
   bun install
   ```

5. **Start development server**:
   ```bash
   bun run dev
   ```

6. **Test your setup**:
   ```bash
   docker compose up -d
   bun run test:selenium
   ```

## 📝 Development Guidelines

### Code Style

- **JavaScript/TypeScript**: Use modern ES6+ features
- **CSS**: Use Tailwind utility classes when possible
- **Components**: Keep components small and focused
- **Comments**: Add meaningful comments for complex logic

### Testing Requirements

- **All new features** must include tests
- **Screenshot tests** should cover new pages/components
- **Run tests locally** before submitting PR:
  ```bash
  bun run test:selenium
  bun run build
  ```

### Commit Messages

Use the [Conventional Commits](https://www.conventionalcommits.org/) format:

```
feat: add new pricing table component
fix: resolve mobile responsiveness issues
docs: update README with new setup instructions
test: add screenshot tests for new features
chore: update dependencies
```

## 🔄 Pull Request Process

1. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** and commit them:
   ```bash
   git add .
   git commit -m "feat: add your amazing feature"
   ```

3. **Push to your branch**:
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Create a Pull Request**:
   - Use a clear title
   - Describe your changes in detail
   - Link to any related issues
   - Include screenshots if applicable

5. **Respond to code reviews** and make requested changes

### PR Checklist

- [ ] Tests are added/updated
- [ ] Documentation is updated
- [ ] Code follows project style guidelines
- [ ] All tests pass locally
- [ ] PR title follows conventional commits format

## 🧪 Testing Guidelines

### Adding New Screenshot Tests

When adding new pages or components:

1. **Add the page** to `selenium-screenshots.js`:
   ```javascript
   console.log(' - New page');
   await driver.get(`${baseUrl}/new-page.html`);
   await driver.wait(until.elementLocated(By.tagName('body')), 5000);
   const newData = await driver.takeScreenshot();
   fs.writeFileSync('screenshots/new-page.png', newData, 'base64');
   ```

2. **Update the Nightwatch tests** in `tests/screenshots.js`:
   ```javascript
   test('New page screenshot', function(browser) {
     browser
       .url('http://localhost:4324/new-page.html')
       .waitForElementVisible('body', 5000)
       .saveScreenshot('./screenshots/new-page.png');
   });
   ```

### Local Testing

Always test locally before submitting:

```bash
# Run full test suite
bun run test:selenium

# Test specific scenarios
bun run build
bunx http-server dist -p 4324
bun run test:selenium:ci
```

## 📦 Project Structure

```
src/
├── components/    # React components
├── layouts/       # Astro layouts
├── pages/         # Page components
└── styles/        # Global styles

tests/             # Test files
├── screenshots.js  # Nightwatch tests
└── screenshots/    # Test outputs

.github/workflows/ # GitHub Actions
docker-compose.yml # Docker configuration
selenium-screenshots.js # Selenium WebDriver tests
```

## 🎯 Areas for Contribution

### Feature Ideas
- **Visual Regression Testing**: Compare screenshots between runs
- **Performance Testing**: Add Lighthouse integration
- **Mobile Testing**: Add mobile device emulation
- **Accessibility**: Add accessibility testing
- **Documentation**: Add more detailed guides

### Technical Improvements
- **Test Parallelization**: Run tests concurrently
- **Cloud Integration**: Add cloud browser testing (BrowserStack, Sauce Labs)
- **Notification System**: Add Slack/Email notifications for test failures
- **Test Reports**: Generate HTML test reports

### Documentation
- **Advanced Guides**: Complex scenarios and use cases
- **Video Tutorials**: Setup and configuration videos
- **Troubleshooting**: Common issues and solutions

## 🤝 Community Guidelines

### Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help newcomers get started
- Focus on technical discussions

### Getting Help

- **GitHub Issues**: For bugs and feature requests
- **Discussions**: For general questions and ideas
- **Documentation**: Check the README and existing issues

## 🏆 Recognition

Contributors will be recognized in:
- README contributors section
- Release notes
- GitHub contributor statistics

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to the Astro Screenshot Testing Demo!** 🎉