



function WordMachineEmulator() 
{
    console.log("WORD MACHINE EMULATOR:");

    //Gets User Input From HTML Textbox
    let UserInput1 = document.getElementById("myText").value;
    let yo = "USER INPUT:";
    //document.getElementById("Input1").innerHTML = yo + UserInput1;
    let MainStack = UserInput1.split(", ");
    for(let i=0; i < MainStack.length; i++)
    {
        console.log("User Input-%i =", i+1, MainStack[i]);
    }

    console.log("--------------------------------------------------------------");

    //let UserInputsTEST = ["23 DUP 4 POP 5 DUP + DUP + -", "34 30 66 + yolo 70 +", "334 + 735 POP -", "5 6 + - 6 8 9"];
    let AnswerArrays = new Array();

    for(let i=0; i <= MainStack.length-1; i++) //Loops through the String of Array Sequence inputs from User
    {
        let newArray1 = MainStack[i].split(" ");
        let FinalArray = new Array();
        console.log("%i-User Input:", i+1, newArray1);

        for(let j=0; j <= newArray1.length-1; j++) //Parses Through every Value in Each Section 
        {
            
            if(newArray1[j] >= 0 || newArray1[j] <= 0) //Checks if its a Number
            {
                FinalArray.push(newArray1[j]);
                console.log("%i-Operation:", j+1, newArray1[j], "<-Push Onto Array");
            }
            else
            {
                //console.log("NOT INT");
                if(newArray1[j] === 'DUP') //DUPLICATE
                {
                    //console.log("Number DUPED:");
                    //let newArray3 = newArray1[j-1];
                    let newArray3 =FinalArray[FinalArray.length-1]
                    //console.log(newArray3);
                    FinalArray.push(newArray3);
                    console.log("%i-Operation:", j+1, newArray1[j], "<-Duplicate", newArray3, "and Push Onto Array");
                }
                else if(newArray1[j] === 'POP') //POP-OFF
                {
                    //console.log("Number POPPED");
                    let newArray3 = newArray1[j-1];
                    FinalArray.pop(newArray3);
                    console.log("%i-Operation:", j+1, newArray1[j], "<-Pop", newArray1[j-1], "off the Array");
                }
                else if(newArray1[j] === '+') //ADDITION
                {
                    if(FinalArray.length >= 2) //Error check for addition
                    {
                        let newArray3 = FinalArray[FinalArray.length-1];
                        var x = parseInt(newArray3);
                        let newArray4 = FinalArray[FinalArray.length-2];
                        var y = parseInt(newArray4);

                        FinalArray.pop(FinalArray[FinalArray.length-1]); //Pops off the old addition 
                        FinalArray.pop(FinalArray[FinalArray.length-2]);
                        let newArray5 = x + y;

                        if(newArray5.toString() === 'NaN')
                        {
                            FinalArray.push('ERROR');
                            console.log("ERROR");
                        }
                        else
                        {
                            console.log("%i-Operation:", j+1, newArray1[j], "<-Addition, Add", x.toString() , "and", y.toString(), "and Push Onto Array");
                            FinalArray.push(newArray5.toString());
                        }
                    }
                    else
                    {
                        console.log("%i-Operation:", "ERROR - Can't Add Numbers because not enough values");
                    }
                }
                else if(newArray1[j] === '-')
                {
                    if(FinalArray.length >= 2)
                    {   
                        let newArray3 = FinalArray[FinalArray.length-1];
                        var x = parseInt(newArray3);
                        let newArray4 = FinalArray[FinalArray.length-2];
                        var y = parseInt(newArray4);

                        FinalArray.pop(FinalArray[FinalArray.length-1]); //Pops off the old addition 
                        FinalArray.pop(FinalArray[FinalArray.length-2]); 
                        let newArray5 = Math.abs(x - y);
                        if(newArray5.toString() == 'NaN')
                        {
                            FinalArray.push('ERROR');
                            console.log("ERROR");
                        }
                        else
                        {
                            console.log("%i-Operation:", j+1, newArray1[j], "<-Subtraction, Subtract", x.toString() , "and", y.toString(), "and Push Onto Array");
                            FinalArray.push(newArray5.toString());
                        }
                    }
                    else
                    {
                        FinalArray.push('ERROR');
                        console.log("ERROR - Can't Subtract because not enough values");
                    }
                }
                else
                {
                    FinalArray.push('ERROR');
                    console.log("ERROR - Invalid Value");
                }
            }
            //console.log(FinalArray);
            
        }
        console.log(FinalArray);
        AnswerArrays.push(FinalArray.pop());
             
        console.log("--------------------------------------------------------------");
    }
    console.log("Answers:", AnswerArrays);

    document.getElementById("Input1").innerHTML = "Main Results - " + AnswerArrays;
    document.getElementById("Input2").innerHTML = " ";
    let list = document.getElementById("Input2");
    AnswerArrays.forEach((item, index) => 
    {   
            let Result = "User" + "Result-" + (index+1) + ": ";
            let p = document.createElement("p");
            p.innerText = Result + item;
            list.appendChild(p).innerHTML;
    });
    //document.getElementById("Input1").innerHTML = AnswerArrays;
}
