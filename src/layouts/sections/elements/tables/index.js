/*
=========================================================
* Otis Kit PRO - v2.0.1
=========================================================

* Product Page: https://material-ui.com/store/items/otis-kit-pro-material-kit-react/
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Sections components
import BaseLayout from 'layouts/sections/components/BaseLayout'
import View from 'layouts/sections/components/View'

// Tables page components
import TableOne from 'layouts/sections/elements/tables/components/TableOne'

// Tables page components code
import tableOneCode from 'layouts/sections/elements/tables/components/TableOne/code'

function Tables () {
  return (
    <BaseLayout
      title="Tables"
      breadcrumb={[
        { label: 'Page Sections', route: '/sections/elements/tables' },
        { label: 'Tables' }
      ]}
    >
      <View title="Table One" code={tableOneCode}>
        <TableOne />
      </View>
    </BaseLayout>
  )
}

export default Tables
