//
import { FunctionComponent, useState } from "react";
import Modal from "src/components/modal";
// import SignUpForm from "src/components/signupForm";
import CreatePost from "./createPost";
import Post from "./post";
const user = {
  profilePicture: "https://i.pravatar.cc/100",
  username: "Marvin McKinney",
  timeAgo: "8 mins ago",
  isEdited: true,
  emoji: "😢",
  message:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  commentsCount: 24,
};
const Home: FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    // <div className="p-4">
    //   <button
    //     className="bg-blue-500 text-white px-4 py-2 rounded"
    //     onClick={handleOpenModal}
    //   >
    //     Open Modal
    //   </button>

    //   <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
    //     <h1 className="text-xl font-bold">Modal Title</h1>
    //     <p>This is a modal content.</p>
    //     <button
    //       className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
    //       onClick={handleCloseModal}
    //     >
    //       Close
    //     </button>
    //   </Modal>
    // </div>
    <>
      {/* <SignUpForm /> */}
      <CreatePost />
      <div className="mt-4" />
      <Post userData={user} onMoreOptionsClicked={() => {}} />
    </>
  );
};

export default Home;
