import React from 'react'
import { Button, Icon, Image, Item, Label, Segment } from 'semantic-ui-react'

const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

const ViewEvent = () => (
    <Segment style={{ padding: '0em 0em' }} vertical >
        <Item.Group divided>
            <Item>
                <Item.Image size='' src='https://react.semantic-ui.com/images/wireframe/image.png' />

                <Item.Content>
                    <Item.Header as='a'>12 Years a Slave</Item.Header>
                    <Item.Meta>
                        <span className='cinema'>Union Square 14</span>
                    </Item.Meta>
                    <Item.Description>
                        {paragraph}
                    </Item.Description>
                    <Item.Extra>
                        <Label>IMAX</Label>
                        <Label icon='globe' content='Additional Languages' />
                        <Button size='' primary floated='right'>
                            Buy tickets
                        </Button>
                    </Item.Extra>
                </Item.Content>
            </Item>


        </Item.Group>
    </Segment>


)

export default ViewEvent