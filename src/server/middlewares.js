import favicon from "serve-favicon";

export default function configure(app, config) {
  if (config.faviconPath) {
    app.use(favicon(config.faviconPath));
  }
}
