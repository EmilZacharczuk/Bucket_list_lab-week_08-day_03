const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Activities = function (url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
}

Activities.prototype.bindEvents = function () {
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
      console.log(activities);
      PubSub.publish('Activities:data-loaded', activities);
    })
    .catch(console.error);
    console.log(activity)
};

module.exports = Activities;
