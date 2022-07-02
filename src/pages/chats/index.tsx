import { useRouter } from "next/router";
import React from "react";
import { BaseLayout, BasePageHeader } from "../../common/components";

function Chats() {
  const Router = useRouter();
  return (
    <BaseLayout>
      <BasePageHeader title="Chat page" handleBack={() => Router.back} />
    </BaseLayout>
  );
}

export default Chats;
