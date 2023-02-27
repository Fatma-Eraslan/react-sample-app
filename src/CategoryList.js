import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  // constructor(props){ gerek yok buna, this.props yazıp direk ulaşabiliyoruz
  //   super(props);
  //   state:{}
  // }
  // constructor(props) {
  //   super(props);
  state = {
    categories: [
      // { categoryId: 1, categoryName: "Beverages" },
      // { categoryId: 2, categoryName: "Condiments" },
    ]
  };

  componentDidMount(){
    this.getCategories();
  }

getCategories=()=>{
  fetch("http://localhost:3000/categories")
  .then(response=>response.json())// gelen response u json a döndür.
  .then(data=>this.setState({categories:data}));
}

  // }

  // changeCategory = (category) => {
  //   this.setState({ currentCategory: category.categoryName });
  // };
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <ListGroup>
          {this.state.categories.map(category=> (
              <ListGroupItem active={category.categoryName===this.props.currentCategory?true:false}
               // onClick={() => this.changeCategory(category)} artık aşağıda ki gibi
               onClick={()=>this.props.changeCategory(category)}
                key={category.id}
              >
                {category.categoryName}
              </ListGroupItem>
            )) //döngü
          }
        </ListGroup>
         <h4>{this.props.currentCategory}</h4> {/*artık state değil de props kullanacağız */}
      </div>
    );
  }
}
