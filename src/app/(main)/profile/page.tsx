import {redirect} from "next/navigation";

import {PageWrapper} from "@/_components/page-wrapper";
import {isAuthorized} from "@/lib/auth";

async function ProfilePage() {
  let authorized = await isAuthorized();
  if (!authorized) {
    redirect("/");
  }
  return <PageWrapper>ProfilePage</PageWrapper>;
}

export default ProfilePage;
