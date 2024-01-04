import { ICrudRepository } from "./db-crud.service";

export abstract class IMongooseRepository<T extends Document> extends ICrudRepository<T> {}