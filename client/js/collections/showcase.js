var app = app || {};

app.Showcase = Backbone.Collection.extend({
  // fill in the model property
  model: app.Show,
  // use localStorage for testing. Be sure to delete this line when your API is ready.
  // localStorage: new Backbone.LocalStorage('showcase')
  // fill in the url property

  // url below is our data storage
  url: 'http://localhost:3000/shows'

  // ruby -run -e httpd . -p 3001
  // fire up backbone server
});

