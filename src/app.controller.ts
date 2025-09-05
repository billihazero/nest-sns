import { Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('post')
export class AppController {
  constructor(private readonly appService: AppService) {}
}

//nest g resource: 원하는 모듈을 생성할 수 있다, endpoint가 모듈명으로 자동 생성된다.
