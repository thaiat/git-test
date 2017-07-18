class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  sendMail() {
    this.api.sendMail({
      body: 'Hello',
      to: this.email
    });
  }
}