import Notes from "../Notes/Notes";
import Header from "../Shared/Header/Header";

const NoteCards = () => {
  return (
    <div className='main-container pt-[20px] px-[30px] pb-[30px] '>
      <Header />
      <Notes />
    </div>
  );
};

export default NoteCards;
