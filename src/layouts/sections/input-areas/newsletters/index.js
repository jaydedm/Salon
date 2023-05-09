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

// Newsletters page components
import NewsletterOne from "layouts/sections/input-areas/newsletters/components/NewsletterOne";
import NewsletterTwo from "layouts/sections/input-areas/newsletters/components/NewsletterTwo";

// Newsletters page components code
import newsletterOneCode from "layouts/sections/input-areas/newsletters/components/NewsletterOne/code";
import newsletterTwoCode from "layouts/sections/input-areas/newsletters/components/NewsletterTwo/code";

function Newsletters() {
  return (
    <BaseLayout
      title="Newsletters"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/input-areas/newsletters" },
        { label: "Newsletters" },
      ]}
    >
      <View title="Newsletter 1" code={newsletterOneCode}>
        <NewsletterOne />
      </View>
      <View title="Newsletter 2" code={newsletterTwoCode}>
        <NewsletterTwo />
      </View>
    </BaseLayout>
  );
}

export default Newsletters;
