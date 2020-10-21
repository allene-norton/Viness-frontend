import React from 'react';
import vlogo from '../images/vlogo_s_100.png'
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
                <img src={vlogo} alt='viness logo' style={{ height: '65px'}} /> <br />
                <p>Viness provides bottle recommendations and wine pairings for your chosen ingredients,
                as well as recipes for dishes that pair with your favorite varietals. </p> <p>
                Save bottles to your profile, and see reviews and comments from other Viness users. </p>
                 <br />
                 <p style={{fontSize: 'small'}}>A. Norton 2020</p>
            </div>
        </div>
    );
}
export default Modal;