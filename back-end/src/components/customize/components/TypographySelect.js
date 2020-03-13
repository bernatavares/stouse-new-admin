import React, { Component } from 'react'

class TypographySelect extends Component {
    
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        const { title, backgroundColor, fontType, fontFamily } = this.props
        return (
            <div style={{ padding: '10px 20px', backgroundColor: backgroundColor}}>
                <p style={{fontSize:'140%', color:'black'}}> <b> {title} </b> </p>
                <div className="row" style={{ margin: "30px 1px", padding:"30px 30px", border: '1px solid #D8D8D8', borderRadius:'1%' }}>
                    <div className="col-sm-6" >
                        <p style={{fontSize: '180%', color: 'black'}}><b>{fontFamily}</b></p>
                        <p style={{color: 'black', marginTop: '-13px'}}>&nbsp;{fontType}</p>
                    </div>
                    <div className="col-sm-6" style={{float:'right'}}>
                        <button className="btn btn-primary col-sm-6" style={{float:'right', marginTop: '16px'}}>Change</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-8">
                        <p style={{color:'black'}}><b>Heading base size </b> </p>
                        
                        <input 
                            type="range" 
                            min="1" max="100" 
                            value="50" className="slider col-sm-8"  
                            id="myRange" 
                            style={{marginTop: '-10px'}}/>
                        <div className="col-sm-4">
                            26px
                        </div>
                        
                    </div>
                </div>
                <div className="row" style={{marginTop: '30px'}}>
                    <div className="col-sm-12 col-md-6">
                        <button className="btn btn-secondary col-sm-6 "> Save </button>
                        <button 
                            className="btn btn-light col-sm-6" 
                            style ={{backgroundColor: "white", color: "rgb(187, 187, 187)", textTransform: "none"}} 
                        > Reset Changes </button>
                    </div>
                </div>
            </div>

        )
    }
};

export default TypographySelect;