module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0bd15ae093d48c71fd11f113e37c9c0d'),
  },
});
