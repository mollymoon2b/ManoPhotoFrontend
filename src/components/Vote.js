import React from 'react';
import styles from '../style/VoteStyle.js';
import injectSheet from 'react-jss';

class Vote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            files: [],
            error: ''
        };
        this.handleVoteImage = this.handleVoteImage.bind(this);
    }

    fetchAll() {
        fetch('https://powerful-tundra-37364.herokuapp.com/images', {
            method: 'GET',
        }).then((response) => {
            response.json().then((body) => {
                console.log(body.files);
                this.setState({ files: body.files });
            });
        });
    }

    getCookie(name) {
        var dc = document.cookie;
        var prefix = name + "=";
        var begin = dc.indexOf("; " + prefix);
        if (begin === -1) {
            begin = dc.indexOf(prefix);
            if (begin !== 0) return null;
        }
        else
        {
            begin += 2;
            var end = document.cookie.indexOf(";", begin);
            if (end === -1) {
                end = dc.length;
            }
        }
        return decodeURI(dc.substring(begin + prefix.length, end));
    }

    handleVoteImage(e) {
        e.preventDefault();
        this.state.files.map((file, index) => {
            if (file.name === e.target.alt) {
                const data = new FormData();
                const myCookie = this.getCookie("vote");
                document.cookie = "vote=true";
                data.append('firstVote', myCookie);
                data.append('name', file.name);// eslint-disable-next-line
                data.append('vote', this.state.files[index].vote);
                fetch('https://powerful-tundra-37364.herokuapp.com/addVote', {
                    method: 'POST',
                    body: data,
                }).then((response) => {
                    return response.json();
                }).then((body) => {
                    if (body.error) {
                        this.setState({error: body.error});
                    }
                }).catch(console.log);
                this.fetchAll();
            }
        });
    };

    componentDidMount() {
        this.fetchAll();
    }

    render() {
        return (
            <div className={this.props.classes.vote}>
                <h1 className={this.props.classes.voteTitle}>Les plus BEAUX !!!</h1>
                {this.state.files.map(file => {
                    return (
                        <a href="" className={this.props.classes.voteLink} onClick={this.handleVoteImage}>
                            <img className={this.props.classes.voteImg} src={'https://powerful-tundra-37364.herokuapp.com/public/' + file.name} alt={file.name} />
                            <span className={this.props.classes.voteText}>
                                {file.vote} Votes
                            </span>
                            <p className={this.props.classes.voteText}>{this.state.error}</p>
                        </a>
                    )
                } )}
            </div>
        );
    }
}

const StyledVote = injectSheet(styles)(Vote);

const Test = () => <StyledVote></StyledVote>;

export default Test;
