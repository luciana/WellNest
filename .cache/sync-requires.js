const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/nn/dev/projects/WellNest/.cache/dev-404-page.js"))),
  "component---src-pages-404-jsx": hot(preferDefault(require("/home/nn/dev/projects/WellNest/src/pages/404.jsx"))),
  "component---src-pages-class-jsx": hot(preferDefault(require("/home/nn/dev/projects/WellNest/src/pages/class.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/home/nn/dev/projects/WellNest/src/pages/index.jsx"))),
  "component---src-pages-test-jsx": hot(preferDefault(require("/home/nn/dev/projects/WellNest/src/pages/test.jsx")))
}

