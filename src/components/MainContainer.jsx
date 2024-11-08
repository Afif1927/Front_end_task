import Column from './column';

const header = [
  { title: "Incomplete" , number: 0},
  { title: "To Do" , number: 10},
  { title: "Doing" , number: 6},
  { title: "Completed" , number: 11},
  { title: "Under Review" , number: 8},
  { title: "Over View" , number: 2},
  { title: "Public view" , number: 16},
  { title: "Only me" , number: 12},
  { title: "Logistics" , number: 4},
  { title: "Stats" , number: 9},
 ]

const MainContainer = () => {
  return (
    <div className='flex gap-4  bg-white h-screen p-4'>
      {header.map(({title,number}) => (
        <Column title={title} number={number} key={title}/>
      ))}
    </div>
  )
}

export default MainContainer;


