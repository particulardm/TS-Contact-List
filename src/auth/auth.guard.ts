import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const headers = request.headers;
    const token = headers['authorization'].split(' ')[1];
    console.log(token);
    const payload = await this.jwtService.verifyAsync(token);

    if (!payload) return false;

    request.user = payload;
    return true;
  }
}
