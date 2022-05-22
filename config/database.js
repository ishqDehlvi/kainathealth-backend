module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-99-80-170-190.eu-west-1.compute.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'd46ae6tqdlabsd'),
      user: env('DATABASE_USERNAME', 'kfvzunlqnhzrau'),
      password: env('DATABASE_PASSWORD', '9d9171c3c045cf3ef7123adf419b988c0569f118566193f0141533fdaafe842c'),
      ssl: { rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates  
    },
    },
  },
});


