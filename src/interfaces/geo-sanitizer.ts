export interface GetGeographicAddressParams {
  street: string;
  number: string;
  plusCode: string;
  zipCode: string;
  googleApiKey: string;
}

export interface GetGeographicAddressByCoordinatesParams {
  latitude: number;
  longitude: number;
  googleApiKey: string;
}

export interface FormattedAddressProps {
  city: string | null;
  country: string | null;
  fullAddress: string | null;
  inputClient: string | null;
  lat: string | null;
  lng: string | null;
  number: string | null;
  plusCode: string | null;
  postcode: string | null;
  precision: null;
  processingStatus: string | null;
  quarter: string | null;
  scoring: string | null;
  state: string | null;
  street: string | null;
  streetName: string | null;
  streetType: string | null;
  zipCode: string | null;
  zone: string | null;
}

export interface FormattedAddress extends FormattedAddressProps {
  id: number;
}
