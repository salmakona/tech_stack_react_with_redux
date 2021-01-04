export default (state = null, action) => {

    console.log("Salma");

    console.log(state);

    console.log("Salma");


    switch(action.type){
        case 'select_library':
            return action.payload
        default:
            return state;
    }
    
  };
  