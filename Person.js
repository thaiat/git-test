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

  addMethod1() {
    console.log('method 1');
  }

  addMethod2() {
    console.log('method 2');
  }

  addMethod3() {
    console.log('method 3');
  }

  addMethod4() {
    console.log('method 3');
  }
}

