import {
  GetGeographicAddressParams,
  FormattedAddressProps,
} from '../interfaces/geo-sanitizer';
import { fakeAddresses } from '../utils/fake-addresses';
import BaseAddressProvider from './base-provider';

export default class FakeAddressProvider implements BaseAddressProvider {
  public getGeographyAddress(
    address: GetGeographicAddressParams,
  ): Promise<FormattedAddressProps> {
    const totalAddresses = fakeAddresses.length;
    const randomIndex = Math.floor(Math.random() * totalAddresses);
    const randomAddress = fakeAddresses[randomIndex];
    return Promise.resolve(randomAddress);
  }

  public getGeographyAddressById(
    id: string,
  ): Promise<FormattedAddressProps | undefined> {
    const address = fakeAddresses.find((address) => address.id === Number(id));
    return Promise.resolve(address);
  }

  public getGeographyAddressByCoordinates(
    params: GetGeographicAddressParams,
  ): Promise<FormattedAddressProps> {
    const totalAddresses = fakeAddresses.length;
    const randomIndex = Math.floor(Math.random() * totalAddresses);
    const randomAddress = fakeAddresses[randomIndex];
    return Promise.resolve(randomAddress);
  }
}
