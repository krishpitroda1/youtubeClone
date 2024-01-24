import React from "react";
import { FaDove, FaUserCircle } from "react-icons/fa";
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <FaUserCircle className="h-8 w-8 " />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
const commentsData = [
  { name: "user", text: "this video is amazing", replies: [] },
  {
    name: "user",
    text: "this video is amazing",
    replies: [
      {
        name: "user",
        text: "this video is amazing",
        replies: [
          {
            name: "user",
            text: "this video is amazing",
            replies: [
              { name: "user", text: "this video is amazing", replies: [] },
            ],
          },
        ],
      },
      { name: "user", text: "this video is amazing", replies: [] },
      { name: "user", text: "this video is amazing", replies: [] },
    ],
  },
  { name: "user", text: "this video is amazing", replies: [] },
  { name: "user", text: "this video is amazing", replies: [] },
  { name: "user", text: "this video is amazing", replies: [] },
  { name: "user", text: "this video is amazing", replies: [] },
  {
    name: "user",
    text: "this video is amazing",
    replies: [
      {
        name: "user",
        text: "this video is amazing",
        replies: [{ name: "user", text: "this video is amazing", replies: [] }],
      },
    ],
  },
  { name: "user", text: "this video is amazing", replies: [] },
  { name: "user", text: "this video is amazing", replies: [] },
  {
    name: "user",
    text: "this video is amazing",
    replies: [
      {
        name: "user",
        text: "this video is amazing",
        replies: [{ name: "user", text: "this video is amazing", replies: [] }],
      },
    ],
  },
  { name: "user", text: "this video is amazing", replies: [] },
  {
    name: "user",
    text: "this video is amazing",
    replies: [
      {
        name: "user",
        text: "this video is amazing",
        replies: [
          {
            name: "user",
            text: "this video is amazing",
            replies: [
              {
                name: "user",
                text: "this video is amazing",
                replies: [
                  { name: "user", text: "this video is amazing", replies: [] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  { name: "user", text: "this video is amazing", replies: [] },
  {
    name: "user",
    text: "this video is amazing",
    replies: [
      {
        name: "user",
        text: "this video is amazing",
        replies: [
          {
            name: "user",
            text: "this video is amazing",
            replies: [
              {
                name: "user",
                text: "this video is amazing",
                replies: [
                  {
                    name: "user",
                    text: "this video is amazing",
                    replies: [
                      {
                        name: "user",
                        text: "this video is amazing",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "user",
    text: "this video is amazing",
    replies: [
      {
        name: "user",
        text: "this video is amazing",
        replies: [
          {
            name: "user",
            text: "this video is amazing",
            replies: [
              { name: "user", text: "this video is amazing", replies: [] },
            ],
          },
        ],
      },
      { name: "user", text: "this video is amazing", replies: [] },
      { name: "user", text: "this video is amazing", replies: [] },
    ],
  },
  {
    name: "user",
    text: "this video is amazing",
    replies: [
      {
        name: "user",
        text: "this video is amazing",
        replies: [
          {
            name: "user",
            text: "this video is amazing",
            replies: [
              { name: "user", text: "this video is amazing", replies: [] },
            ],
          },
        ],
      },
      { name: "user", text: "this video is amazing", replies: [] },
      { name: "user", text: "this video is amazing", replies: [] },
    ],
  },
  {
    name: "user",
    text: "this video is amazing",
    replies: [
      {
        name: "user",
        text: "this video is amazing",
        replies: [
          {
            name: "user",
            text: "this video is amazing",
            replies: [
              { name: "user", text: "this video is amazing", replies: [] },
            ],
          },
        ],
      },
      { name: "user", text: "this video is amazing", replies: [] },
      { name: "user", text: "this video is amazing", replies: [] },
    ],
  },
  {
    name: "user",
    text: "this video is amazing",
    replies: [
      {
        name: "user",
        text: "this video is amazing",
        replies: [
          {
            name: "user",
            text: "this video is amazing",
            replies: [
              { name: "user", text: "this video is amazing", replies: [] },
            ],
          },
        ],
      },
      { name: "user", text: "this video is amazing", replies: [] },
      { name: "user", text: "this video is amazing", replies: [] },
    ],
  },
  {
    name: "user",
    text: "this video is amazing",
    replies: [
      {
        name: "user",
        text: "this video is amazing",
        replies: [
          {
            name: "user",
            text: "this video is amazing",
            replies: [
              { name: "user", text: "this video is amazing", replies: [] },
            ],
          },
        ],
      },
      { name: "user", text: "this video is amazing", replies: [] },
      { name: "user", text: "this video is amazing", replies: [] },
    ],
  },
  {
    name: "user",
    text: "this video is amazing",
    replies: [
      {
        name: "user",
        text: "this video is amazing",
        replies: [
          {
            name: "user",
            text: "this video is amazing",
            replies: [
              { name: "user", text: "this video is amazing", replies: [] },
            ],
          },
        ],
      },
      { name: "user", text: "this video is amazing", replies: [] },
      { name: "user", text: "this video is amazing", replies: [] },
    ],
  },
  {
    name: "user",
    text: "this video is amazing",
    replies: [
      {
        name: "user",
        text: "this video is amazing",
        replies: [
          {
            name: "user",
            text: "this video is amazing",
            replies: [
              { name: "user", text: "this video is amazing", replies: [] },
            ],
          },
        ],
      },
      { name: "user", text: "this video is amazing", replies: [] },
      { name: "user", text: "this video is amazing", replies: [] },
    ],
  },
  {
    name: "user",
    text: "this video is amazing",
    replies: [
      {
        name: "user",
        text: "this video is amazing",
        replies: [
          {
            name: "user",
            text: "this video is amazing",
            replies: [
              { name: "user", text: "this video is amazing", replies: [] },
            ],
          },
        ],
      },
      { name: "user", text: "this video is amazing", replies: [] },
      { name: "user", text: "this video is amazing", replies: [] },
    ],
  },
  {
    name: "user",
    text: "this video is amazing",
    replies: [
      {
        name: "user",
        text: "this video is amazing",
        replies: [
          {
            name: "user",
            text: "this video is amazing",
            replies: [
              { name: "user", text: "this video is amazing", replies: [] },
            ],
          },
        ],
      },
      { name: "user", text: "this video is amazing", replies: [] },
      { name: "user", text: "this video is amazing", replies: [] },
    ],
  },
  {
    name: "user",
    text: "this video is amazing",
    replies: [
      {
        name: "user",
        text: "this video is amazing",
        replies: [
          {
            name: "user",
            text: "this video is amazing",
            replies: [
              { name: "user", text: "this video is amazing", replies: [] },
            ],
          },
        ],
      },
      { name: "user", text: "this video is amazing", replies: [] },
      { name: "user", text: "this video is amazing", replies: [] },
    ],
  },
];
const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
