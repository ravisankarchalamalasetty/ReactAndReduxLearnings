
import {addInputs,subtractInputs} from '../actions/calculatorActions'

describe('>>>A C T I O N --- Test calculatorActions',()=>{
    it('+++ actionCreator addInputs', () => {
        const add = addInputs(10,20)
        expect(add).toEqual({type:"ADD_INPUTS",output:30})
    });

    it('+++ actionCreator subtractInputs', () => {
        const subtract = subtractInputs(30,10)
        expect(subtract).toEqual({type:"SUBTRACT_INPUTS",output:20})
    });
});
//***********************************************************
