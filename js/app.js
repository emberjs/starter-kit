App = Ember.Application.create({});

App.IndexRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('content', ['a', 'b', 'c']);
  }
});