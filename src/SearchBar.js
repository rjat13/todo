import React, {useState} from "react";

export default function SearchBar({onSubmit}) {
    const [val, setVal] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        val.length > 2 && onSubmit(val)
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" className="input" value={val} onChange={(e) => setVal(e.target.value)} />
            { (val.length > 0 && val.length < 3 ) && <p className="error">Required min 3 character.</p>}
        </form>
    );
}
