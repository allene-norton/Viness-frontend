import React from 'react';
import vlogo from '../images/vlogo_small_1.png'
const Modal = props => {

    const divStyle = {
        display: props.displayModal ? 'block' : 'none'
    };
    function closeModal(e) {
        e.stopPropagation()
        props.closeModal()
    }
    return (
        <div
            className="modal"
            onClick={closeModal}
            style={divStyle} >
            <div
                className="modal-content"
                onClick={e => e.stopPropagation()} >
                <span
                    className="close"
                    onClick={closeModal}>&otimes;
             </span>
                <img src={vlogo} alt='viness logo' style={{ paddingLeft: '30px;' }} />
                <p>Viness provides bottle recommendations and wine pairings for your chosen ingredients,
                as well as recipes for dishes that pair with your favorite varietals. </p> <p>
                Save bottles to your profile, and see reviews and comments from other Viness users. </p>
                 
                 <p style={{fontSize: 'small'}}>Created by Allene Norton, 2020</p>
            </div>
        </div>
    );
}
export default Modal;