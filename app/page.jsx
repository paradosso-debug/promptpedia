import Feed from '@components/Feed'
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        {" "}
        Explore & Share <br className="max-md:hidden" />{" "}
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        PromptPedia is a cutting-edge, open-source AI utility that empowers the
        modern world to discover, produce, and share imaginative prompts.
      </p>

      {/* Feed Component */}
      <Feed/>
    </section>
  );
};

export default Home;
