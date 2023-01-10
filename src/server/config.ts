const env = process.env;
const PORT = env.PORT ?? "8081";
const HOST = env.host ?? "0.0.0.0";
export const MONGODB_URI = env.MONGODB_URI ?? "mongodb://localhost:27017";
export const DATABASE_NAME = env.DATABASE_NAME ?? "local";

export default {
    PORT, 
    HOST
};
