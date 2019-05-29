import React from 'react';
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
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'


class Footer extends React.Component {
  render() {
    return (
      <Segment inverted vertical padded className="footer-segment">
       <Container>
         <Grid divided inverted stackable>
           <Grid.Row>
             <Grid.Column width={4}>
               <List link inverted>
                 <List.Item>© 2019 a-PET-ment.</List.Item>
                 <List.Item>Designed by Sara. Developed by Sara.</List.Item>
               </List>
             </Grid.Column>
             <Grid.Column width={6}>
                <Grid columns='equal'>
                   <Grid.Row>
                    <Grid.Column textAlign='right'>
                      FACEBOOK
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                      TWITTER
                    </Grid.Column>
                    <Grid.Column textAlign='left'>
                      INSTAGRAM
                    </Grid.Column>
                   </Grid.Row>
                </Grid>
             </Grid.Column>
             <Grid.Column width={4}>
               <List link inverted>
                 <List.Item as='a'>About</List.Item>
                 <List.Item as='a'>Contact Us</List.Item>
               </List>
             </Grid.Column>
           </Grid.Row>
         </Grid>
       </Container>
     </Segment>
    );
  }
}

export default Footer;
