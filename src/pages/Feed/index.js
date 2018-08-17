import { Page } from '~/components'
import Container from './styles'

import MDX, { meta } from './test.mdx'
console.log(meta)

export default () => (
  <Page>
    <Container>
      <MDX />
      Feed
    </Container>
  </Page>
)