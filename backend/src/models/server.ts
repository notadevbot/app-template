import express, { Application } from "express";
import cors from "cors";

class Server {
	private app: Application;
	private port: string;

	constructor() {
		this.app = express();
		this.port = process.env.NODE_DOCKER_PORT || "8080";

		this.dbConnection();
		this.middlewares();
		this.routes();
	}

	async dbConnection() {}

	middlewares() {
		this.app.use(cors());
		this.app.use(express.json());
	}

	routes() {}

	listen() {
		this.app.listen(this.port, () => {
			console.log("Servidor corriendo en puerto " + this.port);
		});
	}
}

export default Server;
