import React from 'react';
import { Window } from '@progress/kendo-react-dialogs';
import Button from '../Button';
import "./Popup.scss";

function Popup (props) {
    const { visible, closeDialog } = props; 
        
    return (
        <div>            
            {visible &&
                <Window className="PopupWindow" title={"Add/Edit blog post"} onClose={closeDialog} initialHeight={370}>
                    <form className="k-form">
                        <fieldset>                                            
                            <label className="k-form-field">
                                <span>Title</span>
                                <input className="kk-textbox" type="text" required placeholder="Title of the post" />
                            </label>
                            <label className="k-form-field">
                                <span>Text</span>                                                
                                <textarea className="kk-textarea" placeholder="Text of the post" ></textarea>
                            </label>
                        </fieldset>

                        <div className="text-right">
                            <Button type="submit" label="Post" /> 
                            <Button label="Cancel" click={closeDialog} />
                        </div>
                    </form>
            </Window>}
        </div>
    )
}

export default Popup
