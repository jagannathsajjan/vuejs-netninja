new Vue({
  el: '#vue-app',
  data: {
    name: 'Dustin',
    age: 36,
    job: 'Developer',
    website: 'http://dustinhorstmann.com',
    someHTML: '<a href="//google.com">Some HTML</a>',
    x: 0,
    y: 0
  },
  methods: {
    greet: function(time) {
      // this refers to the Vue instance
      // this.data.name can work, but not necessary
      return 'Good ' + time + ', ' + this.name;
    },
    subtract: function(dec) {
      this.age -= dec;
    },
    updateXY: function(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
      //console.log(e);
    }
  }
});
