class Security {

    constructor(){

        // Add code to create the input and button elements
        this.access1 = createInput("Code1")
        this.access1.position(100,99);
        this.access1.style('background','white')

        this.button1 = createButton('Check')
        this.button1.position(100,120)
        this.button1.style('background','lightgrey')

        authenticate(actualCode,enteredCode){
            if(actualCode === enteredCode)
                return true
            else
                return false
        }

        


    }

    display(){

        

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        // Add code to make the buttons function as expected


    }
}