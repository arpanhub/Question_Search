
const expressServer = require('./express');
// Main entry point
const main = async () => {
  await ConnectedDB(); // Connect to MongoDB
  startGRPCServer();// Start the gRPC server
  // expressServer();// Start the Express server
};

main().catch((error) => {
  console.error("Application startup failed:", error);
  process.exit(1);
});
