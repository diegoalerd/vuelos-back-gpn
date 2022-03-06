import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configValidationSchema } from './config/config.shema';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env`],
      validationSchema: configValidationSchema,
    }),
    //TypeOrmModule.forFeature([EmployeerRepository]),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const isProduction = configService.get('STAGE') === 'prod';
        return {
          ssl: isProduction,
          extra: {
            ssl: isProduction ? { rejectUnauthorized: false } : null,
          },
          type: 'postgres',
          synchronize: true,
          autoLoadEntities: true,
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          username: configService.get('DB_USER'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE'),
        };
      },
    }),
    //EmployeerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
