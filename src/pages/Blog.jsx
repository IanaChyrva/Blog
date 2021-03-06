import * as React from 'react';

import { withRouter, Link as PostLink } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from '../components/Header';
import MainFeaturedPost from '../components/MainFeaturedPost';
import FeaturedPost from '../components/FeaturedPost';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
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

const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: 'Continue reading…',
};

const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    },
];

const sidebar = {
    title: 'About',
    description:
        'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
    archives: [
        { title: 'March 2020', url: '#' },
        { title: 'February 2020', url: '#' },
        { title: 'January 2020', url: '#' },
        { title: 'November 1999', url: '#' },
        { title: 'October 1999', url: '#' },
        { title: 'September 1999', url: '#' },
        { title: 'August 1999', url: '#' },
        { title: 'July 1999', url: '#' },
        { title: 'June 1999', url: '#' },
        { title: 'May 1999', url: '#' },
        { title: 'April 1999', url: '#' },
    ],
    social: [
        { name: 'GitHub', icon: GitHubIcon },
        { name: 'Twitter', icon: TwitterIcon },
        { name: 'Facebook', icon: FacebookIcon },
    ],
};


class Blog extends React.Component {
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
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Header title="Blog" sections={sections} />
                    <main>
                        <MainFeaturedPost post={mainFeaturedPost} />
                        <Grid container spacing={4}>
                            {featuredPosts.map((post) => (
                                <FeaturedPost key={post.title} post={post} />
                            ))}
                        </Grid>
                        <Grid container spacing={5} className={this.props.classes.mainGrid}>
                            <Grid item xs={12} md={8} >
                                <Card>

                                    {this.state.blogPosts.map((blogPost) => (
                                        <CardActionArea key={`blogPostId-${blogPost.id}`}>
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
                            <Sidebar
                                title={sidebar.title}
                                description={sidebar.description}
                                archives={sidebar.archives}
                                social={sidebar.social}
                            />
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
export default withRouter(withStyles(styles)(Blog))
