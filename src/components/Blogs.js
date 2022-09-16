import React from 'react'
import styled from 'styled-components'
import BlogList from './BlogList/BlogList'
import { blogList } from '../config/data'

const Blogs = () => {
  return (
    <>
      <Title>
        Welcome to the NDUBCC!
      </Title>
      <BlogList blogs={blogList} />
    </>
  )
}

const Title = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  margin-left: 30px;
  font-size: 30px;
  font-family: Avenir-Roman, sans-serif;
  color: rgb(249, 249, 249);
  letter-spacing: 1.42px;
  line-height: 1.08;
  padding: 2px 0px;
  white-space: nowrap;
  position: relative;

  @media (max-width: 479px) {
    font-size: 22px;
  }
`;

export default Blogs