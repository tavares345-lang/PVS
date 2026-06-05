export type VehicleCategory = 'executive_sedan' | 'premium_suv';

export interface Vehicle {
  id: VehicleCategory;
  name: string;
  className: string;
  passengers: number;
  luggage: number;
  description: string;
  features: string[];
  image: string;
}

export interface BookingFormState {
  serviceType: string;
  name: string;
  origin: string;
  destination: string;
  date: string;
  time: string;
  passengers: number;
  luggage: number;
  vehicleCategory: VehicleCategory;
  observations: string;
  flightNumber?: string;
  tripType?: string;
  bilingualDriver?: boolean;
  babySeat?: boolean;
  faturamentoPJ?: boolean;
}

export interface Testimonial {
  name: string;
  company?: string;
  text: string;
  rating: number;
}
