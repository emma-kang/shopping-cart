/** Administrator mode page */
import React, { Component } from 'react';
import axios from 'axios';

export default class Admin extends Component{
    constructor(props){
        super(props);
        this.state = {
            pdData: [],
            objId: '',
            form: {
                pdId: '',
                pdName: '',
                pdUrl: '',
                qty: 0,
                price: 0,
                desc: ''
            },
            intervalIsSet: false
        }

        this.getProductData = this.getProductData.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
        this.delProduct = this.delProduct.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    // fetch all existing data 
    componentDidMount() {
        this.getProductData();
        if(!this.state.intervalIsSet) {
            let interval = setInterval(this.getProductData, 1000);
            this.setState({
                intervalIsSet: interval
            });
        }
    }

    // always kill a process everytime we are done using it 
    componentWillUnmount() {
        if(this.state.intervalIsSet){
            clearInterval(this.state.intervalIsSet);
            this.setState({
                intervalIsSet: null
            });
        }
    }

    // get all Data from database 
    getProductData = () => {
        fetch('http://localhost:8080/api/products')
        .then(res => res.json())
        .then(data => {
            this.setState({
                pdData: data
            })
        });
    };

    // add Product data to databasse
    addProduct = (e) => {
      axios.post('http://localhost:8080/api/products', {
          id: this.state.form.pdId,
          name: this.state.form.pdName,
          picURL: this.state.form.pdUrl,
          quantity: this.state.form.qty,
          price: this.state.form.price,
          description: this.state.form.desc
      }).then((res) => {
          console.log(res);
      }).catch((err) => {
          console.log(err);
      })
      
      e.preventDefault();
    }
    
    // update Product data to database
    updateProduct = () => {
        // using params as ObjectId of MongoDB 
        axios.put(`http://localhost:8080/api/products/${this.state.objId}`, {
                id: this.state.form.pdId,
                name: this.state.form.pdName,
                picURL: this.state.form.pdUrl,
                quantity: this.state.form.qty,
                price: this.state.form.price,
                description: this.state.form.desc
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }

    // delete Product data from database
    delProduct = (product) => {
        axios.delete(`http://localhost:8080/api/products/${product}`)
        .then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }

    handleChange = (e) => {
        const target = e.target;
        const name = target.name; 
        const value = target.value;
        
        // ...this.state.form to prevent warning controlled or uncontrolled text input
        this.setState({
            form: {
                ...this.state.form,
                [name]: value 
            }
        });
    } 

    handleClick = (e) => {
        const obj = e.target.value;
        // find data which is same with object Id
        let result = this.state.pdData.filter((el) => el._id === obj);

        // set state as the result values 
        this.setState({
                objId: result[0]._id,
                form: {
                    pdId: result[0].id,
                    pdName: result[0].name,
                    pdUrl: result[0].picURL,
                    qty: result[0].quantity,
                    price: result[0].price,
                    desc: result[0].description
                }
        })

        console.log(this.state.form.pdId);

    }

    render() {
        let pdList = this.state.pdData.map((el, index) => {
            return <div key={index}><span className="list">ID: {el.id}, Name: {el.name} </span>
                <span className="btn-group mx-0"><button className="btn btn-secondary" value={el._id} onClick={this.handleClick}>Select</button>
                <button className="btn btn-danger" onClick={() => this.delProduct(el._id)}>Delete</button></span>
                </div>
        });
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {/* input name and state key name should be same  */}
                        <form onSubmit={this.addProduct}>
                            <div className="form-group">
                                <label htmlFor="product-id">Product Id</label>
                                <input type="text" className="form-control" aria-describedby="id-help" name="pdId" value={this.state.form.pdId} onChange={this.handleChange}/>
                                <small id="id-help" className="form-text text-muted">Must be integer</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="product-name">Product Name</label> 
                                <input type="text" className="form-control" name="pdName" value={this.state.form.pdName} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="product-pic">Photo URL</label>
                                <input type="text" className="form-control" name="pdUrl" value={this.state.form.pdUrl} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="product-qty">Qty</label> 
                                <input type="number" className="form-control" name="qty" value={this.state.form.qty} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="product-price">Price</label> 
                                <input type="number" className="form-control" name="price" value={this.state.form.price} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="product-desc">Description</label>          
                                <input type="text" className="form-control" name="desc" value={this.state.form.desc} onChange={this.handleChange}/>
                            </div>
                            <button className="btn btn-primary" type="submit">Add</button>
                            <button className="btn btn-info ml-2" onClick={this.updateProduct}>Update</button>
                        </form>
                    </div>
                    <div className="col-6">
                        {pdList}
                    </div>
                </div>
            </div>
        )
    }
}
