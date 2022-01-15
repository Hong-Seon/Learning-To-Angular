export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: stirng, desc: string, imagePath: string) {
    this.name = name;
    this.description =  desc;
    this.imagePath = imagePath;
  }
}
