const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("app"));

// Sets up the Express app to handle data parsing (needed to process POST request)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/", require("./app/routing/apiRoutes"));
app.use("/api/friends", require("./app/routing/htmlRoutes"));
app.use("/", require("./app/routing/defaultRoutes"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
