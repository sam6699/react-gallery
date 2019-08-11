import React from 'react';
import './App.css';
import ajax from "./service/Service";
import Products from './Products'
import OrderTable from "./OrderTable";
import Tabs from "./Tabs";
import {ProductImage} from "./ProductImage";
class App extends React.Component{
  constructor(props, context) {
        super(props, context);
        this.state = {
            list : [],
            order:new Map(),
            page:0,
            url:''
        };
        this.onChangeList=this.onChangeList.bind(this);
        this.moveTab=this.moveTab.bind(this);
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
  }
  async componentDidMount() {
      const data = await ajax.fetch();
      this.setState({list: data});
        console.log(data);
  }


  moveTab(nextPage){
      this.setState(function (prevState) {
          return {
              page:nextPage
          }
      });
        console.log("setted page "+this.state.page);
  }

  onChangeList(item){
      let temp = this.state.order;

      if (isNaN(temp.get(this.state.list[item])))
      {
          // console.log(temp.get(this.state.list[item]));
            temp.set(this.state.list[item],1);
      }
   else{
          let counter = temp.get(this.state.list[item]);
          // console.log(counter);
          counter++;
          temp.set(this.state.list[item],counter);

      }

      this.setState({
         order : temp,
          url:this.state.list[item].urls.raw
      });
  }

  increment(item){
      let temp = this.state.order;
      let cnt = temp.get(item);
      cnt++;
      temp.set(item,cnt);
      this.setState({
          order:temp
      })}
  decrement(item){
        let temp = this.state.order;
        let cnt = temp.get(item);
        cnt--;
        if (cnt===0)
            temp.delete(item);
        else
            temp.set(item,cnt);

        this.setState({
            order:temp
        })
   }


    render() {
        return (
            <div id="container">

                <OrderTable orderList={this.state.order}
                            inc={this.increment} dec={this.decrement}
                />
                <Products list={this.state.list}  onChange={this.onChangeList} page={this.state.page}/>
                <ProductImage page={this.state.page} list={this.state.list} url={this.state.url}/>
            </div>
        );
  }
}


export default App;
