import React, { Component } from 'react';
import style from './style';

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', address: '', region: '', start: '', last: '', bedrooms: '', bathrooms: ''};
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleRegionChange = this.handleRegionChange.bind(this);
        this.handleStartChange = this.handleStartChange.bind(this);
        this.handleLastChange = this.handleLastChange.bind(this);
        this.handleBedroomsChange = this.handleBedroomsChange.bind(this);
        this.handleBathroomsChange = this.handleBathroomsChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
    handleSubmit(e) {
        e.preventDefault();
        let name = this.state.name.trim();
        let address = this.state.address.trim();
        let region = this.state.region.trim();
        let start = this.state.start.trim();
        let last = this.state.last.trim();
        let bedrooms = this.state.bedrooms.trim();
        let bathrooms = this.state.bathrooms.trim();
        if (!text || !name && address && region && bedrooms && bathrooms) {
            return;
        }
        this.props.onHomeSubmit({ name: name, address: address, region: region, start: start, last: last, bedrooms: bedrooms, bathrooms: bathrooms});
        this.setState({ name: '', address: '', region: '', start: '', last: '', bedrooms: '', bathrooms: ''});
    }
    render() {
        return (
            <form style={style.homeForm} onSubmit={this.handleSubmit}>
                <input
                type='text'
                placeholder='House Name'
                style={style.homeFormName}
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
                style={style.homeFormRegion}
                value={this.state.region}
                onChange={this.handleRegionChange} />
                <input
                type='value'
                placeholder= 'First Date Available'
                style={style.homeFormStart}
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
                value='Post'/>
            </form>
        )
    }
}
export default HomeForm;