import { Module } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { AssetsController } from './assets.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Asset, AssetSchema } from './assets.schema';
import { AssetDaily, AssetDailySchema } from './assets.daily.schema';
import { AssetsDailyController } from './assets.daily.controller';
import { AssetsDailyService } from './assets.daily.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Asset.name, schema: AssetSchema },
      { name: AssetDaily.name, schema: AssetDailySchema },
    ]),
  ],
  controllers: [AssetsController, AssetsDailyController],
  providers: [AssetsService, AssetsDailyService],
  exports: [AssetsService],
})
export class AssetsModule {}
