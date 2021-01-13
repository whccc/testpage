import React, { Fragment } from 'react'
import { InfoBienvenida } from '../../components/InfoBienvenida'
import { Login } from '../../components/Login'
import { Layout } from '../../components/Layout'
import { Container } from '../../styles/stylelogin'
import useUser from '../../hooks/useUser'

const LoginPage: React.FC = () => {
  const { ValidateLogin, NavigationIndex } = useUser()
  if (typeof window !== 'undefined') {
    if (ValidateLogin()) {
      NavigationIndex()
      return null
    }
  }
  return (
    <Fragment>
      <Layout>
        <Container>
          <div>
            <InfoBienvenida />
            <Login />
          </div>
        </Container>
      </Layout>
    </Fragment>
  )
}

export default LoginPage
