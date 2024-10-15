Introduction
---
Thanks for taking the time to complete this frontend technical assessment. We will be focusing on software quality (scalability, readability, maintainability, etc.) and your eye for detail. You may include any libraries, but Vue.js is preferred and jQuery is not recommended. Along with following best practices, bonus points for following our [coding guidelines](https://github.com/mindarc/frontend-assessment/wiki/Coding-guidelines). 

Exercise 1
---
Build a responsive page based on the designs.

##### Requirements
1. Match the designs exactly.
2. Needs to be responsive.

##### Designs
* exercise1-desktop.png
* exercise1-mobile.png

##### Assets
* Desktop banner - https://via.placeholder.com/1920x650
* Mobile banner - https://via.placeholder.com/600x600
* Content images - https://via.placeholder.com/400x300

Exercise 2
---
Read the `data.json` file and display the data as tabs on desktop and an accordion on mobile.

##### Requirements
1. Display data in tabs on desktop.
2. Display data in an accordion on mobile.
3. Only 1 accordion/tab should be open at a time.
4. Open the first accordion/tab on load.
5. If the open accordion is selected, close it.

###### Bonus points
* Improve the user experience with meaningful animations/transitions.
* Design and styling.
* Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.

Submission
---
We recommend submitting your completed assessment as a forked repository. Please replace README content with instructions and relevant documentation.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
