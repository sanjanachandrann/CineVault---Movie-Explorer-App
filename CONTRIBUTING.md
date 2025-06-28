# Contributing to CineVault

First off, thank you for considering contributing to CineVault! It's people like you that make CineVault such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed after following the steps**
- **Explain which behavior you expected to see instead and why**
- **Include screenshots if possible**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Provide specific examples to demonstrate the steps**
- **Describe the current behavior and explain which behavior you expected to see instead**
- **Explain why this enhancement would be useful**

### Pull Requests

- Fill in the required template
- Do not include issue numbers in the PR title
- Include screenshots and animated GIFs in your pull request whenever possible
- Follow the JavaScript/React styleguides
- Include thoughtfully-worded, well-structured tests
- Document new code based on the Documentation Styleguide
- End all files with a newline

## Styleguides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

### JavaScript Styleguide

- All JavaScript must adhere to the project's ESLint configuration
- Use semicolons
- Use single quotes for strings
- Prefer const over let
- Use meaningful variable names

### React Styleguide

- Use functional components with hooks
- Use PascalCase for component names
- Use camelCase for prop names
- Keep components small and focused
- Use JSX shorthand when possible

## Development Setup

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/cinevault-movie-explorer.git`
3. Create a branch: `git checkout -b feature/your-feature-name`
4. Install dependencies: `npm install`
5. Start development server: `npm start`
6. Make your changes
7. Test your changes: `npm test`
8. Commit your changes: `git commit -m "Add some feature"`
9. Push to your branch: `git push origin feature/your-feature-name`
10. Submit a pull request

## Project Structure

```
src/
├── components/          # Reusable components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── styles/             # Global styles
├── App.js              # Main application component
└── index.js            # Entry point
```

## Testing

- Write tests for new features
- Ensure all tests pass before submitting a PR
- Use descriptive test names
- Test both happy path and edge cases

## Documentation

- Update README.md if needed
- Add JSDoc comments for new functions
- Update component prop types
- Keep documentation up to date with code changes

Thank you for contributing! 🎬
