import "server-only";

import {sql} from "./clinet";
import {
  EmailForFolderList,
  EmailWithFolderCountList,
  type Folder,
} from "./schemas";

export async function getEmailsForFolder(name: string) {
  let nameTitleCase = toTitleCase(name);
  let rows = await sql`
                    SELECT e.id ,e.sender_id ,e.recipient_id ,e.subject ,e.body,e.sent_date , u.name, u.email
                    FROM emails e
                            JOIN email_folders ef ON e.id = ef.email_id
                            JOIN folders f ON ef.folder_id = f.id
                            JOIN users u ON e.recipient_id = u.id
                    WHERE f.name = ${nameTitleCase}
                    ORDER BY e.sent_date DESC`;

  return EmailForFolderList.parse(rows);
}

export async function getFoldersWithEmailCount() {
  let rows = await sql`
                    SELECT f.name, COUNT(ef.email_id) AS total
                    FROM folders f
                            LEFT JOIN email_folders ef ON f.id = ef.folder_id
                    GROUP BY f.name
                    ORDER BY f.name DESC`;

  let data = EmailWithFolderCountList.parse(rows);

  let topFoldersOrder = ["Inbox", "Flagged", "Sent"];
  let topFolders = topFoldersOrder.map((name) =>
    data.find((folder) => folder.name === name)
  ) as Folder[];
  let otherFolders = data.filter(({name}) => !topFoldersOrder.includes(name));

  return {
    topFolders,
    otherFolders,
  };
}

function toTitleCase(str: string) {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}
