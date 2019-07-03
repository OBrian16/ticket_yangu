import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const SocialLinks = () => {
  return (
    <div>
    <Button color='facebook'>
      <Icon name='facebook' /> Facebook
    </Button>

    <Button color='twitter'>
      <Icon name='twitter' /> Twitter
    </Button>

    <Button color='red'>
      <Icon name='instagram' /> Instagram
    </Button>
  </div>
  )
}

export default SocialLinks