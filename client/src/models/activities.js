const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Activities = function (url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
}

Activities.prototype.bindEvents = function () {
  PubSub.subscribe('ActivityView:activity-delete-clicked', (evt) => {
    this.deleteActivity(evt.detail);
  });

  PubSub.subscribe('ActivityView:Activity-save-submit', (evt) => {
    console.log(evt.detail);
    this.postActivity(evt.detail);
  });
};

Activities.prototype.getData = function () {
  this.request.get()
    .then((activities) => {
      PubSub.publish('Activities:data-loaded', activities);
    })
    .catch(console.error);
};

Activities.prototype.postActivity = function (activity) {
  this.request.post(activity)
    .then((activities) => {
      PubSub.publish('Activities:data-loaded', activities);
    })
    .catch(console.error);
};

Activities.prototype.deleteActivity = function (activityId) {
  this.request.delete(activityId)
    .then((activities) => {
      PubSub.publish('Activities:data-loaded', activities);
    })
    .catch(console.error);
};

module.exports = Activities;
