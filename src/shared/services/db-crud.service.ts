export abstract class ICrudRepository<EntityType> { // this is the infrastructure of crud
  abstract getAll(): Promise<EntityType[]>;
  abstract getById(id: string): Promise<EntityType>;
  abstract create(newObject: EntityType): Promise<string>;
  abstract update(id: string, obj: EntityType): Promise<void>;
  abstract delete(id: string): Promise<string>;
}
