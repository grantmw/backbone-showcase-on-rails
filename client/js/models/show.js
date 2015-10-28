var app = app || {};


app.Show = Backbone.Model.extend({
  defaults: function(){
    return {
      coverImage: 'img/placeholder.png',
      title: 'Unknown',
      genre: 'Unknown',
      stars: '★'
    }
  }
});

// create a Backbone Model constructor inside the app object named Show
// assign the following defaults:
// coverImage: 'img/placeholder.png',
// title: 'Unknown',
// genre: 'Unknown',
// stars: '★'
