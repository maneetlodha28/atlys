import { FunctionComponent, useState } from "react";
import CreatePost from "../../containers/home/createPost";
import Post from "../../containers/home/post";
import "./style.css";
import { dummyUsersData } from "src/constants/usersData";
import Modal from "src/components/modal";
import AuthContainer from "src/containers/auth";

const Home: FunctionComponent = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleCloseModal = () => {
    setShowAuthModal(false);
  };
  const handlePost = () => {
    setShowAuthModal(true);
  };

  return (
    <div className="home-page">
      <p className="text-2xl text-primary">Hello Jane</p>
      <p className="mt-3 text-secondary text-lg">
        How are you doing today? Would you like to share something with the
        community 🤗
      </p>

      <CreatePost onPostClick={handlePost} />

      <div className="mt-4" />

      {dummyUsersData.map((user) => (
        <Post key={user.id} userData={user} onClicked={handlePost} />
      ))}

      <Modal isOpen={showAuthModal} onClose={handleCloseModal}>
        <AuthContainer onClose={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default Home;
