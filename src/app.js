export class App {
  configureRouter(config, router) {
    config.title = 'Mercatus';
    config.map([
      { route: ['', 'login'], name: 'login',     moduleId: 'login',     nav: true, title: 'login' },
      { route: 'dashboard',   name: 'dashboard', moduleId: 'dashboard', nav: true, title: 'welcome' }
    ]);

    this.router = router;
  }
}
