import React from "react";
import ReactDOM from "react-dom/client";
import CommentDetail from "./CommentDetail";
import { faker } from "@faker-js/faker";
import ApprovalCard from "./ApprovalCard";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 2 AM"
          imgSrc={faker.image.avatar()}
          content="Nice blog post!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 10 AM"
          imgSrc={faker.image.avatar()}
          content="Pretty Cool!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Today at 5 PM"
          imgSrc={faker.image.avatar()}
          content="Awesome!!!"
        />
      </ApprovalCard>
    </div>
  );
};
root.render(<App />);
