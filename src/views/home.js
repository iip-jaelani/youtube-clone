import React, { Component, Fragment } from 'react';
//Components
import Appbar from '../components/Appbar';
import AppbarPriv from '../components/Appbarpriv'
//reduxs
import { connect } from "react-redux";
import { getVideos } from "../redux/actions/apiYoutube";
import { postData } from '../redux/actions/users';
//material-UI
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
//player
import ReactPlayer from 'react-player';
import { Container } from '@material-ui/core';

class Home extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    this.props.getVideos();
    this.props.postData()
    let videos = localStorage.getItem('videos')
    let resVideos = JSON.parse(videos)
  }
  render() {
    const { data, isLoading } = this.props.video
    const user = JSON.parse(localStorage.getItem('session'))
    let videos = localStorage.getItem('videos')
    let resVideos = JSON.parse(videos)
    console.log(resVideos);
    return (
      <Fragment>
        {!user ?
          <Appbar />
          :
          <AppbarPriv />
        }
        <Container>
          <div style={{ marginTop: 20 }}>
            <Grid container spacing={3}>
              {data.map(result => (
                <Grid item xs={12} sm={6} lg={3}>
                  <div>
                    <div>
                      {!result.id.videoId ?
                        <img style={{ width: 300, height: 220 }} src={`${result.snippet.thumbnails.high.url}`} />
                        :
                        <ReactPlayer style={{ width: 300, height: 220 }} width={300} height={220} url={`https://www.youtube.com/watch?v=${result.id.videoId}`} />
                      }
                    </div>
                    <div style={{ width: 300 }}>
                      <h3 style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', height: 40, marginBottom: 0 }}>{`${result.snippet.title}`}</h3>
                      <p style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', height: 40, marginBottom: 0, fontSize: 15 }}>{`${result.snippet.description}`}</p>
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar alt={`${result.snippet.channelTitle}`} src="/static/images/avatar/3.jpg" />
                        <p style={{ color: '#aaa', marginLeft: 20, fontSize: 15 }}>{`${result.snippet.channelTitle}`}</p>
                      </div>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
            <h3>Shared videos</h3>
            <Grid style={{ marginBottom: 300 }} container spacing={3}>
              {resVideos ?
                resVideos.map(data => {
                  return (
                    <Grid item xs={12} sm={6} lg={3}>
                      <iframe width="300" height="220" src={data.link} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <div style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center' }}>
                        <Avatar style={{ alignSelf: 'center', marginRight: 10 }} alt={data.username} src="/static/images/avatar/3.jpg" />
                        <p>Shared by: {data.username} </p>
                      </div>

                    </Grid>

                  )
                })
                :
                <h1 style={{ flexGrow: 1, color: 'red', textAlign: 'center', marginBottom: 400, marginTop: 100 }}>Data Not Found</h1>
              }
            </Grid>
          </div>
        </Container>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    video: state.video,
    user: state.user
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getVideos: () => {
      dispatch(getVideos());
    },
    postData: () => {
      dispatch(postData());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);