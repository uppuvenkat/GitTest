import React, { Component } from 'react'
import FormLayout from './FormLayout'
import ListPage from './ListPage'
import axios from 'axios';

export default class MainComp extends Component {
    constructor() {
        super();
        this.state = {
            repoName: '',
            filter:'',
            filterData: [],
            repoData: [],
            err: ''
        }
    }

    onNameChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onFilter = (e) => {
        let filterData = this.state.repoData
        this.setState({  filter:e.target.value, filterData })
    }

    fetchUserRepos = () => {
        axios.get(`https://api.github.com/users/${this.state.repoName}/repos`)
            .then(res => {
                const repoData = res.data;
                this.setState({ repoData, err: '', filterData: [] });
            }).catch(err => {
                this.setState({ err: 'No data Found' })
            })
    }

    clearRepo = () => {
        this.setState({ repoData: [], repoName:'', err:''})
    }

    clearFilter = ()=>{
        this.setState({filter:'', filterData:[]} )
    }
    
    render() {
        return (
            <div>
                <FormLayout
                    repoName={this.state.repoName}
                    filter = {this.state.filter}

                    onNameChange={this.onNameChange}
                    onFilter={this.onFilter}
                    fetchUserRepos={this.fetchUserRepos}
                    clearRepo={this.clearRepo}
                    clearFilter={this.clearFilter}
                />
                <ListPage
                    repoData={this.state.repoData}
                    filter = {this.state.filter}
                    err={this.state.err}
                    filterData={this.state.filterData}
                />
            </div>
        )
    }
}
