import React from "react";
import './App.css'

export class OrderTable extends React.Component{
  constructor(props, context) {
        super(props, context);
        this.state = {
            orderList:this.props.orderList
        };
        this.elements=this.elements.bind(this);
        this.dec=this.dec.bind(this);
        this.inc=this.inc.bind(this);
  }
    inc(value,key){
        this.props.inc(key);
    }
    dec(value,key){
      this.props.dec(key);
    }

      elements() {
         let rows;
         if (this.state.orderList.size!==0){
             rows = Array.from(this.state.orderList,([key,value])=>{
                 return <tr key={key.id}>
                                         <td>
                                             {key.description}
                                         </td>
                                         <td>
                                             {value}
                                         </td>

                     <td>
                         <button onClick={(event) => this.inc(event,key)} className={'add-button'}>+</button>
                         <button onClick={(event)=>this.dec(event,key)} className={'remove-button'}>-</button>
                     </td>
                 </tr>
             });


         }

         
         return(
              rows
        )
    }


    render() {
      return(
          <table id="order-table">
              <thead>
                <tr>
                  <td>Description</td>
                  <td>Quantity</td>
                  <td>Operations</td>
                </tr>
              </thead>
              <tbody>
              {
                  this.elements()
              }

              </tbody>






          </table>


      )
  }


}


export default OrderTable;