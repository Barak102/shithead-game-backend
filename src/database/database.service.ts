import { Injectable } from "@nestjs/common";
import { ICrudRepository } from "src/shared/services/db-crud.service";

@Injectable()
export abstract class DatabaseService<T> extends ICrudRepository<T> {}