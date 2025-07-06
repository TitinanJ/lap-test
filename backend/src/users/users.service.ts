import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService implements OnModuleInit {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async onModuleInit() {
    const count = await this.userRepository.count();
    if (count === 0) {
      const user = this.userRepository.create({ name: 'Parn Titinan' });
      await this.userRepository.save(user);
    }
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}
