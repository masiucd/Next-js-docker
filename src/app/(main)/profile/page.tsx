import {eq} from "drizzle-orm";
import {alias} from "drizzle-orm/pg-core";
import {redirect} from "next/navigation";

import {PageWrapper} from "@/_components/page-wrapper";
import {H1} from "@/_components/typography";
import {db} from "@/db";
import {task, user} from "@/db/schema";
import {getUserFromSession} from "@/lib/auth";

async function ProfilePage() {
  let userFromSession = await getUserFromSession();
  if (userFromSession === null) {
    redirect("/");
  }
  let u = alias(user, "u");
  let t = alias(task, "t");

  let userData = await db.transaction(async (tx) => {
    let tasks = await tx
      .select()
      .from(t)
      .where(eq(t.userId, userFromSession.userId));

    let profileData = await tx
      .select({
        id: u.id,
        email: u.email,
        name: u.name,
      })
      .from(u)
      .where(eq(u.id, userFromSession.userId));

    return {tasks, profileData: profileData[0]};
  });

  let {tasks, profileData} = userData;

  return (
    <PageWrapper>
      ProfilePage
      <H1>Profile</H1>
      <p>
        <strong>Name:</strong> {profileData.name}
      </p>
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>{t.task}</li>
        ))}
      </ul>
    </PageWrapper>
  );
}

export default ProfilePage;
