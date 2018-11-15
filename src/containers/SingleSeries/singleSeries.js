import React, { Component } from 'react';
import { Loader } from '../../components/Loader/loader'

export class SingleSeries extends Component {
    state = {
        show: null
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(`http://api.tvmaze.com/shows/${id}`)
        .then(response => response.json())
        .then(json => this.setState({ 
            show: json
        }));
    }

    render() {
        const { show } = this.state;

        return (
            <div>
                {
                    show === null 
                    && 
                    <Loader />
                }
                {
                    show !== null 
                    && 
                    <div>
                        <h2>{ show.name }</h2>
                        <p>{ show.summary }</p>
                        <img alt="show" src={show.image.medium} />
                    </div>
                }
            </div>
        )
    }
}