import React , { useEffect } from 'react';
import './Cockpit.css';

const Cockpit = (props) => {

  useEffect(() => {
    console.log('[cockpit.js] useEffect');
    // setTimeout(() =>{
    //   alert('Saving data to cloud');
    // }, 1000);
    return (() => {
        console.log('[cockpit.js] useEffect cleanup process');
    });
  }, []);

  useEffect(() => {
      console.log('[cockpit.js] 2nd useEffect');
    return (() => {
      console.log('[cockpit.js] 2nd useEffect cleanup process');
    });
  });

  const assignedClasses =[];
  if(props.personsLength <= 2){
      assignedClasses.push('red');
  }
  if(props.personsLength <= 1){
      assignedClasses.push('bold');
  }

  let btnClass = '';
  if(props.showPersons){
      btnClass = 'Red';
  }


  return(
    <div className="Cockpit">
      <h1>{props.appTitle}</h1>
      <p className = {assignedClasses.join(' ')}> This is really working .. </p>
      <button className={btnClass}
        onClick ={props.toggled} > Toggle Persons </button>
    </div>
  );
};

export default React.memo(Cockpit);
