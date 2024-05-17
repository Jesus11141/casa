import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt'; // Importa JwtModule
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [JwtModule.register({ 
    secret:"mi codigo secreto",
    signOptions: {expiresIn:'280S'}
   })], // Añade JwtModule a las importaciones
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy]
})
export class AuthModule {}
