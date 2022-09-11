import { FC } from "react";
import { NextPage } from "next";

// Type definitions provided by next
import { GetServerSideProps } from "next";

// Components
import Container from "@components/atoms/Container/Container";
import Featured from "@components/templates/Featured";
import Link from "@components/atoms/Link/Link";

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from external API
  // https://dummyjson.com/
  const res = await fetch(`https://dummyjson.com/posts`);
  const data = await res.json();
  // Pass data to the page via props
  return {
    props: { data },
  };
};

interface Properties {
  [key: string]: any;
  id?: number;
  title?: string;
  body?: string;
  userId?: number;
  tags?: number;
  reactions?: number;
}

const PostsPage: NextPage<Properties> = (props) => {
  const { posts } = props.data;
  return (
    <Container>
      <Link route={"/"}>Return to home</Link>
      <Featured posts={posts} heading={"All posts"} />
    </Container>
  );
};

export default PostsPage;
