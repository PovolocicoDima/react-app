import './Button.css';
import { useState } from 'react';

function Button() {
	const [state, setState] = useState({
		age: 31
	});

	const clicked = () => {
		state.age += 1;
		setState({...state});
		console.log(state);
	};

	return (
		<button onClick={clicked} className='button accent'>{state.age}</button>
	);
}

export default Button;