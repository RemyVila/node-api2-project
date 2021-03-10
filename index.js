// require your server and launch it here
const server = require('./api/server');


const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
// I am still battling with npm errors, please forgive me... I can't even utilize the tools we have available and I am beyond frustrated.
