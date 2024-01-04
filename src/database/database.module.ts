import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseDatabaseService } from './mongoose.database.service';
import { DatabaseService } from './database.service';


@Module({
    imports: [
        MongooseModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: async (config: ConfigService) => ({
          uri: config.get<string>('MONGODB_CONNECTION_STRING'), // Loaded from .ENV
        })
    })
    ],
//   imports: [MongooseModule.forRoot(process.env.MONGODB_CONNECTION_STRING)],
  providers: [...databaseProviders, DatabaseService],
  exports: [...databaseProviders],
})
export class DatabaseModule {}