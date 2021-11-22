export class CountriesModel {
  public flags: {
    png: string
    svg: string
  }
  public name: {
    official: string
    common: string
  }
  public population: number
  public region: string
  public capital: string

  constructor(
    flags: {
      png: string
      svg: string
    },
    name: {
      official: string
      common: string
    },
    population: number,
    region: string,
    capital: string
  ) {
    this.flags = flags
    this.name = name
    this.population = population
    this.region = region
    this.capital = capital
  }
}