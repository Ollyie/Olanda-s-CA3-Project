export class CreateBioDatumDto { 

    readonly firstName: string;
    readonly middleName?: string;
    readonly lastName: string;
    readonly dateOfBirth ?: Date;
    readonly nationality ?: string
    readonly countryOfBirth: string
    readonly stateOfBirth: string
    readonly townOfBirth: string
    readonly address ?: string
    readonly proffession: string
    readonly isActive ?: boolean;
  }