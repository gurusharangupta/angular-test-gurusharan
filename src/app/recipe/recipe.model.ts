export class Recipe {

  name: string;
  type: string;
  imagePath: string;

  constructor(
    name: string,
    type: string,
    imagePath: string) {
      this.name = name;
      this.type = type;
      this.imagePath = imagePath;
     }

}