use bucket_list;
db.dropDatabase();

db.activities.insertMany([
  {
    title: "Bungee Jumping",
    description: "Jump from the bridge in South Africa"
  },

  { title: "Rodeo",
    description: "Go to USA and play cowboy"
  }
]);
