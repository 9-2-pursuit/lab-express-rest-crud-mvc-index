const app = require('app'); // Express app
require('dotenv').config(); // Load environment variables
const port = process.env.PORT || 3006; // Port to listen on

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});