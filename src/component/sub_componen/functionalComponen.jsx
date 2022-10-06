import { useState } from 'react';
import './Style.css';

const FunctionComponen = ({ nama }) => {
  const [value, setValue] = useState(0);

  const plusHendler = () => {
    setValue(value + 1);
  };

  const res = nama.map((element) => {
    return (
      <li key={element.toString()} style={{ color: 'red' }}>
        {element}
      </li>
    );
  });

  return (
    <div>
      <div className="container">
        <div>
          <h5> state in functionalComponen</h5>
          <p>
            value ditambahkan : <span style={{ color: 'red' }}>{value}</span>
          </p>
          <button onClick={plusHendler}>klick value + </button>
        </div>
        <br />
        <h5>props in functionalComponen</h5>
        <ul>{res}</ul>
      </div>
    </div>
  );
};

export default FunctionComponen;
