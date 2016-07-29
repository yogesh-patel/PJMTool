export class dashboard {
  configureRouter(config, router) {
    config.map([
      { route: ['', 'dashboardTab'], name: 'dashboardTab',     moduleId: 'dashboard-tab',     nav: true, title: 'Dashboard' },
      { route: 'documents',   name: 'documents', moduleId: 'documents', nav: true, title: 'Documents' },
      { route: 'settings',   name: 'settings', moduleId: 'settings', nav: true, title: 'Settings' },
      { route: 'logout',   name: 'logout', moduleId: 'logout', nav: true, title: 'Logout' }
    ]);

    this.router = router;
  }
}
