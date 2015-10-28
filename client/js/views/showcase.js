var app = app || {};

app.ShowcaseView = Backbone.View.extend({
  el: '#shows',

  events: {
    'click #add': 'addShow'
  },

  // fill in with your collection setup
  initialize: function() {
    this.collection = new app.Showcase();
    this.collection.fetch({reset: true})
    this.render();

    this.listenTo(this.collection, 'add', this.renderShow);
    this.listenTo(this.collection, 'reset', this.render);
  },

  // define a helper function to render a single show
  renderShow: function(show) {
    var view = new app.ShowView({model: show});
    $(this.el).append(view.render().el);
    // $("#shows").append(view.render().el);
  },

  // fill in
  render: function() {
    this.collection.each(function(show) {
      this.renderShow(show)
    }, this)
  },

  // fill in
  addShow: function(event) {
    event.preventDefault();
    var data = {};

    $("#addShow").children().each(function(index, input) {
      var $input = $(input);
      var validInput = input.localName !== 'input' && input.localName !== 'textarea';
      if (validInput || input.type === 'submit') { return true; } // return true goes to the next entry in each, like next in Ruby
      if ($input.val() !== '') {
        data[input.name] = $input.val(); // set the keys and values for the data object
      console.log(data)
      }
    });
    console.log("******************")
    this.collection.create(data); // creating a new model (show instance) to be appended
 }
});

$(function(){
  new app.ShowcaseView();
});
