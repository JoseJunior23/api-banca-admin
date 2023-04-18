import authConfig from '@config/jwt-config';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

@Injectable()
export class IsAuthenticatedMiddleware implements NestMiddleware {
  use(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
      throw new Error('JWT Token is missing.');
    }

    const [, token] = authHeader.split(' ');
    try {
      const decodedToken = verify(token, authConfig.jwt.secret);

      const { sub } = decodedToken as ITokenPayload;

      request.user = { id: sub };

      return next();
    } catch {
      throw new Error('Invalid JWT Token.');
    }
  }
}
