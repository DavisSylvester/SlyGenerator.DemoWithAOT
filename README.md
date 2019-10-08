I have a simple angular 6 application I am trying to get compiled with AOT. I am NOT using the Angular CLI. I have a custom generator that scaffolds my project start and scaffolds my components, services, etc.

Everything works as expected pre-AOT. When i run ngc to compile my angular application everything compiles without errors. However when I check the compiled ngfactory javascript files, I see a reference for @angular/router/router.ngfactory from node_modules directory. I can't seem to locate this file anywhere.

My configuration is as follows:

Node v.12.0.0
Angular v.6.1.2
Typescript v.3.1.1
SystemJS v 0.21.4
Gulp v.3.9.1
I created a sample repo to replicate the issue.

The repo is located at SlyGenerator.DemoWithAOT

To start the application normally with JIT run the following command "npm run start-dev"

To reproduce the error

I run "node_modules/.bin/ngc -p ./src/assets/ts/tsconfig.aot.json" This produces a "dist" folder at the root level with the ngfactory files.
I then copy content of the dist folder to ./app/assets/js/ (This allows me to test the generated code without bundling or minification.
Next I modify my system.config.js file to use the Main.aot.js file instead of Main.js file. System.config.js file is located in .app/assets/config/system.config.js
At this point I get the following error:

SyntaxError: Unexpected token <

I can switch the system.config.js file back to the original and everything works fine again.
