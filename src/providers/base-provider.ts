import {
  FormattedAddressProps,
  GetGeographicAddressParams,
} from '../interfaces/geo-sanitizer';

export default interface BaseAddressProvider {
  getGeographyAddress: (
    address: GetGeographicAddressParams,
  ) => Promise<FormattedAddressProps | undefined>;
  getGeographyAddressById: (
    id: string,
  ) => Promise<FormattedAddressProps | undefined>;
  getGeographyAddressByCoordinates: (
    params: GetGeographicAddressParams,
  ) => Promise<FormattedAddressProps | undefined>;
}
