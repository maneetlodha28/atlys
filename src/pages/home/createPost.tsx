import Button from "src/components/form/button";
import "./style.css";
import { useState } from "react";
import Modal from "src/components/modal";
import AuthContainer from "src/containers/auth";
const CreatePost = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleCreatePost = () => {
    setShowAuthModal(true);
  };

  const handleCloseModal = () => {
    setShowAuthModal(false);
  };
  return (
    <>
      <div className="create-post-container p-6 rounded-lg shadow-lg  py-6 px-5  max-w-lg">
        <h2 className="text-lg font-semibold text-white mb-4">Create post</h2>
        <div className="bg-gray-900 px-4 rounded-lg flex items-center mb-4 h-20">
          <div
            style={{ background: "#27292D", fontSize: "18px" }}
            className="h-12 p-4 w-12 rounded-full flex items-center"
          >
            💬
          </div>
          <input
            type="text"
            placeholder="How are you feeling today?"
            className="w-full bg-gray-900 ml-4 text-white placeholder-gray-500 border-none outline-none"
          />
        </div>
        <div className="flex justify-end w-full">
          <Button
            onClick={handleCreatePost}
            className="bg-blue-600 hover:bg-blue-700 w-32 mt-4 "
          >
            Post
          </Button>
        </div>
      </div>

      <Modal isOpen={showAuthModal} onClose={handleCloseModal}>
        <AuthContainer onClose={handleCloseModal} />
      </Modal>
    </>
  );
};

export default CreatePost;
