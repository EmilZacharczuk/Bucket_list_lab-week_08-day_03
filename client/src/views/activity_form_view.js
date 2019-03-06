const PubSub = require('../helpers/pub_sub.js');

const ActivityFormView = function (form) {
  this.form = form;
};

ActivityFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) =>{
    this.handleSubmit(evt);
  })
};

ActivityFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newActivity = this.createActivity(evt.target);
  PubSub.publish('ActivityView:Activity-save-submit', newActivity);
  evt.target.reset();
};

ActivityFormView.prototype.createActivity = function (form) {
  const newActivity = {
    title: form.title.value,
    description: form.description.value
  }

  return newActivity;
};

module.exports = ActivityFormView;
