import * as React from "react";
import './App.css'

export class Products extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.select=this.select.bind(this);
        this.state={
            page : this.props.page,
            catList:[]
        };
    }
     select(e){
       this.props.onChange(e.currentTarget.dataset.img_id);
    }



    render() {
        let counter=-1;
        return(
            <div id = "grid">
                {
                    this.props.list.map((item)=>{
                        counter++;
                        return(
                            <img src={item.urls.raw} alt="" data-img_id={counter} onClick={this.select} className={"product"} key={counter}/>
                            )
                    })
                },


            </div>
        );
    }

}
export default Products;