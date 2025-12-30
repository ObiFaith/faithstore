import { ApiOkResponse } from '@nestjs/swagger';
import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    description: 'App health retrieved successfully!',
  })
  check() {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }
}
