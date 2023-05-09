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

// Modals page components
import SimpleModal from "layouts/sections/attention-catchers/modals/components/SimpleModal";
import NotificationModal from "layouts/sections/attention-catchers/modals/components/NotificationModal";

// Modals page components code
import simpleModalCode from "layouts/sections/attention-catchers/modals/components/SimpleModal/code";
import notificationModalCode from "layouts/sections/attention-catchers/modals/components/NotificationModal/code";

function Modals() {
  return (
    <BaseLayout
      title="Modals"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/attention-catchers/modals" },
        { label: "Modals" },
      ]}
    >
      <View title="Simple modal" code={simpleModalCode}>
        <SimpleModal />
      </View>
      <View title="Notification modal" code={notificationModalCode}>
        <NotificationModal />
      </View>
    </BaseLayout>
  );
}

export default Modals;
