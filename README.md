Monorepo Setup with Two React Applications and a Shared Redux Store
Project Structure


my-monorepo/
├── package.json
└── packages/
    ├── app1/
    │   ├── .env
    │   ├── package.json
    │   └── src/
    ├── app2/
    │   ├── .env
    │   ├── package.json
    │   └── src/
    └── shared-store/
        ├── package.json
        └── src/


Setup Guide
Step 1: Initialize the Monorepo
Create a new directory for your monorepo and navigate into it:
mkdir my-monorepo
cd my-monorepo

Initialize a new package.json for the monorepo:
npm init -y

Step 2: Create the React Applications

Step 3: Set Up the Shared Redux Store

npm init -y
npm install redux react-redux
mkdir src
touch src/index.js src/reducers.js