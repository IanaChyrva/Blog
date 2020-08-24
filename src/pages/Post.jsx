import * as React from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
    media: {
        height: 140,
    },
});

const sections = [
    { title: 'Technology', url: '#' },
    { title: 'Design', url: '#' },
    { title: 'Culture', url: '#' },
    { title: 'Business', url: '#' },
    { title: 'Politics', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Science', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Style', url: '#' },
    { title: 'Travel', url: '#' },
];

class Post extends React.Component {
    state = {
        posts: []
    }

    componentDidMount = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts?postId=${this.props.match.params.postId}`)
            .then(response => response.json())
            .then(posts => this.setState({ posts }))
    }

    render = () => {
        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Link to="/"><Header title="Blog" sections={sections} /></Link>
                    <main>
                        <Grid container spacing={5} className={this.props.classes.mainGrid}>
                            <Card>
                                <CardActionArea>
                                    {this.state.posts.map((post) => (
                                        <CardContent key={`postId-${post.id}`}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {post.title}
                                            </Typography>
                                            <CardMedia
                                                className={this.props.classes.media}
                                                image="https://source.unsplash.com/random"
                                                title={post.title}
                                            />
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {post.body}
                                            </Typography>
                                        </CardContent>
                                    ))}
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </main>
                </Container>
                <Footer
                    title="Footer"
                    description="Something here to give the footer a purpose!"
                />
            </React.Fragment>
        )
    }
}
export default withRouter(withStyles(styles)(Post))
