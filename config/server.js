module.exports = ({ env }) => ({
  host: env('https://kainathealth.herokuapp.com/'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});


// module.exports = ({ env }) => ({
//   url: env("https://jazeera-travels.herokuapp.com/"),
//   proxy: true,
//   app: {
//     keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
//   },
// });