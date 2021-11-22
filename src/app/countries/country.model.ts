export class CountryModel {
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
  public subregion: string
  public capital: string
  public tld: string[]
  public currencies: string[]
  public languages: string[]
  public borders: string[]

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
    subregion: string,
    capital: string,
    tld: string[],
    currencies: string[],
    languages: string[],
    borders: string[]
  ) {
    this.flags = flags
    this.name = name
    this.population = population
    this.region = region
    this.subregion = subregion
    this.capital = capital
    this.tld = tld
    this.currencies = currencies
    this.languages = languages
    this.borders = borders
  }
}