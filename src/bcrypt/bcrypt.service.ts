import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptService {
    private readonly salt = 10;

    async hash(pass: string) {
        return await bcrypt.hash(pass, this.salt);
    }
}
