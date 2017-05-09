import Ember from 'ember';
import $ from 'jquery';
export default Ember.Component.extend({
    
  willRender() {
    $.getJSON('/drafts.json').then(data => {
      
      this.set('drafts', data);
    });
  }
     
});
