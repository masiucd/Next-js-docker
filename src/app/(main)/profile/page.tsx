import {Badge, Code, DataList, Flex} from "@radix-ui/themes";
import Link from "next/link";
import {redirect} from "next/navigation";

import {CopyButton} from "@/_components/copy-button";
import {PageWrapper} from "@/_components/page-wrapper";
import {H1, Lead, Span, Strong} from "@/_components/typography";
import {getUserFromSession} from "@/lib/auth";
import {sleep} from "@/lib/sleep";

import {CreateTaskForm} from "./_components/create-task-form";
import {getUserData, type UserDataType} from "./api";
import {UserTasks} from "./user-tasks";

async function ProfilePage() {
  await sleep(2000);
  let userFromSession = await getUserFromSession();
  if (userFromSession === null) {
    redirect("/");
  }

  let {profileData, tasks} = await getUserData(userFromSession);

  return (
    <PageWrapper>
      <Flex asChild direction="column" gap="2" mb="5">
        <aside>
          <H1>
            Welcome{" "}
            <Span
              className="relative inline-block after:absolute after:bottom-1 after:left-0 after:h-2 after:w-full after:-rotate-1 after:bg-indigo-500/40  after:content-[''] "
              color="iris"
            >
              {" "}
              {profileData.name}
            </Span>
          </H1>
          <Lead>Here you can view your tasks and create new ones</Lead>
        </aside>
      </Flex>
      <Flex
        gap="8"
        direction="column"
        p="3"
        className="mx-auto w-[62rem] border border-blue-400"
        justify="between"
      >
        <Flex>
          <UserData userData={profileData} />
          <CreateNewTask userId={profileData.id} />
        </Flex>
        <UserTasks tasks={tasks} />
      </Flex>
    </PageWrapper>
  );
}

function CreateNewTask({userId}: {userId: number}) {
  return (
    <Flex direction="column">
      <Strong>Create new task</Strong>
      <CreateTaskForm userId={userId} />
    </Flex>
  );
}

function UserData({userData}: {userData: UserDataType}) {
  return (
    <Flex direction="column" gap="4" width="400px">
      <DataList.Root>
        <DataList.Item align="center">
          <DataList.Label minWidth="88px">
            <Span weight="bold">Status</Span>
          </DataList.Label>
          <DataList.Value>
            <Badge color="jade" variant="soft">
              Authorized
            </Badge>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="88px">
            <Span weight="bold">ID</Span>
          </DataList.Label>
          <DataList.Value>
            <Flex align="center" gap="2">
              <Code variant="ghost">{userData.id}</Code>
              <CopyButton text={userData.id.toString()} />
            </Flex>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="88px">
            <Span weight="bold">Name</Span>
          </DataList.Label>
          <DataList.Value>{userData.name}</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="88px">
            <Span weight="bold">Email</Span>
          </DataList.Label>
          <DataList.Value>
            <Link href={userData.email}>{userData.email}</Link>
          </DataList.Value>
        </DataList.Item>
      </DataList.Root>
    </Flex>
  );
}

export default ProfilePage;
