/* global window, __assetMapFilename__ */
import Ember from 'ember';
import AssetMap from '../services/asset-map';

export function initialize(app) {
  let assetMapFile = window && window.__assetMapFilename__;

  const promise = new Ember.RSVP.Promise((resolve, reject) => {
    Ember.$.getJSON(assetMapFile, resolve).fail(reject);
  });

  promise.then((map = {}) => {
    window.assetMap = map.assets;
  });
}

export default {
  name: 'asset-map',
  initialize: initialize
};
