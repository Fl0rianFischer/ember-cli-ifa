/* global window, __assetMapFilename__ */
import Ember from 'ember';

export function initialize(app) {
  if (!window.__assetMapPlaceholder__) return;
  
  const promise = new Ember.RSVP.Promise((resolve, reject) => {
    Ember.$.getJSON(window.__assetMapPlaceholder__, resolve).fail(reject);
  });

  promise.then((map = {}) => {
    window.assetMap = map.assets;
  });
}

export default {
  name: 'asset-map',
  initialize: initialize
};
