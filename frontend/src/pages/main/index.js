import React, { Component } from 'react';
import SearchBox from '../../components/SearchBox';
import QuestionItem from '../../components/QuestionItem';
import MaterialTable from 'material-table';
import { withStyles } from '@material-ui/styles';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '../../images/github_icon.png';
import './styles.css';

const styles = theme => ({
  root: {
    height: '100%',
    paddingTop: '20px',
    textAlign: 'center'
  },
  content: {
    display: 'inline-block',
    width: '45%'
  },
  github: {
    position: 'absolute',
    right: 15,
    top: 10
  }
});

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchQuery: 'kotlin'
    }

    this.tableRef = React.createRef();
  }

  handleSearch = (event) => {
    this.setState({
      searchQuery: event.target.value
   });
  }

  searchClick = () => {
    this.tableRef.current && this.tableRef.current.onQueryChange()
  }

  keyPress(e){
    if (e.keyCode === 13){
       this.searchClick()
    }
 }

  render() {
    const { classes } = this.props;

    return (<div className={classes.root}>
          <IconButton href="https://github.com/thejackgatsby/GL.Thoth" className={classes.github} aria-label="GitHub">
            <img alt="GitHub Repository" src={GitHubIcon} />
          </IconButton>
          <div className={classes.content}>
          <SearchBox onKeyDown={this.keyPress.bind(this)} handleSearch={this.handleSearch} searchClick={this.searchClick} />
          <MaterialTable 
            options={{ paging: true, search: false, sorting: true, showTitle: false, header: false, toolbar: false, pageSize: 6, pageSizeOptions: [6, 20, 50, 100] }}
            columns={[
              { title: 'Имя', field: 'name' },
              { title: 'Логин', field: 'value' }
            ]}
            tableRef={this.tableRef}
            localization={{
              body: {
                emptyDataSourceMessage: 'Nothing found.'
              },
              pagination: {
                labelRowsSelect: ''
              }
            }}
            data={query =>
              new Promise((resolve, reject) => {
                let url = `/questions?page=${query.page + 1}&pageSize=${query.pageSize}`;
                if (this.state.searchQuery !== "") {
                  url += `&query=${this.state.searchQuery}`
                }
                axios.get(url)
                .then(response => {
                    if (response && response.data) {
                      resolve({
                        data: response.data.items,
                        page: query.page,
                        totalCount: response.data.totalCount
                      });
                    }
                }).catch(() => {
                  resolve({
                    data: [],
                    page: 0,
                    totalCount: 0
                  });
                })
            })}
            components={{
              Row: props => {
                return (<QuestionItem {...props}/>)
              } 
            }}
        />
        </div>
      </div>);
  }
}

export default withStyles(styles)(Main);
