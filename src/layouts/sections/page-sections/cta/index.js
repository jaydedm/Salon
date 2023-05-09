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

// Otis Kit PRO components
import MKBox from "components/MKBox";

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// CTA page components
import CtaOne from "layouts/sections/page-sections/cta/components/CtaOne";
import CtaTwo from "layouts/sections/page-sections/cta/components/CtaTwo";
import CtaThree from "layouts/sections/page-sections/cta/components/CtaThree";

// CTA page components code
import ctaOneCode from "layouts/sections/page-sections/cta/components/CtaOne/code";
import ctaTwoCode from "layouts/sections/page-sections/cta/components/CtaTwo/code";
import ctaThreeCode from "layouts/sections/page-sections/cta/components/CtaThree/code";

function Cta() {
  return (
    <BaseLayout
      title="Call to Action"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/cta" },
        { label: "Call to Action" },
      ]}
    >
      <View title="Prefooter 1" code={ctaOneCode}>
        <MKBox bgColor="white">
          <CtaOne />
        </MKBox>
      </View>
      <View title="Prefooter 2" code={ctaTwoCode}>
        <CtaTwo />
      </View>
      <View title="Prefooter 3" code={ctaThreeCode}>
        <CtaThree />
      </View>
    </BaseLayout>
  );
}

export default Cta;
