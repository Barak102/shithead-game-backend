import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { DatabaseService } from './database.service';
import { Document } from 'mongoose';

@Injectable()
export abstract class MongooseDatabaseService<T> implements DatabaseService<T> {
constructor(private model: Model<T>) {}

    async getAll(): Promise<T[]> {
        return await this.model.find().exec();
    }
    async getById(id: string): Promise<T> {
        return await this.model.findOne({ _id:id });
    }
    async create(newObject: T): Promise<string> {
        const createdObject = new this.model(newObject);
        const savedObject: any = await createdObject.save();
        return savedObject._id;
    }
    async update(id: string, obj: T): Promise<void> {
        await this.model.findOneAndUpdate(
            { id },
            obj,
            { new: true },
          );
    }
    async delete(id: string): Promise<string> {
        const deletedEntity = this.model.deleteOne({ id });
        return id;
    }
}
