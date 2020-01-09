const { Genre } = require("./models/genre");
const { Movie } = require("./models/movie");
const {User}=require("./models/user");
const mongoose = require("mongoose");
const config = require("config");

const data = [
  {
    name: "Comedy",
    movies: [
      { title: "Airplane", numberInStock: 5, dailyRentalRate: 2, price: 10, imageUrl: "http://pocatellofilmsociety.com/sites/default/files/onceupon_0.jpg", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere, sapien sed lobortis pulvinar, mi felis sollicitudin lectus, ut pharetra est metus sit amet massa. Suspendisse mattis suscipit quam, id dapibus nisi posuere non. Mauris dignissim libero accumsan, lobortis nulla et, ullamcorper ipsum. Proin luctus lobortis placerat. Vestibulum pharetra maximus tellus id consectetur. Praesent dignissim in ligula a scelerisque. Sed et turpis feugiat, faucibus purus consectetur, convallis lectus. Nulla mattis lobortis ipsum eget condimentum." },
      { title: "The Hangover", numberInStock: 10, dailyRentalRate: 2, price: 10, imageUrl: "http://pocatellofilmsociety.com/sites/default/files/onceupon_0.jpg", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere, sapien sed lobortis pulvinar, mi felis sollicitudin lectus, ut pharetra est metus sit amet massa. Suspendisse mattis suscipit quam, id dapibus nisi posuere non. Mauris dignissim libero accumsan, lobortis nulla et, ullamcorper ipsum. Proin luctus lobortis placerat. Vestibulum pharetra maximus tellus id consectetur. Praesent dignissim in ligula a scelerisque. Sed et turpis feugiat, faucibus purus consectetur, convallis lectus. Nulla mattis lobortis ipsum eget condimentum." },
      { title: "Wedding Crashers", numberInStock: 15, dailyRentalRate: 2, price: 10, imageUrl: "http://pocatellofilmsociety.com/sites/default/files/onceupon_0.jpg", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere, sapien sed lobortis pulvinar, mi felis sollicitudin lectus, ut pharetra est metus sit amet massa. Suspendisse mattis suscipit quam, id dapibus nisi posuere non. Mauris dignissim libero accumsan, lobortis nulla et, ullamcorper ipsum. Proin luctus lobortis placerat. Vestibulum pharetra maximus tellus id consectetur. Praesent dignissim in ligula a scelerisque. Sed et turpis feugiat, faucibus purus consectetur, convallis lectus. Nulla mattis lobortis ipsum eget condimentum." }
    ]
  },
  {
    name: "Action",
    movies: [
      { title: "Die Hard", numberInStock: 5, dailyRentalRate: 2 , price: 10, imageUrl: "http://pocatellofilmsociety.com/sites/default/files/onceupon_0.jpg", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere, sapien sed lobortis pulvinar, mi felis sollicitudin lectus, ut pharetra est metus sit amet massa. Suspendisse mattis suscipit quam, id dapibus nisi posuere non. Mauris dignissim libero accumsan, lobortis nulla et, ullamcorper ipsum. Proin luctus lobortis placerat. Vestibulum pharetra maximus tellus id consectetur. Praesent dignissim in ligula a scelerisque. Sed et turpis feugiat, faucibus purus consectetur, convallis lectus. Nulla mattis lobortis ipsum eget condimentum."},
      { title: "Terminator", numberInStock: 10, dailyRentalRate: 2, price: 10, imageUrl: "http://pocatellofilmsociety.com/sites/default/files/onceupon_0.jpg" , description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere, sapien sed lobortis pulvinar, mi felis sollicitudin lectus, ut pharetra est metus sit amet massa. Suspendisse mattis suscipit quam, id dapibus nisi posuere non. Mauris dignissim libero accumsan, lobortis nulla et, ullamcorper ipsum. Proin luctus lobortis placerat. Vestibulum pharetra maximus tellus id consectetur. Praesent dignissim in ligula a scelerisque. Sed et turpis feugiat, faucibus purus consectetur, convallis lectus. Nulla mattis lobortis ipsum eget condimentum."},
      { title: "The Avengers", numberInStock: 15, dailyRentalRate: 2, price: 10, imageUrl: "http://pocatellofilmsociety.com/sites/default/files/onceupon_0.jpg", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere, sapien sed lobortis pulvinar, mi felis sollicitudin lectus, ut pharetra est metus sit amet massa. Suspendisse mattis suscipit quam, id dapibus nisi posuere non. Mauris dignissim libero accumsan, lobortis nulla et, ullamcorper ipsum. Proin luctus lobortis placerat. Vestibulum pharetra maximus tellus id consectetur. Praesent dignissim in ligula a scelerisque. Sed et turpis feugiat, faucibus purus consectetur, convallis lectus. Nulla mattis lobortis ipsum eget condimentum." }
    ]
  },
  {
    name: "Romance",
    movies: [
      { title: "The Notebook", numberInStock: 5, dailyRentalRate: 2, price: 10, imageUrl: "http://pocatellofilmsociety.com/sites/default/files/onceupon_0.jpg" , description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere, sapien sed lobortis pulvinar, mi felis sollicitudin lectus, ut pharetra est metus sit amet massa. Suspendisse mattis suscipit quam, id dapibus nisi posuere non. Mauris dignissim libero accumsan, lobortis nulla et, ullamcorper ipsum. Proin luctus lobortis placerat. Vestibulum pharetra maximus tellus id consectetur. Praesent dignissim in ligula a scelerisque. Sed et turpis feugiat, faucibus purus consectetur, convallis lectus. Nulla mattis lobortis ipsum eget condimentum."},
      { title: "When Harry Met Sally", numberInStock: 10, dailyRentalRate: 2, price: 10, imageUrl: "http://pocatellofilmsociety.com/sites/default/files/onceupon_0.jpg", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere, sapien sed lobortis pulvinar, mi felis sollicitudin lectus, ut pharetra est metus sit amet massa. Suspendisse mattis suscipit quam, id dapibus nisi posuere non. Mauris dignissim libero accumsan, lobortis nulla et, ullamcorper ipsum. Proin luctus lobortis placerat. Vestibulum pharetra maximus tellus id consectetur. Praesent dignissim in ligula a scelerisque. Sed et turpis feugiat, faucibus purus consectetur, convallis lectus. Nulla mattis lobortis ipsum eget condimentum." },
      { title: "Pretty Woman", numberInStock: 15, dailyRentalRate: 2, price: 10, imageUrl: "http://pocatellofilmsociety.com/sites/default/files/onceupon_0.jpg", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere, sapien sed lobortis pulvinar, mi felis sollicitudin lectus, ut pharetra est metus sit amet massa. Suspendisse mattis suscipit quam, id dapibus nisi posuere non. Mauris dignissim libero accumsan, lobortis nulla et, ullamcorper ipsum. Proin luctus lobortis placerat. Vestibulum pharetra maximus tellus id consectetur. Praesent dignissim in ligula a scelerisque. Sed et turpis feugiat, faucibus purus consectetur, convallis lectus. Nulla mattis lobortis ipsum eget condimentum." }
    ]
  },
  {
    name: "Thriller",
    movies: [
      { title: "The Sixth Sense", numberInStock: 5, dailyRentalRate: 2, price: 10, imageUrl: "http://pocatellofilmsociety.com/sites/default/files/onceupon_0.jpg", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere, sapien sed lobortis pulvinar, mi felis sollicitudin lectus, ut pharetra est metus sit amet massa. Suspendisse mattis suscipit quam, id dapibus nisi posuere non. Mauris dignissim libero accumsan, lobortis nulla et, ullamcorper ipsum. Proin luctus lobortis placerat. Vestibulum pharetra maximus tellus id consectetur. Praesent dignissim in ligula a scelerisque. Sed et turpis feugiat, faucibus purus consectetur, convallis lectus. Nulla mattis lobortis ipsum eget condimentum." },
      { title: "Gone Girl", numberInStock: 10, dailyRentalRate: 2, price: 10, imageUrl: "http://pocatellofilmsociety.com/sites/default/files/onceupon_0.jpg", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere, sapien sed lobortis pulvinar, mi felis sollicitudin lectus, ut pharetra est metus sit amet massa. Suspendisse mattis suscipit quam, id dapibus nisi posuere non. Mauris dignissim libero accumsan, lobortis nulla et, ullamcorper ipsum. Proin luctus lobortis placerat. Vestibulum pharetra maximus tellus id consectetur. Praesent dignissim in ligula a scelerisque. Sed et turpis feugiat, faucibus purus consectetur, convallis lectus. Nulla mattis lobortis ipsum eget condimentum." },
      { title: "The Others", numberInStock: 15, dailyRentalRate: 2 , price: 10, imageUrl: "http://pocatellofilmsociety.com/sites/default/files/onceupon_0.jpg", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere, sapien sed lobortis pulvinar, mi felis sollicitudin lectus, ut pharetra est metus sit amet massa. Suspendisse mattis suscipit quam, id dapibus nisi posuere non. Mauris dignissim libero accumsan, lobortis nulla et, ullamcorper ipsum. Proin luctus lobortis placerat. Vestibulum pharetra maximus tellus id consectetur. Praesent dignissim in ligula a scelerisque. Sed et turpis feugiat, faucibus purus consectetur, convallis lectus. Nulla mattis lobortis ipsum eget condimentum."}
    ]
  }
];

async function seed() {
  await mongoose.connect(config.get("db"));
  await User.deleteMany({});
  await Movie.deleteMany({});
  await Genre.deleteMany({});

  for (let genre of data) {
    const { _id: genreId } = await new Genre({ name: genre.name }).save();
    const movies = genre.movies.map(movie => ({
      ...movie,
      genre: { _id: genreId, name: genre.name }
    }));
    await Movie.insertMany(movies);
  }

  mongoose.disconnect();

  console.info("Done!");
}

seed();