import {createStore} from "redux";

const dummyReducers=()=>{
    return "Alok"
}

const store = createStore(dummyReducers);

export default store;