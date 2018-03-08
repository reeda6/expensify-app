import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should set up removeExpense action object',()=>{
  const action=removeExpense({id:'123abc'});
  expect(action).toEqual({type:'REMOVE_EXPENSE',
id:'123abc'})
})

test('editExpense',()=>{
  const action=editExpense('123abc', 'hello');
  expect(action).toEqual({ id:'123abc', type:'EDIT_EXPENSE',updates: 'hello'});
})

test('should set up add expense obj w provided values',()=>{
  const expenseData={
    description:'rent',
    amount:300,
    createdAt:1000,
    note:'this was last months rent'
  }
  const action =addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id:expect.any(String)
    }
  })
})

test('addE w default',()=>{
  const action=addExpense();
  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense:{
    id:expect.any(String),
    description:'',
    note:'',
    amount:0,
    createdAt:0
  }})
})
