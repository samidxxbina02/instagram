import React, { useContext } from "react";
import { StoreContext } from "../../context/Store/StoreContext";
import { StyledPostList } from "./styled";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { ModalContext } from "../../context/ModalContext/ModalContext";

const PostList = () => {
  const { posts, deletePost } = useContext(StoreContext);
  const { toggleEditModalIsOpen } = useContext(ModalContext);

  const handleDelete = (id) => {
    deletePost(id);
  };

  const handleOpenIsEditModal = () => {
    console.log(123);
    toggleEditModalIsOpen();
  };

  return (
    <StyledPostList.Wrapper>
      <StyledPostList.List>
        {posts?.length ? (
          posts.map((post) => (
            <StyledPostList.ListItem key={post.id}>
              <StyledPostList.Header>
                <StyledPostList.AvatarWrapper>
                  <StyledPostList.Avatar />
                </StyledPostList.AvatarWrapper>
                <StyledPostList.Nickname>
                  {post.nickname}
                </StyledPostList.Nickname>
                <StyledPostList.MoreContainer>
                  <DeleteForeverIcon onClick={() => handleDelete(post.id)} />
                  <EditIcon onClick={handleOpenIsEditModal} />
                </StyledPostList.MoreContainer>
              </StyledPostList.Header>

              <StyledPostList.Description>
                {post.description}
              </StyledPostList.Description>
            </StyledPostList.ListItem>
          ))
        ) : (
          <React.Fragment />
        )}
      </StyledPostList.List>
    </StyledPostList.Wrapper>
  );
};

export default PostList;
