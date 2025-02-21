import {
  FormattedAddressProps,
  GetGeographicAddressParams,
} from './interfaces/geo-sanitizer';
import BaseAddressProvider from './providers/base-provider';
import FakeAddressProvider from './providers/fake-address.provider';

export default class GeOZsanitizerSdk {
  protected provider: BaseAddressProvider;
  constructor() {
    // This is a mock implementation
    this.provider = new FakeAddressProvider();
  }

  public async getGeographyAddress(
    address: GetGeographicAddressParams,
  ): Promise<FormattedAddressProps | undefined> {
    // This is a mock implementation

    return this.provider.getGeographyAddress(address);
  }

  public async getGeographyAddressById(
    id: string,
  ): Promise<FormattedAddressProps | undefined> {
    // This is a mock implementation

    return this.provider.getGeographyAddressById(id);
  }

  public async getGeographyAddressByCoordinates(
    params: GetGeographicAddressParams,
  ): Promise<FormattedAddressProps | undefined> {
    return this.provider.getGeographyAddressByCoordinates(params);
  }
}
