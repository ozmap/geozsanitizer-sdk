import {
  FormattedAddressProps,
  GetGeographicAddressParams,
} from './interfaces/GeoSanitizer';

export default class GeOZsanitizerSdk {
  public static async getGeographyAddress(
    address: GetGeographicAddressParams,
  ): Promise<FormattedAddressProps> {
    // This is a mock implementation

    return {} as FormattedAddressProps;
  }

  public static async getGeographyAddressById(
    id: string,
  ): Promise<FormattedAddressProps> {
    // This is a mock implementation

    return {} as FormattedAddressProps;
  }

  public static async getGeographyAddressByCoordinates(
    params: GetGeographicAddressParams,
  ): Promise<FormattedAddressProps> {
    const { latitude, longitude, googleApiKey } = params;
    // This is a mock implementation

    return {} as FormattedAddressProps;
  }
}
