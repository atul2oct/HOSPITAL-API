const passport = require('passport'); //requiring passport
const JWTStrategy = require('passport-jwt').Strategy; //jwt strategy
const ExtractJWT = require('passport-jwt').ExtractJwt; //extracting the jwt token
const Doctor = require('../models/doctor');

require('dotenv').config();
let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SESSION_SECRET_KEY, //secret key used to encrypt/decrypt
}

passport.use(new JWTStrategy(opts, async (jwtPayload, done) => {
    try {
      const doctor = await Doctor.findById(jwtPayload._id);
      if (doctor) {
        return done(null, doctor);
      } else {
        return done(null, false);
      }
    } catch (err) {
      console.log('Error in finding user --> Passport JWT');
      return done(err);
    }
  }));
module.exports = passport;