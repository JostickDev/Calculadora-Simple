import React, { Fragment } from 'react';

const Display = (props) => {

    

    return ( 
        <Fragment>
             <div className="pantallaG">
            <div className="resultado">
                {
                    props.res !== "" ? (
                        <div>
                            {props.res}
                        </div>
                    ):(

                        props.datos.length > 0 ? (
                            <div>
                                {
                                    props.datos.map(item => 
                                        item
                                    )
                                }
    
                                {props.OP}
    
                                {
                                    props.datos2.map(item2 => 
                                        item2
                                    )
                                }
    
             
    
                            </div>
                        ) : (
                            <div>0</div>
                        )
                    )

                    
                    
                }
            </div>
        </div>
        </Fragment>
     );
}
 
export default Display;