import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h1>Terms and Condition</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime optio nulla nostrum placeat aliquid, nesciunt nam libero maiores. Ea, esse beatae. Qui autem dolore reprehenderit voluptas, in aut. Consectetur, doloremque.</p>
            <p>Go Beck to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;