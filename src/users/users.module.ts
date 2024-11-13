import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { FILE_PATH } from "../env";
@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: "FILE_PATH",
      useValue: FILE_PATH,
    },
  ],
  exports: [UsersService],
})
export class UsersModule {}
