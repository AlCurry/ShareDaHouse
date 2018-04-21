import React, { Component } from "react";
import axios from "axios";
import AddForm from './AddForm';
import HomeList from './HomeList';
import style from './style';


class AddBox extends Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.loadHomesFromServer = this.loadHomesFromServer.bind(this);
        this.handleHomeSubmit = this.handleHomeSubmit.bind(this);
        this.handleHomeDelete = this.handleHomeDelete.bind(this);
        this.handleHomeUpdate = this.handleHomeUpdate.bind(this);
    }
    loadHomesFromServer() {
        axios.get(this.props.url)
            .then(res => {
                this.setState({ data: res.data });
            })
    }

    handleHomeSubmit(home) {
        let homes = this.state.data;
        home.id = Date.now();
        let newHome = homes.concat([home]);
        this.setState({ data: newHome });
        axios.post(this.props.url, home)
            .catch(err => {
                console.error(err);
                this.setState({ data: homes });
            });
    }

    handleHomeDelete(id) {
        axios.delete(`${this.props.url}/${id}`)
            .then(res => {
                console.log("Home Deleted");
            })
            .catch(err => {
                console.error(err);
            });
    }
    handleHomeUpdate(id, home) {
        //sends the home id and new home to db
        axios.put(`${this.props.url}/${id}`, home)
            .catch(err => {
                console.log(err);
            })
    }
    componentDidMount() {
        this.loadHomesFromServer();
        setInterval(this.loadHomesFromServer, this.props.pollInterval);
    }
    render() {
        return (
            <div style={style.AddBox}>
                <h2 style={style.title}>Homes:</h2>
                <HomeList
                    onHomeDelete={this.handleHomeDelete}
                    onHomeUpdate={this.handleHomeUpdate}
                    data={this.state.data} />
                <AddForm onHomeSubmit={this.handleHomeSubmit} />
            </div>
        )
    }
}
export default AddBox;