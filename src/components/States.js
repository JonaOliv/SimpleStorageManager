import React from "react";

function States() {
    const states = ["Borrowed","To Waste", "Wasted", "In Inventory"]

    const listStates = states.map((state)=> 
        <option value={state.toString()}>{state}</option>
    );

    return (<div>  
        <select>
            {listStates}
        </select>
    </div>);
}
/*
there are 4 states:
Borrowed: The object was borrowed and it can be returned. Example: A lantern, pincers.
To Waste: The object was borrowed and it can be returned if there is something from it yet. Example: paper, stickers.
Wasted: The object can not be borrowed. It needs to be bought in the store.
In Inventory: The object can be borrow. It is currently in the inventory.
*/
export default States;