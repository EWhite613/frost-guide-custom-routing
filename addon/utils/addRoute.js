export default function addRoute(routeConfig) {
  if (Ember.isEmpty(routeConfig.items)) {
    if (routeConfig.path !== undefined && routeConfig.modalName !== undefined) {
      this.route(routeConfig.id, routeConfig.path, function () {
        this.modal(routeConfig.modalName, routeConfig.modal)
      })
    } else if (routeConfig.path !== undefined && routeConfig.modals !== undefined) {
      this.route(routeConfig.id, routeConfig.path, function () {
        for (var i = 0; i < routeConfig.modals.length; i++) {
          var mod = routeConfig.modals[i]
          this.modal(mod.modalName, mod.modal)
        }
      })
    } else if (routeConfig.path !== undefined) {
      this.route(routeConfig.id, routeConfig.path)
    } else
    if (routeConfig.modalName !== undefined) {
      this.route(routeConfig.id, function () {
        this.modal(routeConfig.modalName, routeConfig.modal)
      })
    } else if (routeConfig.modals !== undefined) {
      this.route(routeConfig.id, function () {
        for (var i = 0; i < routeConfig.modals.length; i++) {
          var mod = routeConfig.modals[i]
          this.modal(mod.modalName, mod.modal)
        }
      })
    } else {
      this.route(routeConfig.id)
    }
  } else {
    if (routeConfig.path !== undefined && routeConfig.modals !== undefined) {
      this.route(routeConfig.id, routeConfig.path, function () {
        routeConfig.items.forEach((item) => {
          for (var i = 0; i < routeConfig.modals.length; i++) {
            var mod = routeConfig.modals[i]
            this.modal(mod.modalName, mod.modal)
          }
          addRoute.call(this, item)
        })
      })
    } else if (routeConfig.path !== undefined) {
      this.route(routeConfig.id, routeConfig.path, function () {
        routeConfig.items.forEach((item) => {
          addRoute.call(this, item)
        })
      })
    } else if (routeConfig.modals !== undefined) {
      this.route(routeConfig.id, function () {
        routeConfig.items.forEach((item) => {
          for (var i = 0; i < routeConfig.modals.length; i++) {
            var mod = routeConfig.modals[i]
            this.modal(mod.modalName, mod.modal)
          }
          addRoute.call(this, item)
        })
      })
    } else {
      this.route(routeConfig.id, function () {
        routeConfig.items.forEach((item) => {
          addRoute.call(this, item)
        })
      })
    }
  }
}
