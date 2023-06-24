import { Module } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { WalletsController } from './wallets.controller';
import { WalletAssetsService } from './wallet-assets/wallet-assets.service';

@Module({
  controllers: [WalletsController],
  providers: [WalletsService, WalletAssetsService]
})
export class WalletsModule {}
