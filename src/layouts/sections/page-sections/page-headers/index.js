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
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// PageHeaders page components
import HeaderOne from "layouts/sections/page-sections/page-headers/components/HeaderOne";
import HeaderTwo from "layouts/sections/page-sections/page-headers/components/HeaderTwo";
import HeaderThree from "layouts/sections/page-sections/page-headers/components/HeaderThree";

// PageHeaders page components code
import headerOneCode from "layouts/sections/page-sections/page-headers/components/HeaderOne/code";
import headerTwoCode from "layouts/sections/page-sections/page-headers/components/HeaderTwo/code";
import headerThreeCode from "layouts/sections/page-sections/page-headers/components/HeaderThree/code";

function PageHeaders() {
  return (
    <BaseLayout
      title="Page Headers"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/page-headers" },
        { label: "Page Headers" },
      ]}
    >
      <View title="Header 1" code={headerOneCode} height="40rem">
        <HeaderOne />
      </View>
      <View title="Header 2" code={headerTwoCode} height="40rem">
        <HeaderTwo />
      </View>
      <View title="Header 3" code={headerThreeCode} height="40rem">
        <HeaderThree />
      </View>
    </BaseLayout>
  );
}

export default PageHeaders;
