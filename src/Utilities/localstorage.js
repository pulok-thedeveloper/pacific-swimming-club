// use local storage to manage cart data
const addToDb = drill =>{
    let exerciseCart = {};

    //get the exercise cart from local storage
    const storedCart = localStorage.getItem('exercise-cart');
    if(storedCart){
        exerciseCart = JSON.parse(storedCart);
    }

    // add time
    const quantity = exerciseCart[drill.id];
    if(quantity){
        const newQuantity = quantity + parseInt(drill.time);
        exerciseCart[drill.id] = newQuantity;
    }
    else{
        exerciseCart[drill.id] = parseInt(drill.time);
    }
    localStorage.setItem('exercise-cart', JSON.stringify(exerciseCart));
}

const getStoredCart =() =>{
    let exerciseCart = {};

    //get the exercise cart from local storage
    const storedCart = localStorage.getItem('exercise-cart');
    if(storedCart){
        exerciseCart = JSON.parse(storedCart);
    }

    return exerciseCart;
}

export {
    addToDb,
    getStoredCart
}