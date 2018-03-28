class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  sendMail() {
    this.api.sendMail({
      body: 'Hello',
      to: this.email,
      attachement : null
    });
  }

  sendNotification() {
    this.api.sendNotification({msg: 'Hello'});
  }
  
  calculateAge() {
    console.log('your age is', 0);
  }
}
