import MKBox from 'components/MKBox'
import footerRoutes from 'footer.routes'
import DefaultFooter from 'pages/Salon/sections/DefaultFooter'
import EstTeam from './EstTeam'

function EstAboutUs () {
  return (
    <>
      <EstTeam color='pink' />
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  )
}

export default EstAboutUs
