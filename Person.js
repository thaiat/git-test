class Person {
  constructor(firstname, lastname, weight, height) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.height = height;
    this.weight = weight;
  }

  getWeithAndHeight() {
    return {
      weight: this.weight,
      height: this.height
    };
  }
}
