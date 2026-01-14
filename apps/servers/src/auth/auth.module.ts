import { Module } from '@nestjs/common';
import { JwtStrategy } from './strategies/jwt.strategy.js';

@Module({
  imports: [],
  providers: [JwtStrategy],
})
export class AuthModule {}
