import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ArticlesModule } from './articles/articles.module';
import { RagasModule } from './ragas/ragas.module';
import { LocationsModule } from './locations/locations.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [PrismaModule, ArticlesModule, RagasModule, LocationsModule, EventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
