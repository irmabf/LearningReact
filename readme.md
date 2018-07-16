# Install Live Server
  yarn global add live-server
# Run Live Server

  Navigate to the application folder and run:

  live-server public

# Install Babel CLI
  yarn global add babel-cli@6.24.1

# Install Babel presets for es6 and react

  yarn init
  yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2

# Run Babel
  babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
  babel src/playground/buid-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch

