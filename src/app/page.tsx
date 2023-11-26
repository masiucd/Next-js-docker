import Link from "next/link";
import React from "react";

export default function StartPage() {
  return (
    <div>
      <h1>Email client app</h1>
      <p>This is an email client app, you can send and receive emails.</p>

      <p>Enter the email app to start viewing the emails.</p>

      <Link href="/f/inbox">
        <span className="text-primary-400 hover:underline">
          Enter the email app
        </span>
      </Link>
    </div>
  );
}
