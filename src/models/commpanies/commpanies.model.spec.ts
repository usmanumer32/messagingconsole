import { CommpaniesModel } from './commpanies.model';

describe('CommpaniesModule', () => {
  let commpaniesModel: CommpaniesModel;

  beforeEach(() => {
    commpaniesModel = new CommpaniesModel();
  });

  it('should create an instance', () => {
    expect(commpaniesModel).toBeTruthy();
  });
});
