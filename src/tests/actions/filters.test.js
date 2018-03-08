import {setStartDate, setEndDate,setTextFilter} from '../../actions/filters';
import moment from 'moment';


test('T1', ()=>{
  const action =setStartDate(moment(0));
  expect(action).toEqual({
    type:'SET_START_DATE',
    startDate:moment(0)
  });
});

test('T2',()=>{
  const action=setEndDate(moment(0));
  expect(action).toEqual({
    type:'SET_END_DATE',
    endDate:moment(0)
  });
})

test('T3', ()=>{
  const action=setTextFilter('something');
  const text='something';
  expect(action).toEqual({
    type:'SET_TEXT_FILTER',
    text
  })
})
