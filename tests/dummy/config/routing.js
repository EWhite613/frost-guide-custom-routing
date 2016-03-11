module.exports = [
  {
    id: 'demo',
    alias: 'Demo',
    type: 'category',
    route: 'demo',
    path: {
      path: '/'
    },
    items: [{
      id: 'min',
      alias: 'First',
      type: 'route',
      route: 'demo.min'
    }]
  }
]
