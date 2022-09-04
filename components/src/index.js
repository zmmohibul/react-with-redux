import React from "react";
import ReactDOM from "react-dom/client";
import CommentDetail from "./CommentDetail";
import { faker } from "@faker-js/faker";
import ApprovalCard from "./ApprovalCard";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

const App = () => {
  return (
    <div className="ui container">
      <ApprovalCard>
        <CommentDetail
          author="Amir"
          date="Today at 2 AM"
          content="Awesome Post!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Khalil"
          date="Yesterday at 10 AM"
          content="Love the content"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Biral"
          date="Yesterday at 5 AM"
          content="NICE!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

root.render(<App />);
