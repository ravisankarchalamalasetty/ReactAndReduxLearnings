export const addInputs = (input1,input2) => {
    // logic with axios to make ajax call
    //Business logic
    let output=input1+input2
    return {
        type: "ADD_INPUTS",
        output: output 
    }
}

export const subtractInputs = (input1,input2) => {
    let output=input1-input2
    return {
        type: "SUBTRACT_INPUTS",
        output: output 
    }
}