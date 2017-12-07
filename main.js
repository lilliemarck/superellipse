"use strict";

Vue.component('superellipse', {
  props: ['points'],
  template: '#superellipse-template',
  computed: {
    polygonPoints: function() {
      return this.points.map(function (p, i) {
        return p[0] + ',' + p[1]
      }).join(' ')
    }
  }
})

var app = new Vue({
  el: '#app',
  data: {
    width: 200,
    height: 160,
    points: [
      [0, 0],
      [100, 0],
      [0, 100]
    ],
  }
})
