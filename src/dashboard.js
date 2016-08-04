export class dashboard {
  configureRouter(config, router) {
    config.map([
      { route: ['', 'dashboardTab'], name: 'dashboard',     moduleId: 'dashboard-tab',     nav: true, title: 'dashboard' },
      { route: 'documents',   name: 'Documents', moduleId: 'documents', nav: true, title: 'receipt' },
      { route: 'settings',   name: 'settings', moduleId: 'settings', nav: true, title: 'settings' },
      { route: 'logout',   name: 'Logout', moduleId: 'logout', nav: true, title: 'lock' }
    ]);

    this.router = router;
  }
}
