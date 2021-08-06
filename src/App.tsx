import Root from 'components/Root'
import { LinkText, HeaderText, SubheaderText } from 'components/Text'

const App = () => {
  return (
    <Root>
      <HeaderText>CommonCrypto</HeaderText>
      <SubheaderText>Free crypto exchange tickers API</SubheaderText>
      <LinkText link="https://api.commoncrypto.dev">API docs</LinkText>
    </Root>
  )
}

export default App
