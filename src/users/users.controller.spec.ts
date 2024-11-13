import { Test, TestingModule } from "@nestjs/testing";
import { UsersController } from "./users.controller";

import { UsersService } from "./users.service";

describe("UsersController", () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const mockUsersService = {
      getAll: jest.fn(),
      getByID: jest.fn(),
      filePath: "../src/env",
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [{ provide: UsersService, useValue: mockUsersService }],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  it("should call the correct functions in the users service", async () => {
    await controller.getAll();
    expect(service.getAll).toHaveBeenCalledTimes(1);

    await controller.getUsers("1");
    expect(service.getByID).toHaveBeenCalledTimes(1);
  });
});
