import React, { Component } from 'react';
import style from './style';
import marked from 'marked';


class UDHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toBeUpdated: false,
            name: '',
            address: '',
            region: '',
            start: '',
            last: '',
            bedrooms: '',
            bathrooms: ''

        };
        this.deleteHome = this.deleteHome.bind(this);
        this.updateHome = this.updateHome.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleRegionChange = this.handleRegionChange.bind(this);
        this.handleStartChange = this.handleStartChange.bind(this);
        this.handleLastChange = this.handleLastChange.bind(this);
        this.handleBedroomsChange = this.handleBedroomsChange.bind(this);
        this.handleBathroomsChange = this.handleBathroomsChange.bind(this);
        this.handleHomeUpdate = this.handleHomeUpdate.bind(this);
    }
    updateHome(e) {
        e.preventDefault();
        this.setState({ toBeUpdated: !this.state.toBeUpdated });
    }
    handleHomeUpdate(e) {
        e.preventDefault();
        let id = this.props.uniqueID;
        let name = (this.state.name) ? this.state.name : null;
        let address = (this.state.address) ? this.state.address : null;
        let region = (this.state.region) ? this.state.region : null;
        let start = (this.state.start) ? this.state.start : null;
        let last = (this.state.last) ? this.state.last : null;
        let bedrooms = (this.state.bedrooms) ? this.state.bedrooms : null;
        let bathrooms = (this.state.bathrooms) ? this.state.bathrooms : null;
        let home = { name: name, address: address, region: region, start: start, last: last, bedrooms: bedrooms, bathrooms: bathrooms };
        this.props.onHomeUpdate(id, home);
        this.setState({
            toBeUpdated: !this.state.toBeUpdated,
            name: '',
            address: '',
            region: '',
            start: '',
            last: '',
            bedrooms: '',
            bathrooms: '',
        })
    }
    deleteHome(e) {
        e.preventDefault();
        let id = this.props.uniqueID;
        this.props.onHomeDelete(id);
        console.log("House Deleted");
    }
    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }
    handleAddressChange(e) {
        this.setState({ address: e.target.value });
    }
    handleRegionChange(e) {
        this.setState({ region: e.target.value });
    }
    handleStartChange(e) {
        this.setState({ start: e.target.value });
    }
    handleLastChange(e) {
        this.setState({ last: e.target.value });
    }
    handleBedroomsChange(e) {
        this.setState({ bedrooms: e.target.value });
    }
    handleBathroomsChange(e) {
        this.setState({ bathrooms: e.target.value });
    }
    rawMarkup() {
        let rawMarkup = marked(this.props.children.toString());
        return { __html: rawMarkup };
    }
    render() {
        return (
            <div style={style.home}>
                <h3>{this.props.name}</h3>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
                <a style={style.updateLink} href='#' onClick={this.updateHome}>update</a>
                <a style={style.deleteLink} href='#' onClick={this.deleteHome}>delete</a>
                {
                    (this.state.toBeUpdated)
                        ? (<form onSubmit={this.handleHomeUpdate}>
                            <input
                                type='text'
                                placeholder='House Name'
                                style={style.comeFormName}
                                value={this.state.name}
                                onChange={this.handleNameChange} />
                            <input
                                type='text'
                                placeholder='Address'
                                style={style.homeFormAddress}
                                value={this.state.address}
                                onChange={this.handleAddressChange} />
                            <input
                                type='text'
                                placeholder='Region'
                                style={style.comeFormRegion}
                                value={this.state.region}
                                onChange={this.handleRegionChange} />
                            <input
                                type='value'
                                placeholder='First Date Available'
                                style={style.comeFormStart}
                                value={this.state.start}
                                onChange={this.handleStartChange} />
                            <input
                                type='value'
                                placeholder='Last Date Available'
                                style={style.homeFormLast}
                                value={this.state.Last}
                                onChange={this.handleLastChange} />
                            <input
                                type="value"
                                placeholder='Bedrooms'
                                style={style.homeFormBedrooms}
                                value={this.state.bedrooms}
                                onChange={this.handleBedroomsChange} />
                            <input
                                type='value'
                                placeholder='Bathrooms'
                                style={style.homeFormBathrooms}
                                value={this.state.bathroomd}
                                onChange={this.handleBathroomsChange} />
                            <input
                                type='submit'
                                style={style.homeFormPost}
                                value='Update' />
                        </form>)
                        : null
                }
            </div>
        )
    }
}
export default UDHome;