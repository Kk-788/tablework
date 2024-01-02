import { useState } from 'react';

export default function UseStateObject() {

  const [values, setValues] = useState({
    a: 1,
    b: 2,
    c: 3
  })

  function handleValueChange(e) {
    setValues({
      ...values,
      [e.target.name] : e.target.value
    })
  }

  return(
    <>
      <label>
        a:
        <input name="a" value={values.a} onChange={handleValueChange} />
      </label>
      <br />

      <label>
        b:

        <input name="b" value={values.b} onBlur={handleValueChange} />
      </label>
      <br />

      <label>
        c:
        <input name="c" value={values.c} onChange={handleValueChange} />
      </label>
      <br />

      <h2>a: {values.a} <br/> b: {values.b} <br/> c: {values.c}</h2>
    </>
  )

}