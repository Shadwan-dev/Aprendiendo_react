import React, {useState} from 'react';

export default function MainButton() {

    const [value,  setValue] = useState(false);

    const onClickHandler = () => {
        setValue(!value);
        console.log('clicked:', value);
    }

    if(value) {
        return (
            <button type="button" className="btn btn-primary"
                    onClick={onClickHandler}>
                button 1
            </button>
        )
    } else {
        return (
            <button className="btn btn-secondary"
                        onClick={onClickHandler}>
                button 2
            </button>
        )
    }
}
