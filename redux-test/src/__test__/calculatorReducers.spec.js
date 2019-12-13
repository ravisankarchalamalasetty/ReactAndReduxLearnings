import calculatorReducers from '../reducers/calculatorReducers'

describe('>>>R E D U C E R --- Test calculatorReducers',()=>{
    it('Reducer for ADD_INPUT', () => {
        let state = {output:500}
        state = calculatorReducers(state,
               {type:"ADD_INPUTS",payload:{input1:250,input2:250}})
        expect(state).toEqual({output:500})
    });
    it('Reducer for SUBTRACT_INPUT', () => {
        let state = {output:0}
        state = calculatorReducers(state,
             {type:"SUBTRACT_INPUTS",payload:{input1:250,input2:250}})
        expect(state).toEqual({output:0})
    });

});
  //  npm run test 
  // npm run  test --  --verbose
  // npm test -- --coverage 

//*****************************************