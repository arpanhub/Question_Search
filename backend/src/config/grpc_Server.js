const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const { SearchQuestion } = require('../controllers/questionsController');

const PROTO_PATH = "./src/proto/question.proto";

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true,
});
const questionProto = grpc.loadPackageDefinition(packageDefinition).QuestionService;

const startGRPCServer = () => {
  const server = new grpc.Server();
  server.addService(questionProto.service, { GetQuestion:SearchQuestion });
  server.bindAsync("0.0.0.0:30032", grpc.ServerCredentials.createInsecure(), () => {
    console.log("gRPC server is running on port 30032");    
  });
};

module.exports = { startGRPCServer };
