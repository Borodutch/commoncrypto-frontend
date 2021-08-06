import Root from 'components/Root'
import { LinkText, HeaderText, SubheaderText, BodyText } from 'components/Text'

const App = () => {
  return (
    <Root>
      <HeaderText>CommonCrypto</HeaderText>
      <SubheaderText>Free crypto exchange tickers API</SubheaderText>
      <BodyText>
        <LinkText link="https://api.commoncrypto.dev">API docs</LinkText>
      </BodyText>
      <BodyText>
        Sources:{' '}
        <LinkText link="https://github.com/Borodutch/commoncrypto-frontend">
          frontend
        </LinkText>
        ,{' '}
        <LinkText link="https://github.com/Borodutch/commoncrypto-backend">
          backend
        </LinkText>
        .
      </BodyText>
    </Root>
  )
}

export default App
