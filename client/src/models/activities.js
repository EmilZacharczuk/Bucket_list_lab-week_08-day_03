const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Activities = function (url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
}

Activities.prototype.getData = function () {
  this.request.get()
    .then((activities) => {
      PubSub.publish('Activities:data-loaded', activities);
    })
    .catch(console.error);
};

module.exports = Activities;
