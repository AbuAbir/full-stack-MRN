# full-stack-MRN

tsconfig.json file is needed in the root level for escript, pointing src directory etc
ejs is used for templating (could use other like mustache), dist is shown for pointing

npm i mongodb(for driver, could use mongoose), typescript, express, ts-node-dev 
mongo from docker, a yml file is needed
npm i webpack webpack-cli (bundler needed for bundling js files)
npm i ts-loader

npm i -D @typescript-eslint/parser eslint-plugin-react eslint-plugin-react-hooks [these are for eslint, corresponding to files are .eslintrc.js and .eslintignore]



Run in different terminals:

docker compose-up

npx tsnd src/dev/load-test-data.ts

npm run dev:server

npm run dev:bundler
