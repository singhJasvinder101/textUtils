// Node.js will treat .cjs files as CommonJS modules and .mjs files as ECMAScript
// modules. It will treat .js files as whatever the default module system for 
// the project is (which is CommonJS unless package.json says "type": "module",).

let a = "karan"
let b = "Mani"
let c = "sunny"

export default a;
export {b};
export {c};