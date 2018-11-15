import React, { Component } from 'react';
import { SeriesList } from '../../components/SeriesList/seriesList';
import { Loader } from '../../components/Loader/loader.js';


export class Series extends Component {

    state = {
        series: [

        ],
        seriesName: '',
        isFetching: false
    }


    onSeriesInputChange = e => {
        this.setState({ 
            seriesName: e.target.value, 
            isFetching: true 
        });

        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(response => response.json())
        .then(json => this.setState({ 
            series: json, 
            isFetching: false 
        }));
        
    }

    render() {

        const { series, seriesName, isFetching } = this.state;

        return (
            <div>
                <div>
                    <input value={ seriesName } type="text" onChange={ this.onSeriesInputChange } />
                </div>
                {
                   !isFetching && series.length === 0 && seriesName.trim() === '' 
                   &&
                   <p>
                       Enter TV series name into the search field.
                   </p>
                }
                {
                    !isFetching && series.length === 0 && seriesName.trim() !== '' 
                    &&
                    <p>
                        No results found.
                    </p>
                }
                {
                    isFetching
                    &&
                    <Loader />
                }
                {
                    !isFetching
                    &&
                    <SeriesList list = {this.state.series} />
                }
            </div>
        )
    }
}