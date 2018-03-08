import {createStore} from 'redux';

const incrementCount=({incrementby=1} ={})=>({
  type:'INCREMENT',
  incrementby
});



const store= createStore((state={count:0}, action)=>{
  switch(action.type)
  {
    case 'INCREMENT':

      return{
        count:state.count+action.incrementby
      };
    case 'DECREMENT':
      const decrementby=typeof action.decrementby==='number' ? action.decrementby:1;

      return{
        count:state.count-decrementby
      };
    case 'RESET':
      return{
        count:0
      };
    case 'SET':

      return{
        count:action.count
      };
    default:
      return state;
  }


});

store.dispatch(incrementCount({incrementby:5}))

const unsubscribe= store.subscribe(()=>{
  console.log(store.getState());

});

// store.dispatch({
//   type: 'INCREMENT',
//   incrementby:5
// });


// store.dispatch({
//   type: 'INCREMENT'
// });

store.dispatch({
  type: 'DECREMENT',
  decrementby:50
});

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type:'SET',
  count:1001
})


console.log(store.getState());
