import React, { useContext, useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas'
import { SidebarContext } from './../../contexts/SimpleSidebar';
import { StandardSpace } from './../';

const StandardSidebar = () => {
    const { open, setOpen } = useContext(SidebarContext);
    const [snippet, setSnippet] = useState('');

    useEffect(() => {
        if (open && document.getElementById('svg-sample')){
            setSnippet(document.getElementById('svg-sample').outerHTML);
            navigator.clipboard.writeText(document.getElementById('svg-sample').outerHTML).then(() => {
                console.log('Done copy!');
                // navigator.clipboard.readText().then(t => console.log("T is ::: ", t));
            });
        }
    }, [open]);

    useEffect(() => {
        const snip = document.getElementById('svg-sample');
        
        if (snip){
            setSnippet(snip.outerHTML);
        }
    }, []);

    return (
        <Offcanvas show={open} onHide={() => setOpen(false)}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Copied successfully!</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="sb-label">The following snippet has been copied into the clipboard</div>
                <StandardSpace height={15} />
                <div className="sb-snippet">
                    <code id="snip-area" className="sb-code">
                        {snippet}
                    </code>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default StandardSidebar;