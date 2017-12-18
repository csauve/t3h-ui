# t3h-ui (WIP)
A library of UI components and server rendering boilerplate. It is intended to be bundled into other projects as a build dependency. It tends to assume universal rendering and a page component per Express route.

## Usage
The function `renderToNodeStream` from `t3h-ui/server` will render the given component into an HTML stream, piping it into the response:

Todo: usage is WIP

```jsx
import {isomorphic, PageContent} from "t3h-ui";
import {renderToNodeStream} from "t3h-ui/server";

const HomePage = isomorphic(({name}) => (
  <PageContent>
    <h1>Hello, {name}!</h1>
  </PageContent>
));

app.get("/", (req, res) => {
  const props = {name: "world"};
  renderPageStream(res, <HomePage {...props}/>);
});
```

## Building & releasing
The gulp build is responsible for copying SCSS and building CJS modules. It's run during the NPM `prepublishOnly` phase, or with `npx gulp`.

Todo: publishing script example:

```sh
#!/bin/sh
env VERSION=0.6.1 node -e '
  var pkg = require("./package.json");
  pkg.version = process.env.VERSION;
  fs.writeFileSync("package.json", JSON.stringify(pkg, null, 2) + "\n");
'
git add package.json
git commit --message 'Version 0.6.1'
git tag --annotate v0.6.1 --message 'Version 0.6.1'
git push --atomic origin refs/heads/master refs/tags/v0.6.1
env VERSION=0.6.1 PREVIOUS_VERSION=0.6.0 bash -c 'npm publish'
```
