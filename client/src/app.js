const Activities = require('./models/activities.js');
const ActivitiesGridView = require('./views/activities_grid_view.js');
const ActivityFormView = require('./views/activity_form_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const activitiesContainer = document.querySelector('div#activities');
  const activitiesGridView = new ActivitiesGridView(activitiesContainer);
  activitiesGridView.bindEvents();

  const activityForm = document.querySelector('#activities-form');
  const activityFormView = new ActivityFormView(activityForm);
  activityFormView.bindEvents();

  const url = 'http://localhost:3000/api/activities';
  const activities = new Activities(url);
  // activities.bindEvents();
  activities.getData();
});
