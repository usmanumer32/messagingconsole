import { PackageDetailsModel } from './packagedetails.model';

describe('PackageDetailsModule', () => {
  let packageDetailsModel: PackageDetailsModel;

  beforeEach(() => {
    packageDetailsModel = new PackageDetailsModel();
  });

  it('should create an instance', () => {
    expect(packageDetailsModel).toBeTruthy();
  });
});
