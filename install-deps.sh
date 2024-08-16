#!/bin/bash

# Install Node Version Manager (nvm)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

# Source nvm to use it right away
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Install and use the correct Node.js version
nvm install 20
nvm use 20

# Install the correct version of PNPM
npm install -g pnpm@9

# Now run your build commands
pnpm install
pnpm run build
