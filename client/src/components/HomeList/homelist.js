import React, { Component } from 'react';
import UDHome from './UDHome';
import style from './style';


class HomeList extends Component {
    render() {
        let homeData = this.props.data.map(home => {
            return (
                <Home
                    name={home.name}
                    address={home.address}
                    vacancy={home.vacancy}
                    pic={home.pic}
                    region={home.region}
                    bedrooms={home.bedrooms}
                    bathrooms={home.bathrooms}
                    uniqueID={home['id']}
                    onHomeDelete={this.props.onHomeDelete}
                    onHomeUpdate={this.props.onHomeUpdate}
                    key={home['id']}>
                    {home.text}
                </Home>
            )
        })
        return (
            <div style={style.homeList}>
                {homeData}
            </div>
        )
    }
}
export default HomeList;