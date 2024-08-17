**Pre-requisites
Install NodeJS and NPM pakcage manager.
Code Editor of your choice e.g. Visual Studio Code
  Install ESLint VS Code extension from Microsoft to make linting work in IDE
GIT Client (for remote tracking)
GIT Bash terminal (for Windows)

**Setup from Scratch
npm init to setup node project with package.json
npm install --save-dev cypress to install cypress as dev dependency
npx cypress open to open the cypress test runner and choose E2E Testing which will create cypress config, support and fixture folders.
Choose browser of your choice, and scaffold examples which will create boilerplate specs within e2e folder.
Remove the default boilerplate specs from cypress/e2e folder
Add .gitignore to exclude files and folders from GIT
Add README.md to document
Start with writing tests under cypress/e2e directory.
