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

  callPhone() {
    console.log('call phone');
  }

  calculateAge() {
    console.log('your age is', 0);
  }

}

