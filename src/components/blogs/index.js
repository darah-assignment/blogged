import React, { useEffect, useContext, useState } from 'react';
import { connect } from 'react-redux';
import { _getAllBlogs } from '../../reducers/stories-reducer.js';

function Blog(props) {
  const fetchData = () => {
    props.get();
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(props);

  return (
    <>
      {props.blogs.map(oneBlog => (
          <>
        <div key={oneBlog._id}>
          <p>{oneBlog.blogtitle}</p>
        </div>
        </>
      ))
}
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    blogs: state.storiesReducer,
  };
};
const maDispatchToProps = dispatch => ({
  get: () => dispatch(_getAllBlogs()),
});
export default connect(mapStateToProps, maDispatchToProps)(Blog);
