var App = SC.Application.create();

App.MyView = SC.View.extend({
  mouseDown: function() {
    window.alert("hello world!");
  }
});
