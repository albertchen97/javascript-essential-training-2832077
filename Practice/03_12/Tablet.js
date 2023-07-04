class Tablet {
  constructor(brand, width, length, brightness, hasStyllus) {
    this.brand = brand;
    this.dimensions = {
      tabletWidth: width,
      tablegLength: length,
    };
    this.brightness = brightness;
    this.hasStyllus = hasStyllus;
  }
  setBrand(newBrand) {
    this.brand = newBrand;
  }
  setDimensions(newWidth, newLength) {
    this.dimensions.tabletWidth = newWidth;
    this.dimensions.tablegLength = newLength;
  }
}

export default Tablet;
