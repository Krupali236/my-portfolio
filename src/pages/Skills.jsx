import ProgressCard from './processbar'

const Skill = () => {
  return (
    <>
      {/* <div className="container mx-auto my-16"> */}
      {/* </div> */}
      <div className="grid mt-40">
        <h1 className="text-center font-bold">Skills</h1>
        <p className="text-xl text-center my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex at aut
          porro.
        </p>
      </div>
      <div className="grid grid-cols-2">
        <div className="columns-1">
          <ProgressCard />
        </div>
      </div>
    </>
  );
};
export default Skill;
