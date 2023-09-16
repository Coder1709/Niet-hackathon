import React from 'react'

export default function startup() {
  return (
    <div className='items-center align-baseline text-center '>
    <label for="cars">Choose a car:</label>

<select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
    
      
    </div>
  )
}
