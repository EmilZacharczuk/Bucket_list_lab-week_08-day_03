const PubSub = require('../helpers/pub_sub.js');
const ActivityView = require('./activities_view.js');

const ActivitiesGridView = function (container) {
  this.container = container;
}

ActivitiesGridView.prototype.bindEvents = function () {
  PubSub.subscribe('Activities:data-loaded', (evt) => {
    this.render(evt.detail);
  });
};

ActivitiesGridView.prototype.render = function (activities) {
  this.container.innerHTML = '';
  const activitiesView = new ActivityView(this.container);
  activities.forEach((activity) => activitiesView.render(activity));
};

module.exports = ActivitiesGridView;
