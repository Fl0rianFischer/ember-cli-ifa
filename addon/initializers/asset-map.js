/* global window, __assetMapFilename__ */
import Ember from 'ember';

export function initialize(app) {
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
