# t3h-ui
A React- and Sass-based UI component library, for personal websites served under the [t3hz0r.com](https://t3hz0r.com) domain. The project's distributables are meant to be bundled into other projects as a build dependency.

## Releasing
Built versions of this package are released to a public S3 bucket by running the following:

```sh
npm run build
npm run release
```

Versions released this way can be installed with:

```sh
npm install https://s3.amazonaws.com/csauve-npm-packages/t3h-ui-0.0.1.tgz
```