import Button from "src/components/form/button";
const CreatePost = ({ onPostClick }: { onPostClick: () => void }) => {
  return (
    <>
      <div className="create-post-container  mt-10 bg-primary rounded-lg  py-6 px-5 ">
        <p className="fs-18 text-primary font-medium lh-22 mb-4">Create post</p>
        <div className="bg-secondary px-4 rounded-lg fs flex items-center h-20">
          <div className="h-12 fs-18 bg-primary justify-center p-4 w-12 rounded-full flex items-center">
            💬
          </div>
          <p className="fs-16 leading-4 text-secondary font-normal ml-4">
            How are you feeling today?
          </p>
        </div>

        <div className="flex justify-end w-full">
          <Button onClick={onPostClick} className=" w-32 mt-4 ">
            Post
          </Button>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
