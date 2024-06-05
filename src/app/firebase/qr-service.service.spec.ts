import { TestBed } from "@angular/core/testing";

import { QrService } from "./qr-service.service";

describe("QrServiceService", () => {
  let service: QrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QrService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
