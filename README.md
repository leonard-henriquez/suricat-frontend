![React Workspaces Playground Screenshots](https://i.imgur.com/7snWXD0.png)

## Features

- ⚛️ Create React App 3 (React 16.8)
- 📖 Storybook 5
- 🐈 Yarn Workspaces
- 🐉 Lerna 3
- ✨ Host Multiple CRA Apps, Component Libraries & Storybooks in one Monorepo
- 🔥 Hot Reload all Apps, Components & Storybooks
- 👨‍🔬 Test all workspaces with Eslint & Jest using one command
- :octocat: Deploy your apps to Github Pages using one command

## Contents

- [Features](#features)
- [Contents](#contents)
- [Setup](#setup)
  - [Pre-Requisites](#pre-requisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Starting The React App](#starting-the-react-app)
  - [Starting The Storybook](#starting-the-storybook)
  - [Linting & Testing](#linting--testing)
  - [Deploying to GitHub Pages](#deploying-to-github-pages)
  - [Creating a New CRA App](#creating-a-new-cra-app)

## Setup

### Pre-Requisites

- Yarn 1.13.0
- Node 11.14.0

### Installation

```bash
git clone git@github.com:react-workspaces/cra-workspaces-playground
cd cra-workspaces-playground
yarn
```

## Usage

### Starting The React App

```bash
cd packages/apps/app-one
yarn start
```

### Starting The Storybook

```bash
cd packages/storybook
yarn storybook
```

### Linting & Testing

```bash
cd <workspace-root>
yarn test
```

### Deploying to GitHub Pages

Update the `homepage` URL in `app-one/package.json` to reflect your GitHub Pages URL.

```json
{
  "name": "@project/app-one",
  "private": true,
  "homepage": "https://react-workspaces.github.io/react-workspaces-playground",
  "scripts": {
    "deploy": "gh-pages -d build"
  }
}
```

Run the deploy script.

```bash
cd <workspace-root>
yarn deploy
```

### Creating a New CRA App

Use Create React App's `--scripts-version` to create a new React App with Yarn Workspaces support.

```bash
create-react-app --scripts-version @react-workspaces/react-scripts my-app
```
