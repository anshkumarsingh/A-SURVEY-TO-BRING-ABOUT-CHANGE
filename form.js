class Form {

    constructor() {
        this.input = createInput("Name");
        this.email = createInput("E-mail")
        this.button = createButton('Submit');
        this.greeting = createElement('h2');
        this.text = createElement('h1', "Lets Do A Survey On Our School Students");
        this.question1 = createElement('h3', "Q1. Do you think we need to start free lunch meals in our school canteen for the kids who are very poor?");
        this.radio = createRadio('h3');
        this.radio.option('Yes');
        this.radio.option('No');
        this.question2 = createElement('h3', "Q2. Will you be willing to contribute a small amount every month for this a program for some needy kids?");
        this.radio1 = createRadio('h3');
        this.radio1.option('Yes');
        this.radio1.option('No');
        this.question3 = createElement('h3', "Q3. How much you be willing to pay per month?");
        this.radio2 = createRadio('h3');
        this.radio2.option('₹100');
        this.radio2.option('₹50');
        
    }


    display() {
        this.input.position(670, 255)
        this.email.position(670, 200)
        this.button.position(700, 700)
        this.greeting.position(600, 105)
        this.text.position(600, 5)
        this.question1.position(500, 360)
        this.radio.position(600, 420)
        this.question2.position(500, 450)
        this.radio1.position(600, 510)
        this.question3.position(500, 540)
        this.radio2.position(600, 600)
       


        this.button.mousePressed(() => {
            User.input = this.input.value();
            User.email = this.email.value();
            peopleCount += 1;
            User.index = peopleCount;
            User.update();
            User.updateCount(peopleCount);
        });

    }
}