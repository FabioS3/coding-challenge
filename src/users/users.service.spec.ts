import { Test, TestingModule } from "@nestjs/testing";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { FILE_PATH } from "../env";
import { NotFoundException } from "@nestjs/common";

describe("UsersService", () => {
  let service: UsersService;
  let controller: UsersController;

  const fs = require("fs");
  const expectedUsers = [
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        { provide: UsersService, useValue: new UsersService(FILE_PATH) },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  describe("getAll", () => {
    it("should return the correct array", async () => {
      const users: any = await service.getAll();
      expect(Array.isArray(users)).toBe(true);
      expect(users.length).toBeGreaterThan(0);
      expect(users).toStrictEqual(expectedUsers);
    });
    it("should reject when the file is not valid", async () => {
      await fs.promises.rename("./users.json", "./users.json2");
      await expect(service.getAll()).rejects.toThrow(NotFoundException);
      await fs.promises.rename("./users.json2", "./users.json");
    });
  });
  describe("getByID", () => {
    it("should return the correct user", async () => {
      const user: any = await controller.getUsers("2");
      expect(user).toStrictEqual(expectedUsers[1]);
    });
    it("should throw on invalid id", async () => {
      await expect(service.getByID("a")).rejects.toThrow(NotFoundException);
      await expect(service.getByID("-1")).rejects.toThrow(NotFoundException);
      await expect(service.getByID("999")).rejects.toThrow(NotFoundException);
    });
  });
});
