const HOST = "https://deploying-backend-leoleo.herokuapp.com";
const VERSION = "/v1";
let DOG = `${VERSION}/dog`;
let DOGS = `${VERSION}/dogs`;
let DETAILS = `${VERSION}/details`;
let ADD_DOG = `${VERSION}/addDog`;
let MY_DOGS = `${VERSION}/myDogs`;
let TEMPERS = `${VERSION}/temperaments`;

module.exports = {
  HOST,
  VERSION,
  DOG,
  DOGS,
  DETAILS,
  TEMPERS,
  ADD_DOG,
  MY_DOGS,
};
