import Notes from "../Notes/Notes";
import Header from "../Shared/Header/Header";

const NoteCards = () => {
  return (
    <div className='main-container dark:bg-[#292c35] pt-[20px] px-[30px] pb-[30px] '>
      <Header />
      <Notes />
    </div>
  );
};

export default NoteCards;
