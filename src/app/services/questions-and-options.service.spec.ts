import { TestBed } from '@angular/core/testing';

import { QuestionsAndOptionsService } from './questions-and-options.service';

describe('QuestionsAndOptionsService', () => {
  let service: QuestionsAndOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionsAndOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
