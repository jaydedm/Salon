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

// Notifications page components
import ToastBasic from "layouts/sections/attention-catchers/notifications/components/ToastBasic";
import ToastMessage from "layouts/sections/attention-catchers/notifications/components/ToastMessage";

// Notifications page components code
import toastBasicCode from "layouts/sections/attention-catchers/notifications/components/ToastBasic/code";
import toastMessageCode from "layouts/sections/attention-catchers/notifications/components/ToastMessage/code";

function Notifications() {
  return (
    <BaseLayout
      title="Notifications"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/attention-catchers/notifications" },
        { label: "Notifications" },
      ]}
    >
      <View title="Toast basic" code={toastBasicCode}>
        <ToastBasic />
      </View>
      <View title="Toast message" code={toastMessageCode}>
        <ToastMessage />
      </View>
    </BaseLayout>
  );
}

export default Notifications;
