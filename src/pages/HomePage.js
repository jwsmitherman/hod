import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import "semantic-ui-css/semantic.min.css";
import HODLogo from '../assets/SVGLogo.svg';
import EmailForm from '../compoenents/EmailForm'
import Christmas2020 from './Christmas2020'

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <img src={HODLogo} alt="React Logo" />
    <Header
      as='h2'
      content='Making a Difference in The World for Good'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button primary size='huge'>
      See How to Become a Change Makrer
      <Icon name='right arrow' />
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Media greaterThan='mobile'>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item as='a'>Donante</Menu.Item>
                <Menu.Item as='a'>Work With Us</Menu.Item>
                <Menu.Item as='a'>Events</Menu.Item>
                <Menu.Item as='a'>Contact</Menu.Item>
                <Menu.Item position='right'>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Media as={Sidebar.Pushable} at='mobile'>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as='a' active>
              Home
            </Menu.Item>
            <Menu.Item as='a'>Work</Menu.Item>
            <Menu.Item as='a'>Company</Menu.Item>
            <Menu.Item as='a'>Careers</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
            Holiday Season Cheer
            </Header>
            <p style={{ fontSize: '1.33em' }}>
                <ul>
                    <li>Donate to help provide food, toys and gifts to our children in refugee camps in the Benue/Cameroon border.</li>

                    <li>Make or sign holiday cards, if you’d like to put a funny picture of you and your family/pets to help make a kid smile during the holiday season then you will be changing the world a great deal</li>

                    <li>Assist with gift wrapping (only available for mission trippers)</li>
                </ul>
              We can give your company superpowers to do things that they never thought possible.
              Let us delight your customers and empower your needs... through pure data analytics.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Check out all our latest projects
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes that's right, we are making change happen around the world. Check out about more events and how you can be a change maker today!
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Christmas2020 />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Want to See More Events, Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
            Work With Us!
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            The desire to make a difference in a world where kindness is not enough, drove us to create an avenue where people of like minds would come together and be a part of serving humanity.
            Does this sound like what you are looking for? If your answer is yes, complete the form below to become a changemaker.
            Houz of Dyza has long-term and short-term volunteer opportunities. To protect our recipients rights, a volunteer application and a criminal background check is required for the mission trips.
            </p>
            <EmailForm />
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
            Make a Doniation
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            Your contribution to Houz of Dyza gives the most vulnerable people around the world a chance to heal, find strength and fulfill their purpose. 
            When you support Houz of Dyza, you are investing in greater, healthier communities that lift up individuals, empowering them to be the best version of themselves.

            <ul>
                    <li>Volunteer or donate supplies to brightening birthdays celebration</li>
                    <li>Assist young adults with a resume or job interview coaching</li>
                    <li>Soul Nourishment Program</li>
                    <li>Lend your support to women in underdeveloped countries who want to rebuild their lives, their families and communities by starting up small businesses.</li>
            </ul>
            
            <Button size='huge'>Make a Donatation Today</Button>
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
        Our Latest Projects
        </Header>
        <p style={{ fontSize: '1.33em' }}>
        <b>Sanitary Pads for Underprivileged Girls.</b>
        </p>

        <p style={{ fontSize: '1.33em' }}>
        Statistics have proven that 65% of teenage girls in underdeveloped societies have no access to safe hygienic products when they are experiencing their monthly cycle. 
       </p>

        <p style={{ fontSize: '1.33em' }}>
        Here at Houz of Dyza we promote self discovery and purposeful living, on realizing what millions of teenage girls are battling with we have come up with this idea to help. We are particular about vulnerable girls and women who have become victims of gender based violence.
 
        </p>

        <p style={{ fontSize: '1.33em' }}>
        Houz of Dyza advocates and fights against all abuses faced by women and girls, we empower victims with leadership silks which becomes an avenue to living a better life. We are currently working with schools and local business owners in communities all around the world. The Sanitary Pads Project for Girls in Underdeveloped Countries is a program created to give the girl child an equal chance to compete and live a fulfilled life. Girls in these parts of the world miss at least three to four days of class every month when they are on their monthly cycle as a result of lack of appropriate hygiene education, backing and supplies. 
        </p>
        <p style={{ fontSize: '1.33em' }}>
        By helping educate these girls, we are building a stronger world where our sisters, mothers, nieces and friends can become leaders of tomorrow. We are giving an opportunity for the girl child to have a voice where the microphone has been snatched out of her hands by the society she lives in. Some of these girls deal with stigmatization and  are pulled out of school, married early, and are more likely to be subjected to violence.

        </p>
        <Button as='a' size='large'>
          Read More
        </Button>

        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>*</a>
        </Divider>

        <Header as='h3' style={{ fontSize: '2em' }}>
          Upcoming Events
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          coming soon
        </p>
        <Button as='a' size='large'>
          Check Them Out!
        </Button>
      </Container>
    </Segment>

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Donate</List.Item>
                <List.Item as='a'>Work with us</List.Item>
                <List.Item as='a'>Events</List.Item>
                <List.Item as='a'>Contact</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Copyright
              </Header>
              <p>
                HOUZ of DYZA
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default HomepageLayout