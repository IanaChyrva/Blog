import * as React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { withRouter, Link as PostLink } from 'react-router-dom'

import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  media: {
    height: 140,
  },
});

class Main extends React.Component {
  state = {
    blogPosts: []
  }

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(blogPosts => this.setState({ blogPosts }))
  }

  render = () => {
    return (
      <Grid item xs={12} md={8} >
        <Card>

          {this.state.blogPosts.map((blogPost) => (
            <CardActionArea key={`blogPost.Id-${blogPost.id}`}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {blogPost.title}
                </Typography>
                <CardMedia
                  className={this.props.classes.media}
                  image="https://source.unsplash.com/random"
                  title={blogPost.title}
                />
              </CardContent>
              <Button variant="contained" color="primary" to={`/posts/${blogPost.id}`} component={PostLink}>
                Learn more
                </Button>
            </CardActionArea>
          ))}

        </Card>
      </Grid>
    )
  }
}

export default withRouter(withStyles(styles)(Main))

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
