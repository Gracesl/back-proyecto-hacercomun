const enviroment = process.env;

PORT = enviroment.PORT || 3000;
URI = enviroment.URI

module.exports = {
    PORT,
    URI
}