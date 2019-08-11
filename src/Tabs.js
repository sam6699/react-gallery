import React from 'react'

export class Tabs extends React.Component{

    constructor(props, context) {
        super(props, context);
        this.move=this.move.bind(this);
    }

    move(e){
        this.props.onChange(e.target.dataset.id);
    }

    render() {
        let i=-1;
        return(
            <div id="tabs">
                {
                    this.props.list.map((item)=>{
                        i++;
                        return(
                            <button key={i}  data-id={i} onClick={this.move} className={'tab'}>{i}</button>

                        )

                    })
                }
            </div>

        )
    }

}
export default Tabs;