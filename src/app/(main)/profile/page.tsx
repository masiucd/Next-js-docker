import {Badge, Code, DataList, Flex, IconButton} from "@radix-ui/themes";
import Link from "next/link";
import {redirect} from "next/navigation";

import {ICON_SIZE, Icons} from "@/_components/icons";
import {PageWrapper} from "@/_components/page-wrapper";
import {H1} from "@/_components/typography";
import {getUserFromSession} from "@/lib/auth";

import {getUserData, type UserDataType} from "./api";
import {UserTasks} from "./user-tasks";

async function ProfilePage() {
  let userFromSession = await getUserFromSession();
  if (userFromSession === null) {
    redirect("/");
  }

  let {profileData, tasks} = await getUserData(userFromSession);

  return (
    <PageWrapper>
      <H1>Profile</H1>
      <Flex
        gap="8"
        direction="column"
        p="3"
        className="mx-auto w-[62rem] border border-blue-400"
        justify="between"
      >
        <UserData userData={profileData} />
        <UserTasks tasks={tasks} />
      </Flex>
    </PageWrapper>
  );
}

function UserData({userData}: {userData: UserDataType}) {
  return (
    <Flex direction="column" gap="4" width="400px">
      <DataList.Root>
        <DataList.Item align="center">
          <DataList.Label minWidth="88px">Status</DataList.Label>
          <DataList.Value>
            <Badge color="jade" variant="soft">
              Authorized
            </Badge>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="88px">ID</DataList.Label>
          <DataList.Value>
            <Flex align="center" gap="2">
              <Code variant="ghost">{userData.id}</Code>
              <IconButton
                size="1"
                aria-label="Copy value"
                color="gray"
                variant="ghost"
              >
                <Icons.Copy size={ICON_SIZE} />
              </IconButton>
            </Flex>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="88px">Name</DataList.Label>
          <DataList.Value>{userData.name}</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="88px">Email</DataList.Label>
          <DataList.Value>
            <Link href={userData.email}>{userData.email}</Link>
          </DataList.Value>
        </DataList.Item>
      </DataList.Root>
    </Flex>
  );
}

export default ProfilePage;
